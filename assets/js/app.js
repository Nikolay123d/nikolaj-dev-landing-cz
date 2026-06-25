const services = [
  {
    id: "start-landing",
    title: "Start landing",
    text: "Jednostránkový prodejní web pro službu, specialistu, lokální byznys nebo ověření nápadu.",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "2–5 dní",
    cta: "Objednat landing page"
  },
  {
    id: "business-site",
    title: "Firemní web",
    text: "Web se službami, ukázkami práce, kontakty, poptávkovým formulářem a jasnou strukturou důvěry.",
    price: "PLUS 20 000 Kč / ≈800 €",
    timeline: "5–10 dní",
    cta: "Probrat web"
  },
  {
    id: "mvp",
    title: "MVP / mini platforma",
    text: "Mini platforma s rolemi, formuláři, databází, chatem, administrací nebo integracemi.",
    price: "PRO od 30 000 Kč / od ≈1 200 €",
    timeline: "individuálně",
    cta: "Naplánovat MVP"
  },
  {
    id: "audit",
    title: "Záchrana / audit projektu",
    text: "Audit, oprava chyb, úklid projektu a férový seznam toho, co je opravdu hotové.",
    price: "audit od 2 500 Kč",
    timeline: "1–4 dny",
    cta: "Objednat audit"
  },
  {
    id: "bugs",
    title: "Oprava chyb",
    text: "Oprava rozbitých obrazovek, formulářů, responzivity, logiky, publikace nebo chyb na webu.",
    price: "jednotlivě od 1 250 Kč",
    timeline: "podle zadání",
    cta: "Opravit problém"
  },
  {
    id: "launch-support",
    title: "Příprava ke spuštění",
    text: "Poptávkový formulář, kontaktní tlačítka, doména, zveřejnění a finální kontrola před ukázáním klientům.",
    price: "podle balíčku",
    timeline: "podle zadání",
    cta: "Probrat spuštění"
  }
];

const siteCategories = window.siteCategories || [];

const projects = [
  {
    id: "bakery-cafe",
    group: "template",
    title: "Demo web pro pekařství / kavárnu",
    label: "New demo",
    category: "Bakery / cafe",
    image: "assets/images/bakery-cafe/hero-bakery.jpg",
    gallery: ["assets/images/bakery-cafe/hero-bakery.jpg", "assets/images/bakery-cafe/bakery-counter.jpg", "assets/images/bakery-cafe/interior.jpg"],
    demoUrl: "demos/bakery-cafe/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3–7 dní",
    short: "Web pro pekárnu, kavárnu nebo cukrárnu: video v první obrazovce, menu, fotky produktů, káva, mapa, kontakty a poptávky.",
    forWhom: "Pro pekárnu, kavárnu, cukrárnu, brunch podnik nebo malé café, kde je potřeba ukázat produkty, otevírací dobu, mapu a rychlý kontakt.",
    features: ["Video hero", "Menu s cenami", "Blok kávy", "Galerie", "Mobile bottom nav"],
    includes: ["Úprava podle značky", "Výměna menu a fotek", "Poptávkový formulář", "Tlačítka Telegram/Facebook/volání", "Příprava ke zveřejnění"]
  },
  {
    id: "tedition-eu",
    group: "template",
    title: "Tedition EU Service Hub Landing",
    label: "Nový projekt",
    category: "Firemní služby / dokumenty / projekty",
    image: "assets/images/tedition-eu/tedition-eu-preview.webp",
    gallery: ["assets/images/tedition-eu/tedition-eu-preview.webp"],
    demoUrl: "https://nikolay123d.github.io/tedition-eu-landing-cz/",
    externalDemo: true,
    highlight: "client-project",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3–7 dní",
    short: "Prémiový firemní landing pro český service hub: práce, dokumenty, S.R.O / živnost / A1, faktury, DPH a projektová podpora.",
    forWhom: "Pro firmy a službové projekty, které potřebují seriózně ukázat nabídku, vysvětlit postup a sbírat poptávky přes Facebook nebo formulář.",
    features: ["Corporate hero video", "Facebook CTA", "Poptávkový formulář", "Popup po scrollu", "Mobilní verze"],
    includes: ["Úprava podle značky", "Výměna textů/fotek/kontaktů", "Facebook kontakt", "Poptávkový formulář", "Příprava ke zveřejnění"]
  },
  {
    id: "restaurant-cafe",
    group: "template",
    title: "Web pro restauraci / kavárnu",
    label: "New demo",
    category: "Restaurace / cafe",
    image: "assets/images/restaurant-cafe/hero-food.jpg",
    gallery: ["assets/images/restaurant-cafe/hero-food.jpg", "assets/images/restaurant-cafe/interior.jpg", "assets/images/restaurant-cafe/dish-pasta.jpg"],
    demoUrl: "demos/restaurant-cafe/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3–7 dní",
    short: "Prémiový demo web restaurace: menu, rezervace, fotky jídel, kontakty, mapa a mobilní CTA.",
    forWhom: "Pro kavárnu, restauraci, bistro, vinný bar, brunch podnik nebo rozvoz jídla, kde je důležité rychle ukázat menu, atmosféru a přijmout poptávku.",
    features: ["Hero s atmosférou", "HTML menu s cenami", "Rezervační formulář", "Galerie", "Mobile bottom nav"],
    includes: ["Úprava podle značky", "Výměna menu a fotek", "Rezervační formulář", "Tlačítka Telegram/Facebook/volání", "Příprava ke zveřejnění"]
  },
  {
    id: "rempro",
    group: "template",
    title: "RemPro landing pro rekonstrukce",
    label: "Hotové demo",
    category: "Construction / renovation",
    image: "assets/img/rempro/desktop-home.png",
    gallery: ["assets/img/rempro/desktop-home.png", "assets/img/rempro/mobile-hero.png", "assets/img/rempro/mobile-full.png"],
    demoUrl: "demos/rempro/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "4–7 dní",
    short: "Landing page pro stavební nebo renovační firmu: služby, kalkulace, postup, portfolio a poptávka.",
    forWhom: "Pro stavební tým, rekonstrukce bytů, dokončovací práce, koupelny na klíč nebo lokální renovační firmu.",
    features: ["Prémiová první obrazovka", "Služby a postup prací", "Portfolio realizací", "Poptávkový formulář na kalkulaci", "Mobilní verze"],
    includes: ["Úprava podle značky", "Výměna fotek a textů", "Poptávkový formulář na e-mail", "Příprava ke zveřejnění", "Základní SEO struktura"]
  },
  {
    id: "czechtrip",
    group: "template",
    title: "CzechTrip Tours Landing",
    label: "Hotové demo",
    category: "Travel / tours",
    image: "assets/img/czechtrip/preview.svg",
    gallery: ["assets/img/czechtrip/preview.svg"],
    demoUrl: "demos/czechtrip/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "4–6 dní",
    short: "Landing page pro výlety a cesty z Prahy: trasy, program, důvěra a poptávka v messengeru.",
    forWhom: "Pro organizátora výletů, průvodce, cestovní projekt nebo víkendové lokální výlety.",
    features: ["Prémiový travel styl", "Karty tras", "Program výletu", "Poptávka v messengeru", "Mobilní verze"],
    includes: ["Úprava podle značky", "Výměna tras a textů", "Poptávkový formulář na e-mail", "Příprava ke zveřejnění", "Základní SEO struktura"]
  },
  {
    id: "construction",
    group: "template",
    title: "Construction / Renovation Concept",
    label: "Demo koncept",
    category: "Construction",
    image: "assets/img/construction-landing-dark.png",
    gallery: ["assets/img/construction-landing-dark.png", "assets/img/construction-landing-light.png"],
    demoUrl: "",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3–6 dní",
    short: "Koncept webu pro stavební firmu: služby, důvěra, realizace a kontakt.",
    forWhom: "Pro lokální stavební služby, rekonstrukce, fasády, střechy nebo komplexní práce.",
    features: ["Katalog služeb", "Blok důvěry", "Poptávka", "Portfolio prací"],
    includes: ["Prodejní struktura", "Responzivní verze", "Základní formulář", "Příprava ke zveřejnění"]
  },
  {
    id: "delivery",
    group: "template",
    title: "Demo web pro doručení / flotilu",
    label: "Hotové demo",
    category: "Local service",
    image: "assets/images/delivery-fleet/courier-handoff.jpg",
    gallery: ["assets/images/delivery-fleet/courier-handoff.jpg", "assets/images/delivery-fleet/parcel-boxes.jpg", "assets/images/delivery-fleet/locker-flow.jpg"],
    demoUrl: "demos/delivery-fleet/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "2–6 dní",
    short: "Web pro doručení, kurýry a flotilu: zóny, tarify, klientská poptávka, nábor kurýrů a rychlé kontakty.",
    forWhom: "Pro kurýrní službu, rozvoz jídla, lokální službu, flotilu nebo projekt, který potřebuje rychle sbírat poptávky od klientů i kurýrů.",
    features: ["Video hero", "Zóny a tarify", "Poptávkový formulář", "Blok pro kurýry", "Mobile bottom nav"],
    includes: ["Úprava podle značky", "Výměna zón a tarifů", "Formulář na e-mail", "Tlačítka Telegram/Facebook", "Příprava ke zveřejnění"]
  },
  {
    id: "beauty-salon",
    group: "template",
    title: "Demo web pro salon krásy",
    label: "Hotové demo",
    category: "Beauty / salon",
    image: "assets/images/beauty-salon/hero-salon.jpg",
    gallery: ["assets/images/beauty-salon/hero-salon.jpg", "assets/images/beauty-salon/hair-service.jpg", "assets/images/beauty-salon/nail-service.jpg"],
    demoUrl: "demos/beauty-salon/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3–6 dní",
    short: "Web pro salon, specialistu nebo beauty studio: služby, ceny, galerie, objednávka, kontakty a mobilní CTA.",
    forWhom: "Pro kadeřníka, nail stylistku, brow/lash studio, kosmetiku, masážní salon nebo malý salon, kde jsou důležité fotky práce a rychlá rezervace.",
    features: ["Video hero", "Služby a ceny", "Galerie prací", "Objednávkový formulář", "Mobile bottom nav"],
    includes: ["Úprava podle značky", "Výměna služeb a cen", "Formulář na e-mail", "Tlačítka Telegram/Facebook", "Příprava ke zveřejnění"]
  },
  {
    id: "pracehub",
    group: "real",
    title: "PráceHub.cz",
    label: "Live product",
    category: "Mini platform",
    image: "assets/img/pracehub-mobile-home.png",
    gallery: ["assets/img/pracehub-mobile-home.png", "assets/img/pracehub-login.png", "assets/img/pracehub-prague-brand.png"],
    demoUrl: "https://pracehub.cz",
    price: "MVP / PRO od 30 000 Kč / od ≈1 200 €",
    timeline: "individuálně",
    short: "Živý produkt: role, chat, uživatelé, poptávky a praktické UX lekce pro mini platformy.",
    forWhom: "Pro projekty, kde nestačí landing page a je potřeba produktová logika: role, uživatelé, poptávky, chat nebo účet.",
    features: ["Role", "Chat", "Uživatelé", "PWA", "Účet"],
    includes: ["Scope", "Architektura", "MVP logika", "Kontrola rizik", "Plán rozvoje"]
  }
];

const projectIds = new Set(projects.map((project) => project.id));
const categoryProjectSkips = new Set(["bakery-cafe", "tedition-eu", "restaurant-cafe", "renovation", "tours-guides", "delivery-fleet", "beauty-salon"]);
siteCategories.forEach((category) => {
  if (!category.demoUrl || projectIds.has(category.id) || categoryProjectSkips.has(category.id)) return;
  projects.push({
    id: category.id,
    group: "template",
    title: category.title,
    label: category.status,
    category: category.badge,
    image: category.image,
    gallery: [category.image],
    demoUrl: category.demoUrl,
    price: category.price,
    timeline: category.timeline,
    short: category.description,
    forWhom: `Pro směr: ${category.title}. Demo šablonu lze upravit pro reálný byznys: vyměnit fotky, služby, ceny, kontakty a poptávkový formulář.`,
    features: category.features,
    includes: ["Úprava podle značky", "Výměna textů/fotek/kontaktů", "Formulář na e-mail", "Tlačítka Telegram/Facebook", "Příprava ke zveřejnění"]
  });
  projectIds.add(category.id);
});

const pricingPlans = [
  {
    key: "Start",
    title: "START",
    subtitle: "Rychlé spuštění",
    price: "10 000 Kč / ≈400 €",
    salePrice: "5 000 Kč / ≈200 €",
    timeline: "2–5 dní",
    goodFor: "Hotová demo šablona: vyměníme texty, fotky, kontakty, formulář a připravíme rychlé spuštění.",
    extras: ["+ doména ~150–300 Kč / rok", "+ hosting 0 Kč pro běžný landing page"],
    includes: ["úprava demo šablony", "výměna textů/fotek/kontaktů", "poptávkový formulář", "mobilní verze", "příprava ke zveřejnění"],
    cta: "Objednat Start se slevou"
  },
  {
    key: "Plus",
    title: "PLUS",
    subtitle: "Optimální varianta",
    price: "20 000 Kč / ≈800 €",
    salePrice: "10 000 Kč / ≈400 €",
    timeline: "4–8 dní",
    goodFor: "Když je potřeba více úprav: další bloky, druhý jazyk, děkovací stránka, základní analytika a pečlivé přizpůsobení byznysu.",
    extras: ["+ doména ~150–300 Kč / rok", "+ hosting 0 Kč pro běžný landing page"],
    includes: ["rozšířená struktura", "další sekce", "druhý jazyk podle zadání", "děkovací stránka", "základní analytika"],
    cta: "Objednat Plus se slevou",
    recommended: true
  },
  {
    key: "Pro",
    title: "PRO",
    subtitle: "Pro reklamu a růst",
    price: "od 30 000 Kč / od ≈1 200 €",
    salePrice: "od 15 000 Kč / od ≈600 €",
    timeline: "individuálně",
    goodFor: "Pro web určený pro reklamu a růst: analytika kliknutí, UTM, základ SEO, další sekce a rozšířená příprava. Přesný rozsah se potvrdí před startem.",
    extras: ["+ doména ~150–300 Kč / rok", "+ placené služby podle zadání"],
    includes: ["rozšířená struktura", "UTM / analytika kliknutí", "základ SEO", "další sekce", "příprava na reklamu"],
    cta: "Probrat Pro se slevou",
    premium: true
  }
];

const faqItems = [
  ["Kolik stojí web?", "Jednoduchý web podle demo šablony začíná balíčkem START za 10 000 Kč / ≈400 €. Během akce stojí START 5 000 Kč / ≈200 €, PLUS 10 000 Kč / ≈400 € místo 20 000 Kč / ≈800 €, PRO od 15 000 Kč / od ≈600 € místo od 30 000 Kč / od ≈1 200 €."],
  ["Jak dlouho to trvá?", "Rychlý landing lze připravit za 2–5 dní. Firemní web obvykle za 5–10 dní. MVP se nacení individuálně."],
  ["Lze použít šablonu jako základ?", "Ano. Je to dobrý způsob, jak rychleji začít, hned vidět styl a snížit nejistotu."],
  ["Co potřebuji od klienta?", "Popis služby, kontakty, příklady webů, fotky/logo pokud existují, požadovaný termín a orientační rozpočet."],
  ["Lze web později rozšířit?", "Ano. Nejprve lze spustit základní verzi a potom přidávat sekce, formuláře, analytiku nebo integrace."],
  ["Pomáháte se zveřejněním?", "Ano, web lze připravit pro zvolený způsob zveřejnění. Spuštění probíhá pouze po samostatném potvrzení."]
];

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const servicesGrid = document.querySelector("#servicesGrid");
const categoryGrid = document.querySelector("#categoryGrid");
const projectGrid = document.querySelector("#projectGrid");
const faqList = document.querySelector("#faqList");
const appModal = document.querySelector("#appModal");
const modalContent = document.querySelector("#modalContent");
const floatingCta = document.querySelector("#floatingCta");
const closeFloatingCta = document.querySelector("#closeFloatingCta");
const toast = document.querySelector("#toast");
const FACEBOOK_URL = "https://www.facebook.com/share/1D8igDrmuT/";
const PRELOADER_KEY = "nikolaj_preloader_seen";
const CONTACT_POPUP_CLOSED_KEY = "nikolaj_contact_popup_closed";
const SALE50_ENABLED = true;
const SALE50_DURATION_HOURS = 3;
const SALE50_STORAGE_KEY = "nikolaj_sale50_started_at";
const SALE50_PROMO_CODE = "SALE50_3H";
const saleConfig = {
  enabled: SALE50_ENABLED,
  code: SALE50_PROMO_CODE,
  label: "Sleva 50 % / 3 hodiny",
  discountPercent: 50,
  startedAtKey: SALE50_STORAGE_KEY,
  stickyClosedKey: "nikolaj_sale50_sticky_closed",
  durationMs: SALE50_DURATION_HOURS * 60 * 60 * 1000
};
let ctaClosed = sessionStorage.getItem(saleConfig.stickyClosedKey) === "1";
let lastSaleActive = null;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function getSaleState() {
  const now = Date.now();
  const stored = Number(localStorage.getItem(saleConfig.startedAtKey));
  const startedAt = Number.isFinite(stored) && stored > 0 ? stored : now;
  if (!stored) localStorage.setItem(saleConfig.startedAtKey, String(startedAt));
  const expiresAt = startedAt + saleConfig.durationMs;
  const remainingMs = Math.max(0, expiresAt - now);
  return {
    startedAt,
    expiresAt,
    remainingMs,
    expired: remainingMs <= 0
  };
}

function formatSaleTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function isSaleActive(state = getSaleState()) {
  return saleConfig.enabled && !state.expired;
}

function planButtonLabel(plan, saleActive = isSaleActive()) {
  if (saleActive) return plan.cta;
  return plan.key === "Pro" ? "Probrat Pro" : `Vybrat ${plan.title}`;
}

function planDisplayPrice(plan, saleActive = isSaleActive()) {
  return saleActive ? plan.salePrice : plan.price;
}

function normalLeadLabel(source = "") {
  if (source.includes("format_help")) return "Vybrat vhodný typ webu";
  if (source.includes("pricing") || source.includes("package")) return "Nechat poptávku";
  if (source.includes("sticky")) return "Poptávka";
  if (source.includes("hero") || source.includes("showcase")) return "Objednat web";
  return "Nechat poptávku";
}

function applySaleMode(saleActive) {
  document.documentElement.classList.toggle("sale-expired", !saleActive);
  document.documentElement.classList.toggle("sale-active", saleActive);

  document.querySelectorAll("[data-package]").forEach((button) => {
    const plan = pricingPlans.find((item) => item.key === button.dataset.package);
    if (!plan) return;
    button.dataset.packagePrice = planDisplayPrice(plan, saleActive);
    button.dataset.regularPrice = saleActive ? plan.price : "";
    button.textContent = planButtonLabel(plan, saleActive);
    const card = button.closest("article");
    const price = card?.querySelector("strong");
    if (price) {
      price.innerHTML = saleActive
        ? `<span class="price-sale-current">${plan.salePrice}</span><span class="price-sale-old">běžně ${plan.price}</span>`
        : `<span class="price-sale-current">${plan.price}</span>`;
    }
  });

  const quickNote = document.querySelector(".quick-price-note");
  if (quickNote) {
    quickNote.innerHTML = saleActive
      ? `<strong>Minimální spuštění v akci:</strong> START 5 000 Kč / ≈200 € + doména přibližně 150–300 Kč ročně. U běžného landing page může být hosting 0 Kč. Časovač: <b data-sale-countdown>03:00:00</b>.`
      : `<strong>Minimální spuštění:</strong> START 10 000 Kč / ≈400 € + doména přibližně 150–300 Kč ročně. U běžného landing page může být hosting 0 Kč.`;
  }

  if (floatingCta) {
    const title = floatingCta.querySelector("strong");
    const text = floatingCta.querySelector("span");
    if (title) title.innerHTML = saleActive ? `Sleva 50 % ještě: <b data-sale-countdown>03:00:00</b>` : "Chcete probrat web?";
    if (text) text.textContent = saleActive ? "Web v akci od 5 000 Kč." : "Balíčky START / PLUS / PRO od 10 000 Kč.";
  }

  document.querySelectorAll("[data-open-lead][data-sale-source]:not([data-package])").forEach((button) => {
    if (!button.dataset.saleLabel) button.dataset.saleLabel = button.textContent.trim();
    button.textContent = saleActive ? button.dataset.saleLabel : normalLeadLabel(button.dataset.saleSource || "");
  });

  const heroSaleText = document.querySelector(".showcase-top strong");
  if (heroSaleText) heroSaleText.textContent = saleActive ? "v akci od 5 000 Kč / ≈200 €" : "od 10 000 Kč / ≈400 €";

  const featuredMeta = document.querySelector(".featured-demo-card .project-meta span");
  if (featuredMeta) featuredMeta.textContent = saleActive ? "SALE START 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €";

  const quickEyebrow = document.querySelector(".quick-pricing-section .eyebrow");
  if (quickEyebrow) quickEyebrow.textContent = saleActive ? "Akce -50 % pro první objednávky" : "Ceník";
  const quickTitle = document.querySelector("#quickPricingTitle");
  if (quickTitle) quickTitle.textContent = saleActive ? "3 balíčky webu se slevou 50 %" : "3 balíčky webu";
  const quickPricingText = document.querySelector(".quick-pricing-section .section-head p");
  if (quickPricingText) {
    quickPricingText.textContent = saleActive
      ? "Základní cena je v Kč. V akci začíná START od 5 000 Kč / ≈200 €, pokud se projekt hodí pro hotovou demo šablonu."
      : "Základní cena je v Kč. START začíná od 10 000 Kč / ≈400 €, pokud projekt odpovídá hotové demo šabloně.";
  }

  const pricingIntro = document.querySelector(".pricing-intro");
  const pricingEyebrow = pricingIntro?.querySelector(".eyebrow");
  const pricingTitle = pricingIntro?.querySelector("h2");
  if (pricingEyebrow) pricingEyebrow.textContent = saleActive ? "Akční ceník" : "Ceník";
  if (pricingTitle) pricingTitle.textContent = saleActive ? "3 balíčky webu se slevou 50 %" : "3 balíčky webu";
  const hostingLaunch = document.querySelector(".hosting-note div span");
  if (hostingLaunch) {
    hostingLaunch.textContent = saleActive
      ? "START v akci 5 000 Kč / ≈200 € + doména přibližně 150–300 Kč ročně + bezplatný hosting."
      : "START 10 000 Kč / ≈400 € + doména přibližně 150–300 Kč / rok + bezplatný hosting.";
  }

  document.querySelectorAll(".trust-row span").forEach((span) => {
    if (/akci|sleva/i.test(span.textContent)) span.hidden = !saleActive;
  });

  renderCategories(document.querySelector("[data-category-filter].active")?.dataset.categoryFilter || "all");
  renderProjects(document.querySelector("[data-filter].active")?.dataset.filter || "all");
}

function updateSaleCountdowns() {
  const state = getSaleState();
  const saleActive = isSaleActive(state);
  const label = saleActive ? formatSaleTime(state.remainingMs) : "";
  document.querySelectorAll("[data-sale-countdown]").forEach((item) => {
    item.textContent = label;
  });
  if (lastSaleActive !== saleActive) {
    lastSaleActive = saleActive;
    applySaleMode(saleActive);
  }
}

function planSalePrice(plan) {
  return plan ? planDisplayPrice(plan) : "";
}

function saleMetadata(sourceCta = "sale_cta") {
  const state = getSaleState();
  return {
    promoCode: saleConfig.code,
    promoLabel: saleConfig.label,
    discountPercent: saleConfig.discountPercent,
    sourceCta,
    saleStartedAt: new Date(state.startedAt).toISOString(),
    saleExpiresAt: new Date(state.expiresAt).toISOString(),
    saleRemaining: state.expired ? "expired" : formatSaleTime(state.remainingMs)
  };
}

function withSalePayload(payload = {}, sourceCta = "sale_cta") {
  const data = typeof payload === "string" ? { title: payload } : { ...(payload || {}) };
  if (!isSaleActive()) return data;
  return {
    ...data,
    sale: true,
    ...saleMetadata(sourceCta)
  };
}

function openSaleLead(payload, sourceCta) {
  openModal("lead", withSalePayload(payload, sourceCta));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a,button")) closeMenu();
});

function openModal(type, payload) {
  const builders = {
    preview: buildPreviewModal,
    details: buildDetailsModal,
    pricing: buildPricingModal,
    lead: buildLeadModal,
    category: buildCategoryModal
  };
  modalContent.innerHTML = builders[type](payload);
  const isDemoPreview = type === "preview" && payload?.demoUrl && !payload.demoUrl.startsWith("http");
  appModal.classList.toggle("demo-open", Boolean(isDemoPreview));
  appModal.classList.add("open");
  appModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  bindModalActions();
  updateSaleCountdowns();
}

function normalizeLeadPayload(payload) {
  if (!payload) return { selected: "", selectedPackage: "", packagePrice: "", regularPrice: "", sale: false };
  if (typeof payload === "string") return { selected: payload, selectedPackage: "", packagePrice: "", regularPrice: "", sale: false };
  if (payload.kind === "package") {
    return {
      selected: payload.template || "",
      selectedPackage: payload.package || "",
      packagePrice: payload.price || "",
      regularPrice: payload.regularPrice || "",
      sale: Boolean(payload.sale && isSaleActive()),
      promoCode: payload.promoCode || "",
      promoLabel: payload.promoLabel || "",
      discountPercent: payload.discountPercent || "",
      sourceCta: payload.sourceCta || "",
      saleStartedAt: payload.saleStartedAt || "",
      saleExpiresAt: payload.saleExpiresAt || "",
      saleRemaining: payload.saleRemaining || ""
    };
  }
  const plan = pricingPlans.find((item) => item.key === payload.selectedPackage || item.title === payload.selectedPackage);
  return {
    selected: payload.title || "",
    selectedPackage: payload.selectedPackage || "",
    packagePrice: payload.packagePrice || (payload.sale ? planSalePrice(plan) : ""),
    regularPrice: payload.regularPrice || plan?.price || "",
    sale: Boolean(payload.sale && isSaleActive()),
    promoCode: payload.promoCode || "",
    promoLabel: payload.promoLabel || "",
    discountPercent: payload.discountPercent || "",
    sourceCta: payload.sourceCta || "",
    saleStartedAt: payload.saleStartedAt || "",
    saleExpiresAt: payload.saleExpiresAt || "",
    saleRemaining: payload.saleRemaining || ""
  };
}

function leadPackagePayload(plan, template = "", sale = false, sourceCta = "package_button") {
  const saleActive = sale && isSaleActive();
  const payload = {
    kind: "package",
    template,
    package: plan.key,
    price: planDisplayPrice(plan, saleActive),
    regularPrice: saleActive ? plan.price : ""
  };
  if (saleActive) Object.assign(payload, withSalePayload({}, sourceCta));
  return {
    ...payload,
    kind: "package",
    template,
    package: plan.key
  };
}

function closeModal() {
  appModal.classList.remove("open");
  appModal.classList.remove("demo-open");
  appModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalContent.innerHTML = "";
}

function featureList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function buildPreviewModal(project) {
  const isLocalDemo = project.demoUrl && !project.demoUrl.startsWith("http");
  if (isLocalDemo) {
    return `
      <div class="demo-modal">
        <div class="demo-toolbar">
          <div>
            <p class="eyebrow">${project.label}</p>
            <h2 id="modalTitle">${project.title}</h2>
            <div class="demo-toolbar-meta">
              <span>${project.price}</span>
              <span>${project.timeline}</span>
              <span>${project.category}</span>
            </div>
          </div>
          <div class="demo-toolbar-actions">
            <a class="btn ghost" href="${project.demoUrl}" target="_blank" rel="noopener">Otevřít v nové záložce</a>
            <button class="btn primary" type="button" data-lead-project="${project.id}">Objednat podobný web</button>
            <button class="btn dark" type="button" data-details-project="${project.id}">Podrobnosti</button>
          </div>
        </div>
        <iframe class="demo-frame fullscreen" src="${project.demoUrl}" title="${project.title} demo"></iframe>
      </div>`;
  }

  const preview = project.demoUrl && !project.demoUrl.startsWith("http")
    ? `<iframe class="demo-frame" src="${project.demoUrl}" title="${project.title} demo"></iframe>`
    : `<img class="modal-hero-image" src="${project.image}" alt="${project.title} preview">`;
  const openDemo = project.demoUrl
    ? `<a class="btn dark" href="${project.demoUrl}" target="_blank" rel="noopener">Otevřít demo</a>`
    : "";

  return `
    <div class="modal-header">
      <p class="eyebrow">${project.label}</p>
      <h2 id="modalTitle">${project.title}</h2>
      <p>${project.short}</p>
    </div>
    ${preview}
    <div class="modal-meta">
      <span>${project.price}</span>
      <span>${project.timeline}</span>
      <span>${project.category}</span>
    </div>
    <div class="modal-actions-row">
      ${openDemo}
      <button class="btn primary" type="button" data-lead-project="${project.id}">Objednat podobný web</button>
      <button class="btn ghost" type="button" data-details-project="${project.id}">Podrobnosti</button>
    </div>`;
}

function buildDetailsModal(project) {
  const gallery = (project.gallery || [project.image])
    .map((src) => `<img src="${src}" alt="${project.title} screenshot">`)
    .join("");
  const saleActive = isSaleActive();

  return `
    <div class="modal-header">
      <p class="eyebrow">${project.category}</p>
      <h2 id="modalTitle">${project.title}</h2>
      <p>${project.forWhom}</p>
    </div>
    <div class="detail-layout">
      <div class="detail-gallery">${gallery}</div>
      <div class="detail-copy">
        <h3>Co je součástí</h3>
        <ul>${featureList(project.includes)}</ul>
        <h3>Klíčové prvky</h3>
        <ul>${featureList(project.features)}</ul>
        <div class="modal-meta stacked">
          ${saleActive ? `<span>v akci od 5 000 Kč / ≈200 €</span><span>běžně od 10 000 Kč / ≈400 €</span>` : `<span>od 10 000 Kč / ≈400 €</span>`}
          <span>${project.timeline}</span>
        </div>
        <button class="btn primary" type="button" data-lead-project="${project.id}" data-sale-source="project_detail_sale">${saleActive ? "Chci takový web se slevou" : "Chci takový web"}</button>
      </div>
    </div>`;
}

function buildPricingModal() {
  const saleActive = isSaleActive();
  return `
    <div class="modal-header">
      <p class="eyebrow">${saleActive ? "Akční ceník -50%" : "Ceník"}</p>
      <h2 id="modalTitle">START / PLUS / PRO</h2>
      <p>${saleActive ? `Jeden časovač platí pro všechny balíčky: <strong data-sale-countdown>03:00:00</strong>. ` : ""}U běžného prezentačního webu nebo landing page může být hosting zdarma.</p>
    </div>
    <div class="pricing-modal-grid">
      ${pricingPlans.map((plan) => `
        <article class="${plan.recommended ? "is-recommended" : ""} ${plan.premium ? "is-premium" : ""}">
          ${plan.recommended ? "<span class=\"plan-badge\">Populární / optimální</span>" : ""}
          ${saleActive ? `<span class="sale-card-badge">-50 % dnes</span>` : ""}
          <h3>${plan.title}</h3>
          <p class="plan-subtitle">${plan.subtitle}</p>
          <div class="sale-price-block">
            ${saleActive ? `<del>${plan.price}</del><strong>${plan.salePrice}</strong>` : `<strong>${plan.price}</strong>`}
          </div>
          <p>${plan.goodFor}</p>
          <span>${plan.timeline}</span>
          <div class="plan-extras">${plan.extras.map((line) => `<small>${line}</small>`).join("")}</div>
          <ul>${featureList(plan.includes)}</ul>
          <button class="btn primary" type="button" data-lead-package="${plan.key}" data-sale-source="pricing_${plan.key.toLowerCase()}_sale50">${planButtonLabel(plan, saleActive)}</button>
        </article>`).join("")}
    </div>
    <div class="pricing-note">
      <h3>${saleActive ? "Minimální spuštění v akci" : "Minimální spuštění"}</h3>
      <p>${saleActive ? "START 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €"} + doména přibližně 150–300 Kč / rok + bezplatný hosting.</p>
      <p>Pro jednoduchý prezentační web tedy může být měsíční hosting 0 Kč.</p>
      <small>Není v ceně: doména, placené formuláře, placený hosting, reklamní rozpočet, logo, profesionální fotky, překlady a složité funkce se platí zvlášť.</small>
    </div>`;
}

function buildLeadModal(projectOrPlan = "") {
  const leadData = normalizeLeadPayload(projectOrPlan);
  const saleActive = isSaleActive();
  const selected = leadData.selected;
  const selectedPackage = leadData.selectedPackage;
  const selectedPlan = pricingPlans.find((plan) => plan.key === selectedPackage);
  const packagePrice = leadData.packagePrice || (selectedPlan ? planDisplayPrice(selectedPlan, saleActive) : "");
  const regularPrice = leadData.regularPrice || (selectedPlan ? selectedPlan.price : "");
  const isSale = saleActive && (leadData.sale || Boolean(leadData.promoCode));
  const promoCode = leadData.promoCode || (isSale ? saleConfig.code : "");
  const promoLabel = leadData.promoLabel || (isSale ? saleConfig.label : "");
  const discountPercent = leadData.discountPercent || (isSale ? saleConfig.discountPercent : "");
  const promoStatus = isSale ? "ACTIVE" : "";
  const saleNote = isSale
    ? `<div class="sale-form-notice">
        <strong>Vybrali jste poptávku se slevou 50 %</strong>
        <span>Promo kód: ${promoCode}</span>
        ${selected ? `<span>Šablona: ${selected}</span>` : ""}
        ${selectedPackage ? `<span>Balíček: ${selectedPackage}</span>` : ""}
        ${packagePrice ? `<span>Akční cena: ${packagePrice}</span>` : ""}
        ${regularPrice ? `<span>Běžná cena: ${regularPrice}</span>` : ""}
        <span>Čas do konce nabídky: <b data-sale-countdown>03:00:00</b></span>
      </div>`
    : "";
  const messageValue = isSale
    ? `Chci podobný web se slevou 50 %. Demo/šablona: ${selected || "potřebuji poradit"}. Balíček: ${selectedPackage || "potřebuji poradit"}.`
    : "";
  return `
    <div class="modal-header">
      <p class="eyebrow">Poptávka</p>
      <h2 id="modalTitle">Popište zadání</h2>
      <p>Poptávka se odešle na e-mail Nikolaje. Můžete také napsat přímo na Telegram @pracehub nebo Facebook.</p>
    </div>
    ${saleNote}
    <form class="lead-form" id="leadForm" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="selected_template" value="${selected}">
      <input type="hidden" name="selected_package" value="${selectedPackage}">
      <input type="hidden" name="package_price" value="${packagePrice}">
      <input type="hidden" name="regular_price" value="${regularPrice}">
      <input type="hidden" name="discount_price" value="${isSale ? packagePrice : ""}">
      <input type="hidden" name="promo_code" value="${promoCode}">
      <input type="hidden" name="promo_label" value="${promoLabel}">
      <input type="hidden" name="discount_percent" value="${discountPercent}">
      <input type="hidden" name="promo_status" value="${promoStatus}">
      <input type="hidden" name="source_cta" value="${leadData.sourceCta || ""}">
      <input type="hidden" name="sale_started_at" value="${leadData.saleStartedAt || ""}">
      <input type="hidden" name="sale_expires_at" value="${leadData.saleExpiresAt || ""}">
      <input type="hidden" name="sale_remaining" value="${leadData.saleRemaining || ""}">
      <input type="hidden" name="fi-sender-fullName" value="">
      <input type="hidden" name="fi-sender-email" value="">
      <input type="hidden" name="fi-text-phone" value="">
      <input type="hidden" name="fi-text-telegram_whatsapp" value="">
      <input type="hidden" name="fi-text-business_type" value="">
      <input type="hidden" name="fi-text-selected_template" value="${selected}">
      <input type="hidden" name="fi-text-selected_package" value="${selectedPackage}">
      <input type="hidden" name="fi-text-package_price" value="${packagePrice}">
      <input type="hidden" name="fi-text-regular_price" value="${regularPrice}">
      <input type="hidden" name="fi-text-discount_price" value="${isSale ? packagePrice : ""}">
      <input type="hidden" name="fi-text-promo_code" value="${promoCode}">
      <input type="hidden" name="fi-text-promo_label" value="${promoLabel}">
      <input type="hidden" name="fi-text-discount_percent" value="${discountPercent}">
      <input type="hidden" name="fi-text-promo_status" value="${promoStatus}">
      <input type="hidden" name="fi-text-source_cta" value="${leadData.sourceCta || ""}">
      <input type="hidden" name="fi-text-sale_started_at" value="${leadData.saleStartedAt || ""}">
      <input type="hidden" name="fi-text-sale_expires_at" value="${leadData.saleExpiresAt || ""}">
      <input type="hidden" name="fi-text-sale_remaining" value="${leadData.saleRemaining || ""}">
      <input type="hidden" name="fi-text-message" value="">
      <input type="hidden" name="fi-select-project_type" value="">
      <input type="hidden" name="fi-select-budget" value="">
      <input type="hidden" name="fi-select-timeline" value="">
      <div class="field-row">
        <label>Jméno<input name="name" autocomplete="name" required></label>
        <label>Telefon<input name="phone" autocomplete="tel" required></label>
      </div>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Telegram / WhatsApp<input name="telegram_whatsapp" autocomplete="off" required></label>
      <div class="field-row">
        <label>Typ byznysu / projektu<input name="business_type" autocomplete="organization" placeholder="Například: rekonstrukce, kavárna, zájezdy, služba" required></label>
        <label>Typ zadání<select name="project_type" required>
          <option value="">Vyberte</option>
          <option ${selected.includes("Landing") || selected.includes("RemPro") ? "selected" : ""}>Landing page</option>
          <option ${selected.includes("Business") ? "selected" : ""}>Firemní web</option>
          <option ${selected.includes("MVP") ? "selected" : ""}>MVP / mini platforma</option>
          <option ${selected.includes("Audit") ? "selected" : ""}>Audit / záchrana projektu</option>
          <option>Oprava chyb</option>
          <option>Příprava webu ke spuštění</option>
        </select></label>
      </div>
      <div class="field-row">
        <label>Rozpočet<select name="budget">
          <option>Potřebuji poradit</option>
          <option>do 10 000 Kč</option>
          <option ${selectedPackage === "Start" ? "selected" : ""}>${saleActive ? "START v akci 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €"}</option>
          <option ${selectedPackage === "Plus" ? "selected" : ""}>${saleActive ? "PLUS v akci 10 000 Kč / ≈400 €" : "PLUS 20 000 Kč / ≈800 €"}</option>
          <option ${selectedPackage === "Pro" ? "selected" : ""}>${saleActive ? "PRO v akci od 15 000 Kč / od ≈600 €" : "PRO od 30 000 Kč / od ≈1 200 €"}</option>
        </select></label>
        <label>Termín<select name="timeline">
          <option>Potřebuji poradit</option>
          <option>Urgentně</option>
          <option>1–2 týdny</option>
          <option>2–4 týdny</option>
          <option>Flexibilně</option>
        </select></label>
      </div>
      <label>Vybraná šablona<input name="selected_template_visible" placeholder="Odkaz nebo název šablony" value="${selected}"></label>
      <div class="field-row">
        <label>Balíček / úroveň spuštění<select name="selected_package_visible" required>
          <option value="">Potřebuji poradit</option>
          ${pricingPlans.map((plan) => `<option value="${plan.key}" ${selectedPackage === plan.key ? "selected" : ""}>${plan.title} — ${saleActive ? `akce ${plan.salePrice} / běžně ${plan.price}` : plan.price} — ${plan.subtitle}</option>`).join("")}
        </select></label>
        <label>Cena balíčku<input name="package_price_visible" value="${packagePrice}" placeholder="Automaticky po výběru" readonly></label>
      </div>
      <label>Co potřebujete udělat?<textarea name="message" rows="5" required placeholder="Popište službu, termín, materiály a co už máte">${messageValue}</textarea></label>
      <button class="btn dark full" type="submit">Odeslat poptávku</button>
      <div class="messenger-row">
        <a href="https://t.me/pracehub" target="_blank" rel="noopener">Telegram @pracehub</a>
        <a href="https://www.facebook.com/share/1D8igDrmuT/" target="_blank" rel="noopener">Facebook</a>
        <a href="mailto:nikyrchenko71@gmail.com">Email</a>
      </div>
    </form>`;
}

function buildCategoryModal(category) {
  const saleActive = isSaleActive();
  return `
    <div class="modal-header">
      <p class="eyebrow">${category.status}</p>
      <h2 id="modalTitle">${category.title}</h2>
      <p>${category.description}</p>
    </div>
    <div class="category-detail">
      ${renderCategoryVisual(category, false)}
      <div>
        <div class="modal-meta stacked">
          ${saleActive ? `<span>v akci od 5 000 Kč / ≈200 €</span><span>běžně od 10 000 Kč / ≈400 €</span>` : `<span>od 10 000 Kč / ≈400 €</span>`}
          <span>${category.timeline}</span>
          <span>${category.badge}</span>
        </div>
        <h3>Co lze zahrnout</h3>
        <ul>${featureList(category.features)}</ul>
        <div class="modal-actions-row">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}">Zobrazit šablonu</a>` : ""}
          <button class="btn primary" type="button" data-lead-category="${category.id}" data-sale-source="category_detail_sale">${saleActive ? "Objednat se slevou -50 %" : "Objednat podobný web"}</button>
        </div>
      </div>
    </div>`;
}

function bindModalActions() {
  modalContent.querySelectorAll("[data-lead-project]").forEach((button) => {
    button.addEventListener("click", () => openSaleLead(projects.find((item) => item.id === button.dataset.leadProject), button.dataset.saleSource || "project_modal_sale"));
  });
  modalContent.querySelectorAll("[data-lead-plan]").forEach((button) => {
    button.addEventListener("click", () => openSaleLead(button.dataset.leadPlan, button.dataset.saleSource || "plan_modal_sale"));
  });
  modalContent.querySelectorAll("[data-lead-package]").forEach((button) => {
    const plan = pricingPlans.find((item) => item.key === button.dataset.leadPackage);
    button.addEventListener("click", () => openModal("lead", leadPackagePayload(plan, "", true, button.dataset.saleSource || "pricing_modal_sale")));
  });
  modalContent.querySelectorAll("[data-details-project]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.detailsProject)));
  });
  modalContent.querySelectorAll("[data-lead-category]").forEach((button) => {
    const startPlan = pricingPlans.find((item) => item.key === "Start");
    button.addEventListener("click", () => openSaleLead({
      ...(siteCategories.find((item) => item.id === button.dataset.leadCategory) || {}),
      selectedPackage: "Start",
      packagePrice: planDisplayPrice(startPlan),
      regularPrice: isSaleActive() ? startPlan.price : ""
    }, button.dataset.saleSource || "category_modal_sale"));
  });
  modalContent.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", packagePayloadFromButton(button)));
  });
  const leadForm = modalContent.querySelector("#leadForm");
  const packageSelect = modalContent.querySelector("[name='selected_package_visible']");
  const packagePriceInput = modalContent.querySelector("[name='package_price_visible']");
  if (packageSelect && packagePriceInput) {
    packageSelect.addEventListener("change", () => {
      const plan = pricingPlans.find((item) => item.key === packageSelect.value);
      packagePriceInput.value = plan ? planDisplayPrice(plan, isSaleActive()) : "";
    });
  }
  if (leadForm) leadForm.addEventListener("submit", () => {
    const state = getSaleState();
    const saleActive = isSaleActive(state);
    const visibleTemplate = leadForm.querySelector("[name='selected_template_visible']");
    const hiddenTemplate = leadForm.querySelector("[name='selected_template']");
    if (visibleTemplate && hiddenTemplate) hiddenTemplate.value = visibleTemplate.value;
    const visiblePackage = leadForm.querySelector("[name='selected_package_visible']");
    const hiddenPackage = leadForm.querySelector("[name='selected_package']");
    const visiblePackagePrice = leadForm.querySelector("[name='package_price_visible']");
    const hiddenPackagePrice = leadForm.querySelector("[name='package_price']");
    if (visiblePackage && hiddenPackage) hiddenPackage.value = visiblePackage.value;
    const selectedPlan = pricingPlans.find((plan) => plan.key === visiblePackage?.value);
    if (visiblePackagePrice && selectedPlan) visiblePackagePrice.value = planDisplayPrice(selectedPlan, saleActive);
    if (visiblePackagePrice && hiddenPackagePrice) hiddenPackagePrice.value = visiblePackagePrice.value;
    const hiddenRegularPrice = leadForm.querySelector("[name='regular_price']");
    const hiddenDiscountPrice = leadForm.querySelector("[name='discount_price']");
    const hiddenSaleRemaining = leadForm.querySelector("[name='sale_remaining']");
    const hiddenSaleStarted = leadForm.querySelector("[name='sale_started_at']");
    const hiddenSaleExpires = leadForm.querySelector("[name='sale_expires_at']");
    const hiddenPromo = leadForm.querySelector("[name='promo_code']");
    const hiddenPromoLabel = leadForm.querySelector("[name='promo_label']");
    const hiddenDiscountPercent = leadForm.querySelector("[name='discount_percent']");
    const hiddenPromoStatus = leadForm.querySelector("[name='promo_status']");
    if (selectedPlan && hiddenRegularPrice) hiddenRegularPrice.value = selectedPlan.price;
    if (hiddenDiscountPrice) hiddenDiscountPrice.value = saleActive ? (visiblePackagePrice?.value || "") : "";
    if (hiddenPromo) hiddenPromo.value = saleActive ? saleConfig.code : "";
    if (hiddenPromoLabel) hiddenPromoLabel.value = saleActive ? saleConfig.label : "";
    if (hiddenDiscountPercent) hiddenDiscountPercent.value = saleActive ? saleConfig.discountPercent : "";
    if (hiddenPromoStatus) hiddenPromoStatus.value = saleActive ? "ACTIVE" : (state.expired ? "EXPIRED" : "");
    if (hiddenSaleStarted) hiddenSaleStarted.value = saleActive ? new Date(state.startedAt).toISOString() : "";
    if (hiddenSaleExpires) hiddenSaleExpires.value = saleActive ? new Date(state.expiresAt).toISOString() : "";
    if (hiddenSaleRemaining) hiddenSaleRemaining.value = saleActive ? formatSaleTime(state.remainingMs) : "";
    const messageField = leadForm.querySelector("[name='message']");
    const hiddenSource = leadForm.querySelector("[name='source_cta']");
    const summaryLines = saleActive
      ? [
        "SALE 50%",
        `Balíček: ${hiddenPackage?.value || "nevybráno"}`,
        `Běžná cena: ${hiddenRegularPrice?.value || "neuvedeno"}`,
        `Akční cena: ${hiddenDiscountPrice?.value || hiddenPackagePrice?.value || "neuvedeno"}`,
        `Promo kód: ${saleConfig.code}`,
        `Zdroj tlačítka: ${hiddenSource?.value || "lead_form"}`,
        `Zbývající čas: ${hiddenSaleRemaining?.value || "neuvedeno"}`
      ]
      : [
        "Poptávka bez aktivní akce",
        `Balíček: ${hiddenPackage?.value || "nevybráno"}`,
        `Cena balíčku: ${hiddenPackagePrice?.value || hiddenRegularPrice?.value || "neuvedeno"}`,
        `Zdroj tlačítka: ${hiddenSource?.value || "lead_form"}`
      ];
    if (messageField && !messageField.value.includes("SALE 50%") && !messageField.value.includes("Poptávka bez aktivní akce")) {
      messageField.value = `${messageField.value.trim()}\n\n${summaryLines.join("\n")}`.trim();
    }
    const syncPairs = [
      ["name", "fi-sender-fullName"],
      ["email", "fi-sender-email"],
      ["phone", "fi-text-phone"],
      ["telegram_whatsapp", "fi-text-telegram_whatsapp"],
      ["business_type", "fi-text-business_type"],
      ["selected_template", "fi-text-selected_template"],
      ["selected_package", "fi-text-selected_package"],
      ["package_price", "fi-text-package_price"],
      ["regular_price", "fi-text-regular_price"],
      ["discount_price", "fi-text-discount_price"],
      ["promo_code", "fi-text-promo_code"],
      ["promo_label", "fi-text-promo_label"],
      ["discount_percent", "fi-text-discount_percent"],
      ["promo_status", "fi-text-promo_status"],
      ["source_cta", "fi-text-source_cta"],
      ["sale_started_at", "fi-text-sale_started_at"],
      ["sale_expires_at", "fi-text-sale_expires_at"],
      ["sale_remaining", "fi-text-sale_remaining"],
      ["message", "fi-text-message"],
      ["project_type", "fi-select-project_type"],
      ["budget", "fi-select-budget"],
      ["timeline", "fi-select-timeline"]
    ];
    syncPairs.forEach(([fromName, toName]) => {
      const from = leadForm.querySelector(`[name='${fromName}']`);
      const to = leadForm.querySelector(`[name='${toName}']`);
      if (from && to) to.value = from.value;
    });
    if (saleActive) {
      sessionStorage.setItem("nikolaj_last_sale_lead", JSON.stringify({
        promo_code: hiddenPromo?.value || "",
        promo_status: "ACTIVE",
        selected_package: hiddenPackage?.value || "",
        selected_template: hiddenTemplate?.value || "",
        discount_price: hiddenDiscountPrice?.value || "",
        regular_price: hiddenRegularPrice?.value || ""
      }));
    } else {
      sessionStorage.removeItem("nikolaj_last_sale_lead");
    }
    showToast("Odesílám poptávku na e-mail.");
  });
}

function packagePayloadFromButton(button) {
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  if (!button?.dataset?.package) {
    return button?.dataset?.saleSource ? withSalePayload({
      selectedPackage: "Start",
      packagePrice: planDisplayPrice(startPlan, saleActive),
      regularPrice: saleActive ? startPlan.price : ""
    }, button.dataset.saleSource) : "";
  }
  const plan = pricingPlans.find((item) => item.key === button.dataset.package);
  const isSale = saleActive && Boolean(button.dataset.saleSource || button.dataset.regularPrice);
  return {
    kind: "package",
    template: button.dataset.template || "",
    package: button.dataset.package,
    price: plan ? planDisplayPrice(plan, saleActive) : button.dataset.packagePrice || "",
    regularPrice: isSale ? (button.dataset.regularPrice || plan?.price || "") : "",
    ...(isSale ? saleMetadata(button.dataset.saleSource || "package_button_sale") : {})
  };
}

function openLeadFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("lead") !== "1") return;
  const packageKey = params.get("package") || "";
  const template = params.get("template") || "";
  const plan = pricingPlans.find((item) => item.key.toLowerCase() === packageKey.toLowerCase());
  window.setTimeout(() => {
    openModal("lead", {
      kind: "package",
      template,
      package: plan?.key || packageKey,
      price: plan?.price || ""
    });
    const cleanUrl = `${window.location.pathname}${window.location.hash || ""}`;
    window.history.replaceState(null, "", cleanUrl);
  }, 120);
}

function renderCategoryVisual(category, lazy = true) {
  if (category.image) {
    return `<img class="category-image" src="${category.image}" alt="${category.title}" ${lazy ? "loading=\"lazy\"" : ""}>`;
  }
  return `
    <div class="category-visual tone-${category.imageTone || "default"}" aria-hidden="true">
      <span>${category.visual || "Site"}</span>
      <i></i><i></i><i></i>
    </div>`;
}

function renderCategories(filter = "all") {
  if (!categoryGrid) return;
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const list = filter === "all" ? siteCategories : siteCategories.filter((category) => category.filter === filter);
  categoryGrid.innerHTML = list.map((category) => {
    const isExternalDemo = category.externalDemo || category.demoUrl?.startsWith("http");
    return `
    <article class="category-card ${category.highlight ? `category-card--${category.highlight}` : ""}">
      ${renderCategoryVisual(category)}
      <div class="category-body">
        <div class="category-labels">
          <span>${category.badge}</span>
          <span>${category.status}</span>
          ${saleActive ? `<span class="sale-card-badge">-50 % dnes</span>` : ""}
        </div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="project-meta">
          <span>${saleActive ? "v akci od 5 000 Kč / ≈200 €" : "od 10 000 Kč / ≈400 €"}</span>
          <span>${category.timeline}</span>
        </div>
        <ul>${featureList(category.features.slice(0, 4))}</ul>
        <div class="category-actions">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}" ${isExternalDemo ? 'target="_blank" rel="noopener"' : ""}>Zobrazit šablonu</a>` : ""}
          <button class="btn primary" type="button" data-order-category="${category.id}">${saleActive ? "Objednat se slevou -50 %" : "Objednat podobný web"}</button>
          <button class="btn secondary" type="button" data-category-details="${category.id}">Podrobnosti</button>
        </div>
      </div>
    </article>
  `;
  }).join("");
  categoryGrid.querySelectorAll("[data-order-category]").forEach((button) => {
    button.addEventListener("click", () => openSaleLead({
      ...(siteCategories.find((item) => item.id === button.dataset.orderCategory) || {}),
      selectedPackage: "Start",
      packagePrice: planDisplayPrice(startPlan, isSaleActive()),
      regularPrice: isSaleActive() ? startPlan.price : ""
    }, "category_card_sale_button"));
  });
  categoryGrid.querySelectorAll("[data-category-details]").forEach((button) => {
    button.addEventListener("click", () => openModal("category", siteCategories.find((item) => item.id === button.dataset.categoryDetails)));
  });
}

function renderServices() {
  servicesGrid.innerHTML = services.map((service) => `
    <article class="service-card">
      <span>${service.timeline}</span>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
      <strong>${service.price}</strong>
      <button type="button" data-service="${service.id}">${service.cta}</button>
    </article>
  `).join("");
  servicesGrid.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      const service = services.find((item) => item.id === button.dataset.service);
      const planKey = service.id === "business-site" ? "Plus" : service.id === "mvp" ? "Pro" : "Start";
      const plan = pricingPlans.find((item) => item.key === planKey);
      const saleActive = isSaleActive();
      openSaleLead({
        title: service.title,
        selectedPackage: planKey,
        packagePrice: planDisplayPrice(plan, saleActive),
        regularPrice: saleActive ? plan.price : ""
      }, "service_card_sale_button");
    });
  });
}

function renderProjects(filter = "all") {
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const list = filter === "all" ? projects : projects.filter((project) => project.group === filter);
  projectGrid.innerHTML = list.map((project) => {
    const isExternalDemo = project.externalDemo || project.demoUrl?.startsWith("http");
    return `
    <article class="project-card ${project.highlight ? `project-card--${project.highlight}` : ""}" data-card="${project.id}">
      <img src="${project.image}" alt="${project.title} preview">
      <div class="project-body">
        <span class="project-label">${project.label}</span>
        ${saleActive ? `<span class="sale-card-badge">-50 % dnes · od 5 000 Kč</span>` : ""}
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <div class="project-meta">
          <span>${saleActive ? "v akci od 5 000 Kč / ≈200 €" : "od 10 000 Kč / ≈400 €"}</span>
          <span>${project.timeline}</span>
        </div>
        <ul>${featureList(project.features.slice(0, 3))}</ul>
        <div class="project-actions">
          ${project.group === "template" && project.demoUrl
            ? `<a href="${project.demoUrl}" ${isExternalDemo ? 'target="_blank" rel="noopener"' : ""} data-demo-link="${project.id}">Zobrazit šablonu</a>`
            : `<button type="button" data-preview="${project.id}">Zobrazit projekt</button>`}
          <button type="button" data-details="${project.id}">Podrobnosti</button>
          <button type="button" data-order="${project.id}">${saleActive ? "Objednat se slevou -50 %" : "Objednat podobný web"}</button>
        </div>
      </div>
    </article>
  `;
  }).join("");

  projectGrid.querySelectorAll("[data-preview]").forEach((button) => {
    button.addEventListener("click", () => openModal("preview", projects.find((item) => item.id === button.dataset.preview)));
  });
  projectGrid.querySelectorAll("[data-details]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.details)));
  });
  projectGrid.querySelectorAll("[data-order]").forEach((button) => {
    button.addEventListener("click", () => openSaleLead({
      ...(projects.find((item) => item.id === button.dataset.order) || {}),
      selectedPackage: "Start",
      packagePrice: planDisplayPrice(startPlan, isSaleActive()),
      regularPrice: isSaleActive() ? startPlan.price : ""
    }, "project_card_sale_button"));
  });
  projectGrid.querySelectorAll("[data-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button,a")) return;
      const project = projects.find((item) => item.id === card.dataset.card);
      if (project.group === "template" && project.demoUrl) {
        if (project.externalDemo || project.demoUrl.startsWith("http")) {
          window.open(project.demoUrl, "_blank", "noopener");
        } else {
          window.location.href = project.demoUrl;
        }
      } else {
        openModal("preview", project);
      }
    });
  });
}

function renderFaq() {
  faqList.innerHTML = faqItems.map(([question, answer]) => `
    <details>
      <summary>${question}</summary>
      <p>${answer}</p>
    </details>
  `).join("");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelectorAll("[data-category-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCategories(button.dataset.categoryFilter);
  });
});

document.querySelectorAll("[data-open-pricing]").forEach((button) => {
  button.addEventListener("click", () => openModal("pricing"));
});

document.querySelectorAll("[data-open-lead]").forEach((button) => {
  button.addEventListener("click", () => openModal("lead", packagePayloadFromButton(button)));
});

document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

function setupPreloader() {
  const preloader = document.querySelector("#sitePreloader");
  if (!preloader) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = sessionStorage.getItem(PRELOADER_KEY) === "1";
  const hide = () => {
    preloader.classList.add("is-hidden");
    document.documentElement.classList.remove("preloader-active");
    window.setTimeout(() => preloader.remove(), 520);
  };
  document.querySelectorAll(".hero-video, .hero-copy-video, .site-wallpaper-video").forEach((video) => {
    try { video.load(); } catch (error) {}
  });
  if (seen || reducedMotion) {
    hide();
    return;
  }
  sessionStorage.setItem(PRELOADER_KEY, "1");
  document.documentElement.classList.add("preloader-active");
  window.setTimeout(hide, 1650);
  window.setTimeout(hide, 2200);
}

document.querySelectorAll(".hero-video, .hero-copy-video, .site-wallpaper-video").forEach((video) => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    video.classList.add("is-disabled");
    video.pause();
    return;
  }
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  const startVideo = () => {
    if (video.dataset.started === "1") return;
    video.dataset.started = "1";
    const reveal = () => {
      video.classList.add("is-ready");
    };
    if (video.readyState >= 2) reveal();
    video.addEventListener("loadeddata", reveal, { once: true });
    video.addEventListener("canplay", reveal, { once: true });
    video.addEventListener("playing", reveal, { once: true });
    try { video.load(); } catch (error) {}
    video.play().catch(() => {
      video.classList.remove("is-ready");
    });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(startVideo, { timeout: 1800 });
  } else {
    window.setTimeout(startVideo, 900);
  }
});

function openContactPopupLead(kind = "demo_match") {
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const saleActive = isSaleActive();
  const isDemoMatch = kind === "demo_match";
  openModal("lead", withSalePayload({
    title: isDemoMatch ? "Bezplatný výběr demo šablony" : "Poptávka na web",
    selectedPackage: "Start",
    packagePrice: planDisplayPrice(startPlan, saleActive),
    regularPrice: saleActive ? startPlan.price : "",
    sourceCta: isDemoMatch ? "scroll50_popup_demo_match" : "scroll50_popup_form"
  }, isDemoMatch ? "scroll50_popup_demo_match" : "scroll50_popup_form"));
}

function showContactPopup(source = "scroll50_popup") {
  if (sessionStorage.getItem(CONTACT_POPUP_CLOSED_KEY) === "1" || document.querySelector(".lead-capture-popup") || appModal.classList.contains("open")) return false;
  const popup = document.createElement("aside");
  popup.className = "lead-capture-popup";
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML = `
    <div class="lead-capture-top">
      <button class="lead-capture-toggle" type="button" aria-label="Sbalit widget" aria-expanded="true">−</button>
      <div class="lead-capture-title">
        <strong>Kontaktujte mě</strong>
        <span>Bezplatně vyberu demo pro váš byznys</span>
      </div>
      <button class="lead-capture-close" type="button" aria-label="Zavřít">×</button>
    </div>
    <div class="lead-capture-body">
      <p>Napište mi na Facebook nebo pošlete poptávku — vyberu vhodnou demo šablonu a orientační cenu.</p>
      <small>Konzultace je zdarma. Můžeme začít z hotové šablony a upravit ji pro váš byznys.</small>
      <div class="lead-capture-actions">
        <a class="btn facebook" href="${FACEBOOK_URL}" target="_blank" rel="noopener" data-source-cta="${source}_facebook">Napsat na Facebook</a>
        <button class="btn primary" type="button" data-contact-demo>Vybrat demo zdarma</button>
        <button class="btn dark" type="button" data-contact-apply>Nechat poptávku</button>
        <button class="btn soft" type="button" data-contact-collapse>Pokračovat v prohlížení</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  document.body.classList.add("contact-popup-visible");
  requestAnimationFrame(() => popup.classList.add("visible"));
  const toggleButton = popup.querySelector(".lead-capture-toggle");
  const collapse = () => {
    popup.classList.add("is-collapsed");
    toggleButton.textContent = "+";
    toggleButton.setAttribute("aria-label", "Rozbalit widget");
    toggleButton.setAttribute("aria-expanded", "false");
  };
  const expand = () => {
    popup.classList.remove("is-collapsed");
    toggleButton.textContent = "−";
    toggleButton.setAttribute("aria-label", "Sbalit widget");
    toggleButton.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    sessionStorage.setItem(CONTACT_POPUP_CLOSED_KEY, "1");
    document.body.classList.remove("contact-popup-visible");
    popup.classList.remove("visible");
    window.setTimeout(() => popup.remove(), 260);
  };
  const removeWithoutClosingSession = () => {
    document.body.classList.remove("contact-popup-visible");
    popup.classList.remove("visible");
    window.setTimeout(() => popup.remove(), 260);
  };
  toggleButton.addEventListener("click", () => {
    if (popup.classList.contains("is-collapsed")) expand();
    else collapse();
  });
  popup.querySelector(".lead-capture-close").addEventListener("click", close);
  popup.querySelector("[data-contact-collapse]").addEventListener("click", collapse);
  popup.querySelector("[data-contact-demo]").addEventListener("click", () => {
    removeWithoutClosingSession();
    openContactPopupLead("demo_match");
  });
  popup.querySelector("[data-contact-apply]").addEventListener("click", () => {
    removeWithoutClosingSession();
    openContactPopupLead("form");
  });
  return true;
}

function maybeShowContactPopup() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return false;
  const progress = window.scrollY / scrollable;
  if (progress >= 0.5) return showContactPopup("scroll50_popup");
  return false;
}

document.querySelectorAll(".ambient-video").forEach((video) => {
  const src = video.dataset.src;
  const userAgent = navigator.userAgent || "";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inAppBrowser = /FBAN|FBAV|FB_IAB|Instagram|Messenger/i.test(userAgent);
  if (!src || reducedMotion || inAppBrowser || !("IntersectionObserver" in window)) {
    video.classList.add("is-disabled");
    return;
  }

  let loaded = false;
  const loadVideo = () => {
    if (loaded) return;
    loaded = true;
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);
    video.addEventListener("canplay", () => {
      video.classList.add("is-ready");
      video.play().catch(() => {});
    }, { once: true });
    video.load();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadVideo();
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { rootMargin: "420px 0px", threshold: 0.08 });

  observer.observe(video);
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
  const videoStage = document.querySelector(".hero-video-stage");
  const videoHeight = videoStage ? videoStage.offsetHeight : 0;
  document.documentElement.classList.toggle("side-ribbons-visible", window.scrollY > Math.max(videoHeight - 80, 260));
  if (!ctaClosed) {
    const shouldShow = window.scrollY > Math.max(heroHeight + 80, 1400);
    floatingCta.classList.toggle("visible", shouldShow);
  }
}, { passive: true });

window.addEventListener("scroll", maybeShowContactPopup, { passive: true });
window.setTimeout(() => {
  maybeShowContactPopup();
}, 35000);

closeFloatingCta.addEventListener("click", () => {
  ctaClosed = true;
  sessionStorage.setItem(saleConfig.stickyClosedKey, "1");
  floatingCta.classList.remove("visible");
});

setupPreloader();
renderServices();
renderCategories();
renderProjects();
renderFaq();
updateSaleCountdowns();
window.setInterval(updateSaleCountdowns, 1000);
openLeadFromUrl();



