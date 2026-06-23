(function () {
  "use strict";

  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  const WEB3FORMS_ACCESS_KEY = "ac5ffe92-57e4-41fb-a905-3dc1c154cd2e";
  const SALE_STORAGE_KEY = "nikolaj_sale50_started_at";
  const SALE_DURATION_MS = 3 * 60 * 60 * 1000;
  const THANK_YOU_FILE = "thank-you.html";

  function rootThankYouUrl() {
    const path = window.location.pathname;
    const demoIndex = path.indexOf("/demos/");
    const rootPath = demoIndex >= 0
      ? path.slice(0, demoIndex + 1)
      : path.replace(/[^/]*$/, "");
    return `${window.location.origin}${rootPath}${THANK_YOU_FILE}`;
  }

  function field(form, name) {
    return form.querySelector(`[name="${name}"]`);
  }

  function value(form, names) {
    for (const name of names) {
      const item = field(form, name);
      if (!item) continue;
      const val = String(item.value || "").trim();
      if (val) return val;
    }
    return "";
  }

  function saleState() {
    const startedAt = Number(localStorage.getItem(SALE_STORAGE_KEY));
    if (!startedAt) return { active: false, expired: false, remainingMs: 0, startedAt: 0, expiresAt: 0 };
    const expiresAt = startedAt + SALE_DURATION_MS;
    const remainingMs = Math.max(0, expiresAt - Date.now());
    return {
      active: remainingMs > 0,
      expired: remainingMs <= 0,
      remainingMs,
      startedAt,
      expiresAt
    };
  }

  function formatRemaining(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const hours = String(Math.floor(total / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function selectedPackageData(form) {
    return {
      selectedPackage: value(form, ["selected_package", "selected_package_visible"]),
      packagePrice: value(form, ["package_price", "package_price_visible"]),
      regularPrice: value(form, ["regular_price"]),
      discountPrice: value(form, ["discount_price"])
    };
  }

  function appendIf(formData, name, val) {
    const cleaned = String(val || "").trim();
    if (cleaned) formData.append(name, cleaned);
  }

  function buildMessage(form, meta) {
    const originalMessage = value(form, ["message", "fi-text-message"]);
    if (/SALE 50%|Bez aktivní akce|Běžná poptávka|Normal request/i.test(originalMessage)) {
      return originalMessage;
    }
    const lines = [originalMessage];
    if (meta.promoStatus === "ACTIVE") {
      lines.push(
        "",
        "SALE 50%",
        `Promo kód: ${meta.promoCode || "SALE50_3H"}`,
        `Balíček: ${meta.selectedPackage || "nevybráno"}`,
        `Běžná cena: ${meta.regularPrice || "neuvedeno"}`,
        `Akční cena: ${meta.discountPrice || meta.packagePrice || "neuvedeno"}`,
        `Šablona: ${meta.selectedTemplate || "neuvedeno"}`,
        `Zbývající čas: ${meta.saleRemaining || "neuvedeno"}`,
        `Zdroj tlačítka: ${meta.sourceCta || "form_submit"}`
      );
    } else {
      lines.push(
        "",
        "Běžná poptávka",
        `Balíček: ${meta.selectedPackage || "nevybráno"}`,
        `Cena balíčku: ${meta.packagePrice || meta.regularPrice || "neuvedeno"}`,
        `Šablona: ${meta.selectedTemplate || "neuvedeno"}`,
        `Zdroj tlačítka: ${meta.sourceCta || "form_submit"}`
      );
    }
    return lines.join("\n").trim();
  }

  function buildWeb3FormsPayload(form) {
    const state = saleState();
    const pkg = selectedPackageData(form);
    const rawPromoStatus = value(form, ["promo_status"]);
    const promoStatus = rawPromoStatus === "ACTIVE" && state.active
      ? "ACTIVE"
      : (state.expired || rawPromoStatus === "EXPIRED" ? "EXPIRED" : "");
    const meta = {
      promoCode: promoStatus === "ACTIVE" ? (value(form, ["promo_code"]) || "SALE50_3H") : "",
      promoStatus,
      promoLabel: promoStatus === "ACTIVE" ? (value(form, ["promo_label"]) || "Sleva 50 % / 3 hodiny") : "",
      discountPercent: promoStatus === "ACTIVE" ? (value(form, ["discount_percent"]) || "50") : "",
      selectedPackage: pkg.selectedPackage,
      selectedTemplate: value(form, ["selected_template", "selected_template_visible"]),
      packagePrice: pkg.packagePrice,
      regularPrice: pkg.regularPrice,
      discountPrice: promoStatus === "ACTIVE" ? pkg.discountPrice : "",
      saleStartedAt: promoStatus === "ACTIVE" ? (value(form, ["sale_started_at"]) || new Date(state.startedAt).toISOString()) : "",
      saleExpiresAt: promoStatus === "ACTIVE" ? (value(form, ["sale_expires_at"]) || new Date(state.expiresAt).toISOString()) : "",
      saleRemaining: promoStatus === "ACTIVE" ? (value(form, ["sale_remaining"]) || formatRemaining(state.remainingMs)) : "",
      sourceCta: value(form, ["source_cta"]) || "form_submit"
    };

    const fullName = value(form, ["name", "fi-sender-fullName"]);
    const email = value(form, ["email", "fi-sender-email"]);
    const phone = value(form, ["phone", "fi-sender-phone", "fi-text-phone"]);
    const businessType = value(form, ["business_type", "company", "fi-sender-company"]);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "CZ web poptavka - Nikolaj Dev");
    formData.append("from_name", "Nikolaj Dev CZ Landing");
    formData.append("redirect", rootThankYouUrl());

    appendIf(formData, "name", fullName);
    appendIf(formData, "email", email);
    appendIf(formData, "phone", phone);
    appendIf(formData, "telegram_whatsapp", value(form, ["telegram_whatsapp"]));
    appendIf(formData, "business_type", businessType);
    appendIf(formData, "project_type", value(form, ["project_type"]));
    appendIf(formData, "budget", value(form, ["budget"]));
    appendIf(formData, "timeline", value(form, ["timeline"]));
    appendIf(formData, "message", buildMessage(form, meta));

    appendIf(formData, "promo_code", meta.promoCode);
    appendIf(formData, "promo_status", meta.promoStatus);
    appendIf(formData, "promo_label", meta.promoLabel);
    appendIf(formData, "discount_percent", meta.discountPercent);
    appendIf(formData, "selected_package", meta.selectedPackage);
    appendIf(formData, "selected_template", meta.selectedTemplate);
    appendIf(formData, "package_price", meta.packagePrice);
    appendIf(formData, "regular_price", meta.regularPrice);
    appendIf(formData, "discount_price", meta.discountPrice);
    appendIf(formData, "sale_started_at", meta.saleStartedAt);
    appendIf(formData, "sale_expires_at", meta.saleExpiresAt);
    appendIf(formData, "sale_remaining", meta.saleRemaining);
    appendIf(formData, "source_cta", meta.sourceCta);
    appendIf(formData, "page_url", window.location.href);
    appendIf(formData, "user_agent", navigator.userAgent || "");

    return { formData, meta };
  }

  function showFormError(form, message) {
    let note = form.querySelector("[data-web3forms-error]");
    if (!note) {
      note = document.createElement("div");
      note.dataset.web3formsError = "1";
      note.style.cssText = "margin-top:12px;padding:12px;border-radius:12px;background:#fff1f2;color:#9f1239;font-weight:800;";
      form.appendChild(note);
    }
    note.textContent = message;
  }

  function setSubmitting(button, submitting) {
    if (!button) return;
    if (submitting) {
      button.dataset.originalText = button.textContent;
      button.textContent = "Odesílám...";
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalText || "Odeslat poptávku";
      button.disabled = false;
    }
  }

  async function submitWeb3Forms(form, submitter) {
    const { formData, meta } = buildWeb3FormsPayload(form);
    if (meta.promoStatus === "ACTIVE") {
      sessionStorage.setItem("nikolaj_last_sale_lead", JSON.stringify({
        promo_code: meta.promoCode,
        promo_status: "ACTIVE",
        selected_template: meta.selectedTemplate,
        selected_package: meta.selectedPackage,
        discount_price: meta.discountPrice,
        regular_price: meta.regularPrice
      }));
    } else {
      sessionStorage.removeItem("nikolaj_last_sale_lead");
    }

    setSubmitting(submitter, true);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) {
        throw new Error(data.message || `Web3Forms response ${response.status}`);
      }
      window.location.href = rootThankYouUrl();
    } catch (error) {
      setSubmitting(submitter, false);
      showFormError(form, "Formulář se nepodařilo odeslat. Zkontrolujte pole a zkuste to znovu.");
      console.error("Web3Forms submission failed", error);
    }
  }

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!/web3forms\.com\/submit/i.test(form.action || "")) return;
    event.preventDefault();
    submitWeb3Forms(form, event.submitter || form.querySelector("[type='submit']"));
  });
})();
