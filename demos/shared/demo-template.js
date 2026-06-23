(function () {
  const cfg = window.demoConfigs?.[window.demoSlug];
  const root = document.querySelector("#demo-root");
  if (!cfg || !root) return;

  const saleConfig = {
    code: "SALE50_3H",
    label: "Sleva 50 % / 3 hodiny",
    discountPercent: 50,
    startedAtKey: "nikolaj_sale50_started_at",
    durationMs: 3 * 60 * 60 * 1000
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

  function updateSaleCountdowns() {
    const state = getSaleState();
    const active = isSaleActive(state);
    const value = active ? formatSaleTime(state.remainingMs) : "";
    document.querySelectorAll("[data-sale-countdown]").forEach((item) => {
      item.textContent = value;
    });
    document.documentElement.classList.toggle("sale-active", active);
    document.documentElement.classList.toggle("sale-expired", !active);
    if (!active) document.querySelectorAll(".sale-demo-chip,.sale-mini-badge,.demo-sale-popup,.sale-form-note").forEach((item) => item.remove());
  }

  const plans = [
    {
      key: "Start",
      title: "START",
      price: "10 000 Kč",
      eur: "≈400 €",
      salePrice: "5 000 Kč",
      saleEur: "≈200 €",
      badge: "Rychlé spuštění",
      text: "Hotová demo šablona: vyměníme texty, fotky, kontakty, formulář a připravíme zveřejnění.",
      extra: "+ doména ~150–300 Kč / rok · hosting 0 Kč pro běžný landing",
      cta: "Objednat Start se slevou"
    },
    {
      key: "Plus",
      title: "PLUS",
      price: "20 000 Kč",
      eur: "≈800 €",
      salePrice: "10 000 Kč",
      saleEur: "≈400 €",
      badge: "Optimální",
      text: "Více bloků, druhý jazyk podle zadání, děkovací stránka, základní analytika a pečlivé úpravy.",
      extra: "+ doména ~150–300 Kč / rok · hosting 0 Kč pro běžný landing",
      cta: "Objednat Plus se slevou",
      recommended: true
    },
    {
      key: "Pro",
      title: "PRO",
      price: "od 30 000 Kč",
      eur: "od ≈1 200 €",
      salePrice: "od 15 000 Kč",
      saleEur: "od ≈600 €",
      badge: "Pro růst",
      text: "Rozšířená struktura, základ SEO, analytika kliknutí, UTM a příprava pro reklamu nebo složitější logiku. Rozsah se předem potvrdí.",
      extra: "+ doména ~150–300 Kč / rok · placené služby podle zadání",
      cta: "Probrat Pro se slevou",
      premium: true
    }
  ];

  const galleryImages = Array.isArray(cfg.galleryImages) && cfg.galleryImages.length
    ? cfg.galleryImages
    : [cfg.image].filter(Boolean);
  const image = cfg.heroImage || galleryImages[0] || cfg.image;
  const ambientImage = cfg.ambientImage || galleryImages[Math.min(7, galleryImages.length - 1)] || image;
  const secondImage = galleryImages[2] || image;
  const thirdImage = galleryImages[4] || ambientImage;
  const heroVideo = cfg.heroVideo || cfg.video || "../../assets/videos/portfolio-hero-tech.mp4";
  const ambientVideo = cfg.ambientVideo || cfg.video || heroVideo;
  const layout = cfg.layout || "classic";
  const heroMode = {
    clean: "appointment",
    editorial: "editorial",
    garage: "garage",
    fresh: "service",
    estate: "search",
    catalog: "catalog",
    academy: "program",
    gallery: "gallery",
    bold: "fitness",
    hospitality: "booking",
    action: "recruit",
    startup: "launch",
    corporate: "corporate",
    product: "dashboard",
    rescue: "audit",
    terminal: "terminal"
  }[layout] || "classic";

  document.body.classList.add(`demo-${cfg.slug}`, `layout-${layout}`, `hero-${heroMode}`);
  document.title = cfg.metaTitle || `${cfg.templateName} | Nikolaj Dev`;
  document.querySelector("meta[name='description']")?.setAttribute("content", cfg.metaDescription || cfg.subtitle);
  document.documentElement.style.setProperty("--accent", cfg.accent);
  document.documentElement.style.setProperty("--accent-2", cfg.accent2);
  document.documentElement.style.setProperty("--dark", cfg.dark);
  document.documentElement.style.setProperty("--soft", cfg.soft);
  document.documentElement.style.setProperty("--bg", cfg.bg);

  const cardMarkup = (items, className = "") => items.map((item, index) => `
    <article class="card offer-card ${className}">
      <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <strong>${item.meta}</strong>
    </article>
  `).join("");

  const imageStack = (variant = "stack") => `
    <div class="hero-visual ${variant}">
      <img class="hero-thumb hero-thumb-main" src="${image}" alt="${cfg.imageAlt}" loading="eager">
      <img class="hero-thumb hero-thumb-secondary" src="${secondImage}" alt="${cfg.imageAlt}" loading="eager">
      <div class="hero-floating-card">
        <strong>${cfg.info[1]?.value || "3–7 dní"}</strong>
        <span>${cfg.businessType}</span>
      </div>
    </div>
  `;

  const heroPanel = () => {
    const saleActive = isSaleActive();
    const chips = cfg.chips.map((chip) => `<span>${chip}</span>`).join("");
    const actions = `
      <div class="hero-actions">
        <a class="btn primary" href="#request">Nechat poptávku</a>
        <a class="btn soft" href="#offers">Zobrazit strukturu</a>
        <a class="btn telegram" href="https://t.me/pracehub" target="_blank" rel="noopener">Telegram</a>
      </div>
    `;
    const content = `
      <p class="eyebrow">${cfg.heroLabel}</p>
      ${saleActive ? `<div class="sale-demo-chip"><strong>-50%</strong><span>akce na podobný web</span><b data-sale-countdown>03:00:00</b></div>` : ""}
      <h1>${cfg.title}</h1>
      <p>${cfg.subtitle}</p>
      ${actions}
      <div class="chips">${chips}</div>
    `;

    if (["appointment", "search", "booking", "dashboard", "audit", "terminal"].includes(heroMode)) {
      const panelTitle = {
        appointment: "Rychlé objednání",
        search: "Výběr objektu",
        booking: "Zkontrolovat termíny",
        dashboard: "MVP scope",
        audit: "Audit board",
        terminal: "Bug report"
      }[heroMode];
      return `
        <section class="hero hero-panel">
          <div class="hero-media" aria-hidden="true">
            <img src="${image}" alt="">
            <video class="hero-video" muted loop playsinline preload="metadata" poster="${image}">
              <source src="${heroVideo}" type="video/mp4">
            </video>
          </div>
          <div class="wrap hero-grid">
            <div class="hero-content">${content}</div>
            <aside class="hero-side-panel">
              <span>${panelTitle}</span>
              <h2>${cfg.brand}</h2>
              ${cfg.info.map((item) => `<div><small>${item.label}</small><strong>${item.value}</strong></div>`).join("")}
              <a class="btn primary full" href="#request">Vyplnit poptávku</a>
            </aside>
          </div>
        </section>
      `;
    }

    if (["catalog", "program", "corporate"].includes(heroMode)) {
      return `
        <section class="hero hero-showcase">
          <div class="hero-media" aria-hidden="true">
            <img src="${image}" alt="">
            <video class="hero-video" muted loop playsinline preload="metadata" poster="${image}">
              <source src="${heroVideo}" type="video/mp4">
            </video>
          </div>
          <div class="wrap hero-grid">
            <div class="hero-content">${content}</div>
            ${imageStack("cards")}
          </div>
        </section>
      `;
    }

    return `
      <section class="hero hero-${heroMode}">
        <div class="hero-media" aria-hidden="true">
          <img src="${image}" alt="">
          <video class="hero-video" muted loop playsinline preload="metadata" poster="${image}">
            <source src="${heroVideo}" type="video/mp4">
          </video>
        </div>
        <div class="wrap hero-content">${content}</div>
      </section>
    `;
  };

  const nav = () => `
    <div class="demo-bar">
      <span>${cfg.demoLabel}</span>${isSaleActive() ? `<span>·</span><strong>-50% <b data-sale-countdown>03:00:00</b></strong>` : ""}<span>·</span>
      <a href="../../index.html#catalog">← Zpět</a><span>·</span>
      <a class="order" href="#request">Objednat podobný web</a>
    </div>
    <nav class="site-nav" aria-label="${cfg.brand} navigation">
      <div class="wrap nav-inner">
        <a class="brand" href="#top">
          <span class="brand-mark">${cfg.mark}</span>
          <span>${cfg.brand}<small>${cfg.descriptor}</small></span>
        </a>
        <div class="nav-links">
          <a href="#offers">Služby</a>
          <a href="#prices">Ceník</a>
          <a href="#process">Postup</a>
          <a href="#request">Poptávka</a>
        </div>
        <a class="btn primary" href="#request">Nechat poptávku</a>
      </div>
    </nav>
  `;

  const infoStrip = (style = "") => `
    <section class="info-strip ${style}">
      <div class="wrap info-grid">
        ${cfg.info.map((item) => `<article><span>${item.label}</span><strong>${item.value}</strong></article>`).join("")}
      </div>
    </section>
  `;

  const intro = (variant = "split") => `
    <section class="section-intro ${variant}">
      <div class="wrap ${variant === "banner" ? "banner-layout" : "split"}">
        <div>
          <p class="kicker">${cfg.introKicker}</p>
          <h2>${cfg.introTitle}</h2>
          <p class="lead">${cfg.introText}</p>
          <div class="${variant === "banner" ? "horizontal-cards" : "grid-2"}" style="margin-top:22px">${cardMarkup(cfg.valueCards)}</div>
        </div>
        <div class="media-card">
          <img src="${ambientImage}" alt="${cfg.imageAlt}" loading="lazy">
          <video class="lazy-video" muted loop playsinline preload="none" poster="${ambientImage}" data-src="${ambientVideo}"></video>
        </div>
      </div>
    </section>
  `;

  const offers = (variant = "grid") => `
    <section id="offers" class="offers-section ${variant}">
      <div class="wrap">
        <div class="section-head">
          <div><p class="kicker">${cfg.offerKicker}</p><h2>${cfg.offerTitle}</h2></div>
          <p>${cfg.offerText}</p>
        </div>
        <div class="${variant === "lane" ? "service-lane" : variant === "compact" ? "compact-list" : "grid-3"}">
          ${cardMarkup(cfg.offers, `offer-${variant}`)}
        </div>
      </div>
    </section>
  `;

  const prices = (variant = "") => {
    const saleActive = isSaleActive();
    return `
      <section id="prices" class="pricing-section ${variant}">
        <div class="wrap">
          <div class="section-head">
            <div><p class="kicker">Cena webu</p><h2>START / PLUS / PRO</h2></div>
            <p>Klient hned vidí rozdíl mezi rychlým spuštěním podle demo šablony a hlubší úpravou.</p>
          </div>
          <div class="price-grid">
            ${plans.map((plan) => `
              <article class="price-card ${plan.recommended ? "recommended" : ""} ${plan.premium ? "premium" : ""}">
                ${saleActive ? `<span class="sale-mini-badge">-50 % dnes</span>` : ""}
                <span class="badge">${plan.badge}</span>
                <h3>${plan.title}</h3>
                <strong>${saleActive ? `<del>${plan.price} ${plan.eur}</del>${plan.salePrice}<small>${plan.saleEur}</small>` : `${plan.price}<small>${plan.eur}</small>`}</strong>
                <p>${plan.text}</p>
                <small>${plan.extra}</small>
                <button class="btn ${plan.premium || plan.recommended ? "primary" : "soft"}" type="button" data-package="${plan.key}" data-package-price="${saleActive ? `${plan.salePrice} / ${plan.saleEur}` : `${plan.price} / ${plan.eur}`}" data-regular-price="${saleActive ? `${plan.price} / ${plan.eur}` : ""}" data-source-cta="demo_pricing_${plan.key.toLowerCase()}">${saleActive ? plan.cta : (plan.key === "Pro" ? "Probrat Pro" : `Vybrat ${plan.title}`)}</button>
              </article>
            `).join("")}
          </div>
          <div class="price-note"><strong>${saleActive ? "Minimální spuštění v akci:" : "Minimální spuštění:"}</strong> ${saleActive ? "START 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €"} + doména přibližně 150–300 Kč / rok + bezplatný hosting.${saleActive ? ` Čas do konce nabídky: <b data-sale-countdown>03:00:00</b>.` : ""} Doména, placené formuláře, placený hosting, reklamní rozpočet, logo, profesionální fotky, překlady a složité funkce se platí zvlášť.</div>
        </div>
      </section>
    `;
  };

  const process = (variant = "split") => `
    <section id="process" class="process-section ${variant}">
      <div class="wrap ${variant === "board" ? "process-board-layout" : "split"}">
        <div class="media-card">
          <img src="${thirdImage}" alt="${cfg.imageAlt}" loading="lazy">
          <video class="lazy-video" muted loop playsinline preload="none" poster="${thirdImage}" data-src="${ambientVideo}"></video>
        </div>
        <div>
          <p class="kicker">Postup</p>
          <h2>${cfg.processTitle}</h2>
          <p class="lead">${cfg.processText}</p>
          <div class="${variant === "board" ? "timeline-board" : "grid-2"}" style="margin-top:22px">${cardMarkup(cfg.processCards)}</div>
        </div>
      </div>
    </section>
  `;

  const gallery = (variant = "photo-gallery") => `
    <section class="gallery-section ${variant}">
      <div class="wrap">
        <div class="section-head">
          <div><p class="kicker">Vizuální prezentace</p><h2>${galleryTitle()}</h2></div>
          <p>V reálném projektu sem přijdou skutečné fotky byznysu, týmu, prací, prostoru nebo produktu.</p>
        </div>
        <div class="gallery ${variant}">
          ${galleryImages.slice(0, 15).map((src, index) => `<img class="${index === 0 ? "wide" : ""}" src="${src}" alt="${cfg.imageAlt}" loading="lazy">`).join("")}
          <div class="visual-tile"><strong>${cfg.galleryCards[0].title}</strong><span>${cfg.galleryCards[0].text}</span></div>
          <div class="visual-tile"><strong>${cfg.galleryCards[1].title}</strong><span>${cfg.galleryCards[1].text}</span></div>
          <div class="visual-tile"><strong>${cfg.galleryCards[2].title}</strong><span>${cfg.galleryCards[2].text}</span></div>
        </div>
      </div>
    </section>
  `;

  function galleryTitle() {
    if (layout === "gallery") return "Portfolio a vizuální příběh";
    if (layout === "estate") return "Objekty, detaily a důvěra";
    if (layout === "catalog") return "Produkty a vitrína";
    if (layout === "garage") return "Ukázky, detaily a servis";
    return "Fotky, nabídka a CTA podle oboru";
  }

  const request = () => {
    const saleActive = isSaleActive();
    return `
    <section class="booking" id="request">
      <div class="wrap split">
        <div>
          <p class="kicker">Poptávka</p>
          <h2>Objednat podobný web</h2>
          <p class="lead">Formulář odešle poptávku na e-mail. Ve zprávě bude vidět vybraná šablona i balíček START / PLUS / PRO.</p>
          <div class="cta-row">
            <a class="btn telegram" href="https://t.me/pracehub" target="_blank" rel="noopener">Napsat na Telegram</a>
            <a class="btn soft" href="https://www.facebook.com/share/18hdnUyhLG/" target="_blank" rel="noopener">Facebook / Messenger</a>
          </div>
        </div>
        <div class="panel">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="selected_template" value="${cfg.templateName}">
            <input type="hidden" name="selected_package" value="">
            <input type="hidden" name="package_price" value="">
            <input type="hidden" name="regular_price" value="">
            <input type="hidden" name="discount_price" value="">
            <input type="hidden" name="promo_code" value="${saleActive ? saleConfig.code : ""}">
            <input type="hidden" name="promo_label" value="${saleActive ? saleConfig.label : ""}">
            <input type="hidden" name="discount_percent" value="${saleActive ? saleConfig.discountPercent : ""}">
            <input type="hidden" name="promo_status" value="${saleActive ? "ACTIVE" : ""}">
            <input type="hidden" name="source_cta" value="${cfg.slug}-demo_form">
            <input type="hidden" name="sale_started_at" value="">
            <input type="hidden" name="sale_expires_at" value="">
            <input type="hidden" name="sale_remaining" value="">
            <input type="hidden" name="source" value="${cfg.slug}-demo">
            ${saleActive ? `<div class="sale-form-note">
              <strong>Poptávka se slevou 50 %</strong>
              <span>Čas do konce nabídky: <b data-sale-countdown>03:00:00</b></span>
              <span>Pokud projekt odpovídá hotové demo šabloně, start je od 5 000 Kč / ≈200 €.</span>
            </div>` : ""}
            <select name="selected_package_visible" required>
              <option value="">Vyberte balíček webu</option>
              <option value="Start" data-price="${saleActive ? "5 000 Kč / ≈200 €" : "10 000 Kč / ≈400 €"}" data-regular="${saleActive ? "10 000 Kč / ≈400 €" : ""}">${saleActive ? "START — akce 5 000 Kč / ≈200 € — hotová demo šablona" : "START — 10 000 Kč / ≈400 € — hotová demo šablona"}</option>
              <option value="Plus" data-price="${saleActive ? "10 000 Kč / ≈400 €" : "20 000 Kč / ≈800 €"}" data-regular="${saleActive ? "20 000 Kč / ≈800 €" : ""}">${saleActive ? "PLUS — akce 10 000 Kč / ≈400 € — více bloků a úpravy" : "PLUS — 20 000 Kč / ≈800 € — více bloků a úpravy"}</option>
              <option value="Pro" data-price="${saleActive ? "od 15 000 Kč / od ≈600 €" : "od 30 000 Kč / od ≈1 200 €"}" data-regular="${saleActive ? "od 30 000 Kč / od ≈1 200 €" : ""}">${saleActive ? "PRO — akce od 15 000 Kč / od ≈600 € — pro reklamu a růst" : "PRO — od 30 000 Kč / od ≈1 200 € — pro reklamu a růst"}</option>
            </select>
            <input name="package_price_visible" placeholder="Cena balíčku" readonly>
            <div class="field-row">
              <input name="name" placeholder="Jméno" required>
              <input name="phone" placeholder="Telefon" required>
            </div>
            <input name="email" type="email" placeholder="Email" required>
            <input name="telegram_whatsapp" placeholder="Telegram / WhatsApp" required>
            <input name="business_type" value="${cfg.businessType}" required>
            <textarea name="message" rows="4" placeholder="${cfg.messagePlaceholder}" required>${saleActive ? `Chci podobný web se slevou 50 %. Demo: ${cfg.templateName}.` : `Chci podobný web. Demo: ${cfg.templateName}.`}</textarea>
            <button class="btn primary full" type="submit">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
    `;
  };

  const contact = () => `
    <section id="contact">
      <div class="wrap contact-card">
        <div>
          <p class="kicker">Kontakt</p>
          <h2>Telefon, mapa a rychlá tlačítka</h2>
          <p class="lead">V reálném projektu sem přijde adresa, otevírací doba, telefon, e-mail, messengery a odkaz na mapu.</p>
          <div class="contact-list">
            <span>Demo location — Prague / your city</span>
            <span>+420 XXX XXX XXX</span>
            <span>email@yourbusiness.cz</span>
            <a href="#request">Otevřít poptávkový formulář</a>
          </div>
        </div>
        <div class="map-box">
          <div>
            <h3 style="color:#fff">DEMO LOCATION</h3>
            <p>Mapa se připojí podle reálné adresy klienta.</p>
            <a class="btn soft" href="#request">Připojit pro můj byznys</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const finalCta = () => `
    <section class="final">
      <div class="wrap final-card">
        <div>
          <p class="kicker">Nikolaj Dev template</p>
          <h2>${cfg.finalTitle}</h2>
          <p>${cfg.finalText}</p>
        </div>
        <div class="cta-row">
          <a class="btn primary" href="#request">Objednat podobný web</a>
          <a class="btn soft" href="../../index.html#catalog">Vrátit se do portfolia</a>
          <a class="btn telegram" href="https://t.me/pracehub" target="_blank" rel="noopener">Telegram</a>
        </div>
      </div>
    </section>
  `;

  const layoutSections = {
    clean: [infoStrip("minimal"), intro("split"), offers("compact"), prices("soft-band"), process("board"), gallery("clinic-gallery"), request(), contact(), finalCta()],
    editorial: [intro("banner"), offers("lane"), process("board"), prices(), gallery("editorial-gallery"), request(), contact(), finalCta()],
    garage: [infoStrip("dark-strip"), offers("lane"), gallery("garage-gallery"), prices(), process("board"), request(), contact(), finalCta()],
    fresh: [infoStrip("minimal"), offers("grid"), intro("banner"), gallery("fresh-gallery"), prices(), process("split"), request(), contact(), finalCta()],
    estate: [infoStrip("search-strip"), gallery("estate-gallery"), offers("grid"), prices(), process("board"), request(), contact(), finalCta()],
    catalog: [offers("grid"), gallery("catalog-gallery"), prices(), intro("banner"), process("split"), request(), contact(), finalCta()],
    academy: [intro("banner"), offers("compact"), process("board"), prices(), gallery("academy-gallery"), request(), contact(), finalCta()],
    gallery: [gallery("studio-gallery"), offers("lane"), prices(), intro("split"), process("board"), request(), contact(), finalCta()],
    bold: [infoStrip("dark-strip"), offers("lane"), intro("banner"), prices(), gallery("fitness-gallery"), process("split"), request(), contact(), finalCta()],
    hospitality: [infoStrip("search-strip"), gallery("hotel-gallery"), offers("grid"), prices(), intro("split"), process("board"), request(), contact(), finalCta()],
    action: [infoStrip("dark-strip"), offers("compact"), process("board"), prices(), gallery("recruit-gallery"), request(), contact(), finalCta()],
    startup: [offers("compact"), prices("soft-band"), intro("banner"), process("board"), gallery("startup-gallery"), request(), contact(), finalCta()],
    corporate: [infoStrip("minimal"), intro("split"), offers("grid"), process("board"), prices(), gallery("corporate-gallery"), request(), contact(), finalCta()],
    product: [offers("compact"), process("board"), prices(), gallery("product-gallery"), intro("banner"), request(), contact(), finalCta()],
    rescue: [infoStrip("dark-strip"), process("board"), offers("compact"), prices(), gallery("rescue-gallery"), request(), contact(), finalCta()],
    terminal: [infoStrip("dark-strip"), offers("compact"), process("board"), gallery("terminal-gallery"), prices(), request(), contact(), finalCta()]
  };

  root.innerHTML = `
    ${nav()}
    <main id="top">
      ${heroPanel()}
      ${(layoutSections[layout] || [infoStrip(), intro(), offers(), prices(), process(), gallery(), request(), contact(), finalCta()]).join("")}
    </main>
    <nav class="bottom-nav" aria-label="Rychlé akce">
      <a href="#offers">Služby</a>
      <a href="#prices">Ceník</a>
      <a href="#request">Poptávka</a>
      <a href="#contact">Mapa</a>
    </nav>
    <footer>
      <div class="wrap">
        <span>${cfg.brand} - fiktivní demo šablona</span>
        <span>Nikolaj Dev · ${cfg.templateName}</span>
      </div>
    </footer>
  `;

  function showSalePopup() {
    if (!isSaleActive()) return;
    const key = `nikolaj_sale_popup_seen_${cfg.slug}`;
    if (sessionStorage.getItem(key) === "1" || document.querySelector(".demo-sale-popup")) return;
    sessionStorage.setItem(key, "1");
    const popup = document.createElement("aside");
    popup.className = "demo-sale-popup";
    popup.innerHTML = `
      <button type="button" aria-label="Zavřít">×</button>
      <strong>Chcete podobný web?</strong>
      <p>Nyní lze objednat podobný web se slevou -50 %. Cena od 5 000 Kč, pokud projekt odpovídá hotové demo šabloně.</p>
      <span>Čas do konce nabídky: <b data-sale-countdown>03:00:00</b></span>
      <div>
        <a class="btn primary" href="#request">Objednat podobný web se slevou</a>
        <button class="btn soft" type="button">Pokračovat v prohlížení</button>
      </div>
    `;
    document.body.appendChild(popup);
    popup.querySelector("[aria-label='Zavřít']").addEventListener("click", () => popup.remove());
    popup.querySelector(".btn.soft").addEventListener("click", () => popup.remove());
    popup.querySelector(".btn.primary").addEventListener("click", () => {
      syncPackage("Start", "5 000 Kč / ≈200 €", "10 000 Kč / ≈400 €");
      const sourceInput = form?.querySelector("[name='source_cta']");
      if (sourceInput) sourceInput.value = "demo_mid_scroll_sale_popup";
      popup.remove();
    });
    updateSaleCountdowns();
  }

  let popupTriggered = false;
  const maybeShowSalePopup = () => {
    if (popupTriggered) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    if (progress >= 0.45) {
      popupTriggered = true;
      showSalePopup();
    }
  };
  window.addEventListener("scroll", maybeShowSalePopup, { passive: true });
  window.setTimeout(() => {
    if (!popupTriggered) {
      popupTriggered = true;
      showSalePopup();
    }
  }, 26000);

  const form = document.querySelector("form");
  const packageButtons = document.querySelectorAll("[data-package]");
  const packageSelect = form?.querySelector("[name='selected_package_visible']");
  const packagePriceInput = form?.querySelector("[name='package_price_visible']");

  function syncPackage(packageName, packagePrice, regularPrice = "") {
    if (!form) return;
    const active = isSaleActive();
    form.querySelector("[name='selected_package']").value = packageName || "";
    form.querySelector("[name='package_price']").value = packagePrice || "";
    form.querySelector("[name='discount_price']").value = active ? (packagePrice || "") : "";
    form.querySelector("[name='regular_price']").value = regularPrice || "";
    form.querySelector("[name='promo_code']").value = active ? saleConfig.code : "";
    form.querySelector("[name='promo_label']").value = active ? saleConfig.label : "";
    form.querySelector("[name='discount_percent']").value = active ? saleConfig.discountPercent : "";
    form.querySelector("[name='promo_status']").value = active ? "ACTIVE" : "EXPIRED";
    if (packageSelect && packageName) packageSelect.value = packageName;
    if (packagePriceInput) packagePriceInput.value = packagePrice || "";
  }

  packageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      syncPackage(button.dataset.package, button.dataset.packagePrice, button.dataset.regularPrice);
      const sourceInput = form?.querySelector("[name='source_cta']");
      if (sourceInput) sourceInput.value = button.dataset.sourceCta || "demo_pricing_sale";
      document.querySelector("#request")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  packageSelect?.addEventListener("change", () => {
    const option = packageSelect.selectedOptions[0];
    syncPackage(packageSelect.value, option?.dataset.price || "", option?.dataset.regular || "");
  });

  form?.addEventListener("submit", () => {
    const state = getSaleState();
    const saleActive = isSaleActive(state);
    if (packageSelect) {
      const option = packageSelect.selectedOptions[0];
      syncPackage(packageSelect.value, option?.dataset.price || packagePriceInput?.value || "", option?.dataset.regular || "");
    }
    form.querySelector("[name='sale_started_at']").value = saleActive ? new Date(state.startedAt).toISOString() : "";
    form.querySelector("[name='sale_expires_at']").value = saleActive ? new Date(state.expiresAt).toISOString() : "";
    form.querySelector("[name='sale_remaining']").value = saleActive ? formatSaleTime(state.remainingMs) : "";
    const message = form.querySelector("[name='message']");
    const summaryLines = saleActive
      ? [
        "SALE 50%",
        `Balíček: ${form.querySelector("[name='selected_package']").value || "nevybráno"}`,
        `Běžná cena: ${form.querySelector("[name='regular_price']").value || "neuvedeno"}`,
        `Akční cena: ${form.querySelector("[name='discount_price']").value || "neuvedeno"}`,
        `Promo kód: ${saleConfig.code}`,
        `Zdroj tlačítka: ${form.querySelector("[name='source_cta']").value || "demo_form"}`,
        `Zbývající čas: ${form.querySelector("[name='sale_remaining']").value || "neuvedeno"}`
      ]
      : [
        "Poptávka bez aktivní akce",
        `Balíček: ${form.querySelector("[name='selected_package']").value || "nevybráno"}`,
        `Cena balíčku: ${form.querySelector("[name='package_price']").value || "neuvedeno"}`,
        `Zdroj tlačítka: ${form.querySelector("[name='source_cta']").value || "demo_form"}`
      ];
    if (message && !message.value.includes("SALE 50%") && !message.value.includes("Poptávka bez aktivní akce")) {
      message.value = `${message.value.trim()}\n\n${summaryLines.join("\n")}`.trim();
    }
    if (saleActive) {
      sessionStorage.setItem("nikolaj_last_sale_lead", JSON.stringify({
        promo_code: saleConfig.code,
        promo_status: "ACTIVE",
        selected_template: cfg.templateName,
        selected_package: form.querySelector("[name='selected_package']").value,
        discount_price: form.querySelector("[name='discount_price']").value,
        regular_price: form.querySelector("[name='regular_price']").value
      }));
    } else {
      sessionStorage.removeItem("nikolaj_last_sale_lead");
    }
  });

  if (!document.querySelector("script[data-web3forms-safe-submit]")) {
    const safeSubmitScript = document.createElement("script");
    safeSubmitScript.src = "../../assets/js/web3forms-submit.js?v=web3forms-1";
    safeSubmitScript.dataset.web3formsSafeSubmit = "1";
    document.body.appendChild(safeSubmitScript);
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inAppBrowser = /FBAN|FBAV|FB_IAB|Instagram|Messenger/i.test(navigator.userAgent || "");

  document.querySelectorAll(".hero-video").forEach((item) => {
    if (reducedMotion || inAppBrowser) {
      item.classList.add("is-disabled");
      item.pause();
      return;
    }
    const start = () => {
      item.addEventListener("canplay", () => item.classList.add("is-ready"), { once: true });
      item.play().catch(() => item.classList.remove("is-ready"));
    };
    if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 1500 });
    else window.setTimeout(start, 700);
  });

  document.querySelectorAll(".lazy-video").forEach((item) => {
    const src = item.dataset.src;
    if (!src || reducedMotion || inAppBrowser) {
      item.classList.add("is-disabled");
      return;
    }
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      item.appendChild(source);
      item.addEventListener("canplay", () => {
        item.classList.add("is-ready");
        item.play().catch(() => {});
      }, { once: true });
      item.load();
    };
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      }, { rootMargin: "480px 0px", threshold: .04 });
      observer.observe(item);
    } else {
      window.setTimeout(load, 1400);
    }
  });

  updateSaleCountdowns();
  window.setInterval(updateSaleCountdowns, 1000);
})();



