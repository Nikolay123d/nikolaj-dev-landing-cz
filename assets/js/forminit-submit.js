(function () {
  "use strict";

  const FORMINIT_ENDPOINT = "https://forminit.com/f/kshbr37bfe4";
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

  function appendIf(formData, name, val) {
    const cleaned = String(val || "").trim();
    if (cleaned) formData.append(name, cleaned);
  }

  function selectedPackageData(form) {
    const selectedPackage = value(form, ["selected_package", "selected_package_visible"]);
    const packagePrice = value(form, ["package_price", "package_price_visible"]);
    const regularPrice = value(form, ["regular_price"]);
    const discountPrice = value(form, ["discount_price"]);
    return { selectedPackage, packagePrice, regularPrice, discountPrice };
  }

  function buildMessage(form, meta) {
    const originalMessage = value(form, ["message", "fi-text-message"]);
    if (/SALE 50%|Poptávka bez aktivní akce|Běžná poptávka|Normal request/i.test(originalMessage)) {
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
        `Zbývající čas: ${meta.saleRemaining || "neuvedeno"}`,
        `Zdroj tlačítka: ${meta.sourceCta || "form_submit"}`
      );
    } else {
      lines.push(
        "",
        "Běžná poptávka",
        `Balíček: ${meta.selectedPackage || "nevybráno"}`,
        `Cena balíčku: ${meta.packagePrice || meta.regularPrice || "neuvedeno"}`,
        `Zdroj tlačítka: ${meta.sourceCta || "form_submit"}`
      );
    }
    return lines.join("\n").trim();
  }

  function buildForminitPayload(form) {
    const state = saleState();
    const pkg = selectedPackageData(form);
    const rawPromoStatus = value(form, ["promo_status"]);
    const promoStatus = rawPromoStatus === "ACTIVE" && state.active
      ? "ACTIVE"
      : (state.expired || rawPromoStatus === "EXPIRED" ? "EXPIRED" : "");
    const promoCode = promoStatus === "ACTIVE" ? (value(form, ["promo_code"]) || "SALE50_3H") : "";
    const discountPercent = promoStatus === "ACTIVE" ? (value(form, ["discount_percent"]) || "50") : "";
    const saleStartedAt = promoStatus === "ACTIVE" ? (value(form, ["sale_started_at"]) || new Date(state.startedAt).toISOString()) : "";
    const saleExpiresAt = promoStatus === "ACTIVE" ? (value(form, ["sale_expires_at"]) || new Date(state.expiresAt).toISOString()) : "";
    const saleRemaining = promoStatus === "ACTIVE" ? (value(form, ["sale_remaining"]) || formatRemaining(state.remainingMs)) : "";
    const meta = {
      promoCode,
      promoStatus,
      promoLabel: promoStatus === "ACTIVE" ? (value(form, ["promo_label"]) || "Sleva 50 % / 3 hodiny") : "",
      discountPercent,
      selectedPackage: pkg.selectedPackage,
      selectedTemplate: value(form, ["selected_template", "selected_template_visible"]),
      packagePrice: pkg.packagePrice,
      regularPrice: pkg.regularPrice,
      discountPrice: promoStatus === "ACTIVE" ? pkg.discountPrice : "",
      saleStartedAt,
      saleExpiresAt,
      saleRemaining,
      sourceCta: value(form, ["source_cta"]) || "form_submit"
    };

    const formData = new FormData();
    appendIf(formData, "fi-sender-fullName", value(form, ["name", "fi-sender-fullName"]));
    appendIf(formData, "fi-sender-email", value(form, ["email", "fi-sender-email"]));
    appendIf(formData, "fi-sender-phone", value(form, ["phone", "fi-sender-phone", "fi-text-phone"]));
    appendIf(formData, "fi-sender-company", value(form, ["business_type", "company", "fi-sender-company"]));
    appendIf(formData, "fi-text-message", buildMessage(form, meta));
    appendIf(formData, "fi-text-telegramWhatsapp", value(form, ["telegram_whatsapp"]));
    appendIf(formData, "fi-text-businessType", value(form, ["business_type"]));
    appendIf(formData, "fi-text-projectType", value(form, ["project_type"]));
    appendIf(formData, "fi-text-budget", value(form, ["budget"]));
    appendIf(formData, "fi-text-timeline", value(form, ["timeline"]));
    appendIf(formData, "fi-text-promoCode", meta.promoCode);
    appendIf(formData, "fi-text-promoStatus", meta.promoStatus);
    appendIf(formData, "fi-text-promoLabel", meta.promoLabel);
    appendIf(formData, "fi-text-discountPercent", meta.discountPercent);
    appendIf(formData, "fi-text-selectedPackage", meta.selectedPackage);
    appendIf(formData, "fi-text-selectedTemplate", meta.selectedTemplate);
    appendIf(formData, "fi-text-packagePrice", meta.packagePrice);
    appendIf(formData, "fi-text-regularPrice", meta.regularPrice);
    appendIf(formData, "fi-text-discountPrice", meta.discountPrice);
    appendIf(formData, "fi-text-saleStartedAt", meta.saleStartedAt);
    appendIf(formData, "fi-text-saleExpiresAt", meta.saleExpiresAt);
    appendIf(formData, "fi-text-saleRemaining", meta.saleRemaining);
    appendIf(formData, "fi-text-sourceCta", meta.sourceCta);
    appendIf(formData, "fi-text-pageUrl", window.location.href);
    appendIf(formData, "fi-text-userAgent", navigator.userAgent || "");
    return { formData, meta };
  }

  function showFormError(form, message) {
    let note = form.querySelector("[data-forminit-error]");
    if (!note) {
      note = document.createElement("div");
      note.dataset.forminitError = "1";
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

  function submitNativeFallback(cleanFormData) {
    const tempForm = document.createElement("form");
    tempForm.method = "POST";
    tempForm.action = FORMINIT_ENDPOINT;
    tempForm.style.display = "none";
    for (const [name, val] of cleanFormData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = val;
      tempForm.appendChild(input);
    }
    document.body.appendChild(tempForm);
    tempForm.submit();
  }

  async function submitForminit(form, submitter) {
    const { formData, meta } = buildForminitPayload(form);
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
      const response = await fetch(form.action || FORMINIT_ENDPOINT, {
        method: "POST",
        body: formData
      });
      if (response.redirected || /thank-you\.html/i.test(response.url || "")) {
        window.location.href = rootThankYouUrl();
        return;
      }
      const text = await response.clone().text().catch(() => "");
      if (!response.ok || /block key|invalid field|invalid block|field name|forminit[^<]{0,80}(reject|declin|denied)/i.test(text)) {
        throw new Error(text.slice(0, 220) || `Forminit response ${response.status}`);
      }
      window.location.href = rootThankYouUrl();
    } catch (error) {
      if (/Failed to fetch|NetworkError|Load failed/i.test(String(error && error.message))) {
        submitNativeFallback(formData);
        return;
      }
      setSubmitting(submitter, false);
      showFormError(form, "Forminit poptávku odmítl. Zkontrolujte pole a zkuste to znovu.");
      console.error("Forminit submission failed", error);
    }
  }

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!/forminit\.com\/f\//i.test(form.action || "")) return;
    event.preventDefault();
    submitForminit(form, event.submitter || form.querySelector("[type='submit']"));
  });
})();



