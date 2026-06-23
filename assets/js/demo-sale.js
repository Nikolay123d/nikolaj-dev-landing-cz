(function () {
  const saleConfig = {
    code: "SALE50_3H",
    label: "Sleva 50 % / 3 hodiny",
    discountPercent: 50,
    startedAtKey: "nikolaj_sale50_started_at",
    popupSeenPrefix: "nikolaj_demo_sale_seen_",
    durationMs: 3 * 60 * 60 * 1000
  };

  const templateName = document.querySelector("[name='selected_template']")?.value || document.title.replace("| Nikolaj Dev", "").trim();
  const pageKey = location.pathname.replace(/[^\w-]+/g, "_");
  let lastSaleActive = null;
  const packagePlans = {
    Start: {
      regular: "10 000 Kč / ≈400 €",
      discount: "5 000 Kč / ≈200 €",
      cta: "Objednat Start se slevou 50 %"
    },
    Plus: {
      regular: "20 000 Kč / ≈800 €",
      discount: "10 000 Kč / ≈400 €",
      cta: "Objednat Plus se slevou"
    },
    Pro: {
      regular: "od 30 000 Kč / od ≈1 200 €",
      discount: "od 15 000 Kč / od ≈600 €",
      cta: "Probrat Pro se slevou"
    }
  };

  function getSaleState() {
    const now = Date.now();
    const stored = Number(localStorage.getItem(saleConfig.startedAtKey));
    const startedAt = Number.isFinite(stored) && stored > 0 ? stored : now;
    if (!stored) localStorage.setItem(saleConfig.startedAtKey, String(startedAt));
    const expiresAt = startedAt + saleConfig.durationMs;
    const remainingMs = Math.max(0, expiresAt - now);
    return { startedAt, expiresAt, remainingMs, expired: remainingMs <= 0 };
  }

  function formatSaleTime(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    return [
      Math.floor(total / 3600),
      Math.floor((total % 3600) / 60),
      total % 60
    ].map((part) => String(part).padStart(2, "0")).join(":");
  }

  function isSaleActive(state = getSaleState()) {
    return !state.expired;
  }

  function updateCountdowns() {
    const state = getSaleState();
    const active = isSaleActive(state);
    const value = active ? formatSaleTime(state.remainingMs) : "";
    document.querySelectorAll("[data-sale-countdown]").forEach((item) => {
      item.textContent = value;
    });
    document.documentElement.classList.toggle("sale-active", active);
    document.documentElement.classList.toggle("sale-expired", !active);
    if (lastSaleActive !== active) {
      lastSaleActive = active;
      applyDemoSaleMode(active);
    }
  }

  function addStyles() {
    if (document.querySelector("#demoSaleStyles")) return;
    const style = document.createElement("style");
    style.id = "demoSaleStyles";
    style.textContent = `
      .demo-sale-chip,.demo-sale-popup [data-sale-countdown]{font-weight:950}
      .demo-sale-chip{display:inline-flex;align-items:center;gap:8px;margin:0 0 16px;padding:8px 11px;border-radius:999px;color:#241600;background:rgba(255,255,255,.9);border:1px solid rgba(255,212,95,.55);box-shadow:0 16px 42px rgba(0,0,0,.18)}
      .demo-sale-chip strong,.demo-sale-top{border-radius:999px;background:linear-gradient(135deg,#ffd45f,#d49a2a);color:#241600}
      .demo-sale-chip strong{padding:5px 9px}.demo-sale-top{display:inline-flex;gap:6px;align-items:center;padding:5px 9px;white-space:nowrap}
      .demo-sale-card-badge{display:inline-flex;width:max-content;max-width:100%;margin-bottom:10px;padding:6px 10px;border-radius:999px;background:linear-gradient(135deg,#ffd45f,#fff3bd);color:#241600;border:1px solid rgba(212,154,42,.35);font-weight:950}
      .demo-sale-old{display:block;margin-top:5px;color:rgba(100,116,139,.9);font-size:14px;line-height:1.25;text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:rgba(239,68,68,.75)}
      .demo-sale-new{display:block;color:inherit;font-size:inherit;line-height:1}
      .demo-sale-popup{position:fixed;right:16px;bottom:88px;z-index:120;display:grid;gap:10px;width:min(390px,calc(100vw - 28px));padding:18px;color:#111827;background:rgba(255,255,255,.95);border:1px solid rgba(255,212,95,.58);border-radius:22px;box-shadow:0 26px 80px rgba(15,23,42,.24);backdrop-filter:blur(16px)}
      .demo-sale-popup>button{position:absolute;right:12px;top:12px;width:32px;height:32px;border:1px solid rgba(17,24,39,.12);border-radius:11px;background:#fff;font-size:20px;cursor:pointer}
      .demo-sale-popup strong{padding-right:34px;font-size:23px;line-height:1.12}.demo-sale-popup p{margin:0;color:#64748b}
      .demo-sale-popup>span{width:max-content;max-width:100%;padding:7px 10px;border-radius:999px;color:#241600;background:linear-gradient(135deg,#fff3bd,#fff);border:1px solid rgba(255,212,95,.52);font-weight:950}
      .demo-sale-popup div{display:grid;gap:8px}.demo-sale-popup .btn{width:100%}
      .demo-sale-form-note{display:grid;gap:5px;margin-bottom:12px;padding:13px;border-radius:16px;color:#111827;background:linear-gradient(135deg,#fff7df,#fff);border:1px solid rgba(255,212,95,.52)}
      .demo-sale-form-note span{color:#64748b;font-weight:850}
      @media(max-width:640px){.demo-sale-chip{display:grid;grid-template-columns:auto 1fr;border-radius:18px}.demo-sale-chip b{grid-column:1/-1}.demo-sale-popup{left:10px;right:10px;bottom:76px;width:auto;padding:16px}}
    `;
    document.head.appendChild(style);
  }

  function ensureHidden(form, name, value = "") {
    let input = form.querySelector(`[name='${name}']`);
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.prepend(input);
    }
    if (value !== "" && !input.value) input.value = value;
    return input;
  }

  function fillSaleFields(form, sourceCta) {
    const state = getSaleState();
    const active = isSaleActive(state);
    const selectedPackage = form.querySelector("[name='selected_package']");
    const packagePrice = form.querySelector("[name='package_price']");
    const visiblePackage = form.querySelector("[name='selected_package_visible']");
    const visiblePrice = form.querySelector("[name='package_price_visible']");
    const packageName = visiblePackage?.value || selectedPackage?.value || "Start";
    const plan = selectedPlan(packageName);
    if (visiblePackage && !visiblePackage.value) visiblePackage.value = packageName;
    if (selectedPackage) selectedPackage.value = packageName;
    if (packagePrice) packagePrice.value = active ? plan.discount : plan.regular;
    if (visiblePrice) visiblePrice.value = active ? plan.discount : plan.regular;
    ensureHidden(form, "selected_template", templateName);
    ensureHidden(form, "regular_price").value = plan.regular;
    ensureHidden(form, "discount_price").value = active ? plan.discount : "";
    ensureHidden(form, "promo_code").value = active ? saleConfig.code : "";
    ensureHidden(form, "promo_label").value = active ? saleConfig.label : "";
    ensureHidden(form, "discount_percent").value = active ? String(saleConfig.discountPercent) : "";
    ensureHidden(form, "promo_status").value = active ? "ACTIVE" : (state.expired ? "EXPIRED" : "");
    ensureHidden(form, "source_cta").value = sourceCta;
    ensureHidden(form, "sale_started_at").value = active ? new Date(state.startedAt).toISOString() : "";
    ensureHidden(form, "sale_expires_at").value = active ? new Date(state.expiresAt).toISOString() : "";
    ensureHidden(form, "sale_remaining").value = active ? formatSaleTime(state.remainingMs) : "";
    const message = form.querySelector("[name='message']");
    if (message && !message.value.trim()) {
      message.value = active
        ? `Chci podobný web se slevou 50 %. Demo: ${templateName}.`
        : `Chci podobný web. Demo: ${templateName}.`;
    }
  }

  function selectedPlan(name) {
    return packagePlans[name] || packagePlans.Start;
  }

  function setFormPackage(form, packageName, sourceCta) {
    const plan = selectedPlan(packageName);
    const visiblePackage = form.querySelector("[name='selected_package_visible']");
    const hiddenPackage = ensureHidden(form, "selected_package");
    const visiblePrice = form.querySelector("[name='package_price_visible']");
    const hiddenPrice = ensureHidden(form, "package_price");
    const regularPrice = ensureHidden(form, "regular_price");
    const discountPrice = ensureHidden(form, "discount_price");
    const active = isSaleActive();
    if (visiblePackage) visiblePackage.value = packageName;
    if (hiddenPackage) hiddenPackage.value = packageName;
    if (visiblePrice) visiblePrice.value = active ? plan.discount : plan.regular;
    if (hiddenPrice) hiddenPrice.value = active ? plan.discount : plan.regular;
    if (regularPrice) regularPrice.value = plan.regular;
    if (discountPrice) discountPrice.value = active ? plan.discount : "";
    fillSaleFields(form, sourceCta);
  }

  function enhanceForms() {
    document.querySelectorAll("form[action*='web3forms.com']").forEach((form) => {
      fillSaleFields(form, "demo_form_sale");
      const active = isSaleActive();
      const existingNote = form.querySelector(".demo-sale-form-note");
      if (!active && existingNote) existingNote.remove();
      if (active && !existingNote) {
        const note = document.createElement("div");
        note.className = "demo-sale-form-note";
        note.innerHTML = `<strong>Poptávka se slevou 50 %</strong><span>Čas do konce nabídky: <b data-sale-countdown>03:00:00</b></span><span>Pokud projekt odpovídá hotové demo šabloně, start je od 5 000 Kč / ≈200 €.</span>`;
        form.prepend(note);
      }
      if (form.dataset.saleSubmitBound === "1") return;
      form.dataset.saleSubmitBound = "1";
      form.addEventListener("submit", () => {
        fillSaleFields(form, form.querySelector("[name='source_cta']")?.value || "demo_form_submit");
        const message = form.querySelector("[name='message']");
        const saleActive = isSaleActive();
        const summaryLines = saleActive
          ? [
            "SALE 50%",
            `Balíček: ${form.querySelector("[name='selected_package']")?.value || "Start"}`,
            `Běžná cena: ${form.querySelector("[name='regular_price']")?.value || "10 000 Kč / ≈400 €"}`,
            `Akční cena: ${form.querySelector("[name='discount_price']")?.value || "5 000 Kč / ≈200 €"}`,
            `Promo kód: ${saleConfig.code}`,
            `Zdroj tlačítka: ${form.querySelector("[name='source_cta']")?.value || "demo_form_submit"}`,
            `Zbývající čas: ${form.querySelector("[name='sale_remaining']")?.value || "neuvedeno"}`
          ]
          : [
            "Poptávka bez aktivní akce",
            `Balíček: ${form.querySelector("[name='selected_package']")?.value || "Start"}`,
            `Cena balíčku: ${form.querySelector("[name='package_price']")?.value || "10 000 Kč / ≈400 €"}`,
            `Zdroj tlačítka: ${form.querySelector("[name='source_cta']")?.value || "demo_form_submit"}`
          ];
        if (message && !message.value.includes("SALE 50%") && !message.value.includes("Poptávka bez aktivní akce")) {
          message.value = `${message.value.trim()}\n\n${summaryLines.join("\n")}`.trim();
        }
        if (saleActive) {
          sessionStorage.setItem("nikolaj_last_sale_lead", JSON.stringify({
            promo_code: saleConfig.code,
            promo_status: "ACTIVE",
            selected_template: templateName,
            selected_package: form.querySelector("[name='selected_package']")?.value || "Start",
            discount_price: form.querySelector("[name='discount_price']")?.value || "5 000 Kč / ≈200 €",
            regular_price: form.querySelector("[name='regular_price']")?.value || "10 000 Kč / ≈400 €"
          }));
        } else {
          sessionStorage.removeItem("nikolaj_last_sale_lead");
        }
      });
    });
  }

  function enhancePackageSelects() {
    const active = isSaleActive();
    document.querySelectorAll("select[name='selected_package_visible'] option[value]").forEach((option) => {
      const plan = packagePlans[option.value];
      if (!plan) return;
      option.dataset.price = active ? plan.discount : plan.regular;
      option.dataset.regular = plan.regular;
      option.textContent = active
        ? `${option.value.toUpperCase()} — akce ${plan.discount} — běžně ${plan.regular}`
        : `${option.value.toUpperCase()} — ${plan.regular}`;
    });
  }

  function enhancePricingCards() {
    const active = isSaleActive();
    document.querySelectorAll("[data-package]").forEach((button) => {
      const packageName = button.dataset.package || "Start";
      const plan = selectedPlan(packageName);
      const sourceCta = `demo_pricing_${packageName.toLowerCase()}_sale50`;
      button.dataset.packagePrice = active ? plan.discount : plan.regular;
      button.dataset.regularPrice = active ? plan.regular : "";
      button.dataset.sourceCta = button.dataset.sourceCta || sourceCta;
      button.textContent = active ? plan.cta : (packageName === "Pro" ? "Probrat Pro" : `Vybrat ${packageName}`);

      const card = button.closest("article, .price-card, .template-price-card, .pricing-card, .package-card");
      if (card && !active) card.querySelector(".demo-sale-card-badge")?.remove();
      if (card && active && !card.querySelector(".demo-sale-card-badge")) {
        const badge = document.createElement("span");
        badge.className = "demo-sale-card-badge";
        badge.textContent = "-50% / 3 hodiny";
        card.prepend(badge);
      }
      const priceTarget = card?.querySelector("strong, .price, .plan-price");
      if (priceTarget) {
        priceTarget.innerHTML = active
          ? `<span class="demo-sale-new">${plan.discount}</span><span class="demo-sale-old">běžně ${plan.regular}</span>`
          : `<span class="demo-sale-new">${plan.regular}</span>`;
      }

      if (!button.dataset.salePrepared) button.addEventListener("click", (event) => {
        const target = document.querySelector("#order, #request, #contact, form");
        if (!target) return;
        event.preventDefault();
        document.querySelectorAll("form[action*='web3forms.com']").forEach((form) => setFormPackage(form, packageName, button.dataset.sourceCta));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      button.dataset.salePrepared = "1";
    });
  }

  function addSaleChips() {
    if (!isSaleActive()) return;
    const bar = document.querySelector(".demo-bar");
    if (bar && !bar.querySelector(".demo-sale-top")) {
      const top = document.createElement("strong");
      top.className = "demo-sale-top";
      top.innerHTML = `-50% <b data-sale-countdown>03:00:00</b>`;
      bar.appendChild(top);
    }
    const heroContent = document.querySelector(".hero-content, .hero .shell, .hero .wrap");
    if (heroContent && !heroContent.querySelector(".demo-sale-chip")) {
      const chip = document.createElement("div");
      chip.className = "demo-sale-chip";
      chip.innerHTML = `<strong>-50%</strong><span>akce na podobný web</span><b data-sale-countdown>03:00:00</b>`;
      heroContent.prepend(chip);
    }
  }

  function showPopup() {
    if (!isSaleActive()) return;
    const key = saleConfig.popupSeenPrefix + pageKey;
    if (sessionStorage.getItem(key) === "1" || document.querySelector(".demo-sale-popup")) return;
    sessionStorage.setItem(key, "1");
    const target = document.querySelector("#order, #request, form") || document.body;
    const popup = document.createElement("aside");
    popup.className = "demo-sale-popup";
    popup.innerHTML = `
      <button type="button" aria-label="Zavřít">×</button>
      <strong>Chcete podobný web?</strong>
      <p>Nyní lze objednat podobný web se slevou -50 %. Cena od 5 000 Kč, pokud projekt odpovídá hotové demo šabloně.</p>
      <span>Čas do konce nabídky: <b data-sale-countdown>03:00:00</b></span>
      <div>
        <a class="btn primary" href="#${target.id || "order"}">Objednat podobný web se slevou</a>
        <button class="btn ghost" type="button">Pokračovat v prohlížení</button>
      </div>
    `;
    document.body.appendChild(popup);
    popup.querySelector("[aria-label='Zavřít']").addEventListener("click", () => popup.remove());
    popup.querySelector(".btn.ghost").addEventListener("click", () => popup.remove());
    popup.querySelector(".btn.primary").addEventListener("click", () => {
      document.querySelectorAll("form[action*='web3forms.com']").forEach((form) => fillSaleFields(form, "demo_mid_scroll_sale_popup"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      popup.remove();
    });
    updateCountdowns();
  }

  function applyDemoSaleMode(active) {
    if (!active) {
      document.querySelectorAll(".demo-sale-chip,.demo-sale-top,.demo-sale-card-badge,.demo-sale-popup,.demo-sale-form-note").forEach((item) => item.remove());
    } else {
      addSaleChips();
    }
    enhancePackageSelects();
    enhanceForms();
    enhancePricingCards();
  }

  addStyles();
  updateCountdowns();
  window.setInterval(updateCountdowns, 1000);

  let popupTriggered = false;
  const maybePopup = () => {
    if (popupTriggered) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    if (progress >= 0.45) {
      popupTriggered = true;
      showPopup();
    }
  };
  window.addEventListener("scroll", maybePopup, { passive: true });
  window.setTimeout(() => {
    if (!popupTriggered) {
      popupTriggered = true;
      showPopup();
    }
  }, 26000);
})();



