(function () {
  function demo(data) {
    const mediaSlug = data.mediaSlug || data.slug;
    const galleryImages = data.galleryImages || Array.from({ length: 15 }, (_, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `../../assets/images/demo-media/${mediaSlug}/photo-${number}.jpg`;
    });
    const layouts = {
      "clinic-doctor": "clean",
      "law-accounting": "editorial",
      "auto-service": "garage",
      cleaning: "fresh",
      "real-estate": "estate",
      "product-catalog": "catalog",
      education: "academy",
      "personal-brand": "editorial",
      "event-photo": "gallery",
      fitness: "bold",
      "hotel-apartment": "hospitality",
      recruitment: "action",
      "start-landing": "startup",
      "business-website": "corporate",
      "mvp-platform": "product",
      "project-rescue": "rescue",
      "bug-fixing": "terminal"
    };
    return {
      layout: data.layout || layouts[mediaSlug] || "classic",
      heroImage: data.heroImage || galleryImages[0],
      ambientImage: data.ambientImage || galleryImages[7] || galleryImages[0],
      heroVideo: data.heroVideo || `../../assets/videos/demo-media/${mediaSlug}/hero.mp4`,
      ambientVideo: data.ambientVideo || `../../assets/videos/demo-media/${mediaSlug}/atmosphere.mp4`,
      galleryImages,
      info: [
        { label: "Formát", value: data.infoFormat || data.businessType },
        { label: "Spuštění", value: data.timeline || "3–7 dní" },
        { label: "Balíček", value: data.packageHint || "START / PLUS / PRO" },
        { label: "Poptávky", value: "formulář + messengery" }
      ],
      chips: data.chips || ["Mobilní verze", "Poptávkový formulář", "Ceny na stránce", "Rychlý kontakt"],
      ...data,
      metaTitle: data.metaTitle || `${data.templateName} | Nikolaj Dev`,
      metaDescription: data.metaDescription || data.subtitle
    };
  }

  const base = {
    contactText: "Formulář, telefon, Telegram/Facebook a mapa jsou připravené tak, aby návštěvník rychle udělal další krok.",
    processText: "Nejdřív nastavíme strukturu a obsah, potom vizuál, formulář, mobilní verzi a přípravu na zveřejnění.",
    finalText: "Tuto demo šablonu lze upravit pro reálný byznys: vyměnit fotky, služby, ceny, kontakty, texty, formulář a připravit web ke spuštění."
  };

  window.demoConfigs = {
    "clinic-doctor": demo({
      slug: "clinic-doctor",
      brand: "Vita Clinic",
      descriptor: "appointments & trust",
      mark: "VC",
      templateName: "Demo web pro kliniku / lékaře",
      businessType: "Clinic / Doctor",
      demoLabel: "DEMO šablona pro lékaře / kliniku",
      heroLabel: "Demo pro zdravotní služby",
      image: "../../assets/images/categories/clinic-doctor.jpg",
      imageAlt: "Konzultace lékaře s pacientem",
      accent: "#0f9f9a",
      accent2: "#2563eb",
      dark: "#102027",
      soft: "#e7f7f6",
      bg: "#f6fbfb",
      title: "Web pro lékaře nebo kliniku s jasným objednáním",
      subtitle: "Služby, specialisté, důvěra, orientační ceny, kontakty a formulář pro objednání bez zbytečného zahlcení.",
      introKicker: "Medicína / služby",
      introTitle: "Pacient musí rychle pochopit, kam se objednat a proč vám může důvěřovat",
      introText: "U zdravotních webů je důležitá čistá struktura, klidný tón, reálné kontakty a opatrné formulace bez nepravdivých slibů.",
      valueCards: [
        { title: "Důvěra", text: "Bloky specialistů, služeb, FAQ a klidná vizuální prezentace.", meta: "bez přehnaných slibů" },
        { title: "Objednání", text: base.contactText, meta: "1–2 kliky ke kontaktu" }
      ],
      offerKicker: "Struktura",
      offerTitle: "Co může web kliniky ukázat",
      offerText: "Služby, tým, ordinační dobu, FAQ, kontaktní tlačítka a objednávkový formulář.",
      offers: [
        { title: "Služby a obory", text: "Karty procedur, konzultací a specializací s jasným popisem.", meta: "struktura důvěry" },
        { title: "Specialisté", text: "Fotka, zkušenost, specializace a bezpečný text bez falešných medicínských slibů.", meta: "pro důvěru" },
        { title: "Objednání", text: base.contactText, meta: "mobilní CTA" }
      ],
      processTitle: "Nejdřív struktura důvěry, potom vizuál",
      processText: base.processText,
      processCards: [
        { title: "1. Služby", text: "Připravíme obory, ceny od a jasné limity.", meta: "scope" },
        { title: "2. Kontakt", text: "Zapojíme formulář, telefon, mapu a thank-you flow.", meta: "poptávka" }
      ],
      galleryCards: [
        { title: "Služby", text: "Karty oborů a procedur." },
        { title: "Důvěra", text: "Tým, FAQ a klidná prezentace." },
        { title: "Objednání", text: "Formulář, telefon, mapa a messengery." }
      ],
      finalTitle: "Chcete takový web pro lékaře nebo kliniku?",
      finalText: "Šablonu lze upravit pro stomatologii, ordinaci, terapii, kosmetologii, diagnostiku nebo menší kliniku.",
      messagePlaceholder: "Jaká specializace, služby, město, fotky a jaký balíček vás zajímá?"
    }),

    "law-accounting": demo({
      slug: "law-accounting",
      brand: "Lexora Consult",
      descriptor: "law · accounting · consulting",
      mark: "LC",
      templateName: "Demo web pro právníka / účetního",
      businessType: "Law / Accounting / Consulting",
      demoLabel: "DEMO šablona pro právníka / účetní",
      heroLabel: "Demo pro B2B konzultace",
      image: "../../assets/images/categories/law-accounting.jpg",
      imageAlt: "Business meeting",
      accent: "#1f4e79",
      accent2: "#c89555",
      dark: "#111827",
      soft: "#eef3f8",
      bg: "#f7f9fc",
      title: "Web pro právníka, účetní nebo konzultanta",
      subtitle: "Jasné služby, oblasti konzultací, důvěra, FAQ a poptávka na rozhovor bez zbytečného vizuálního šumu.",
      timeline: "3–7 dní",
      chips: ["Konzultace", "B2B důvěra", "FAQ", "Poptávkový formulář"],
      introKicker: "Profesionální služby",
      introTitle: "Klient musí rychle pochopit, s jakým problémem pomáháte",
      introText: "Pro právníka nebo účetní je důležitý jasný seznam služeb, scénáře poptávky, postup konzultace a kontaktní formulář.",
      valueCards: [
        { title: "Jasné oblasti", text: "Daně, smlouvy, konzultace, registrace, doprovod.", meta: "bez chaosu" },
        { title: "Důvěryhodný tón", text: "Klidný B2B styl, férové texty a transparentní poptávka.", meta: "pro vážné klienty" }
      ],
      offerKicker: "Obchodní struktura",
      offerTitle: "Sekce pro konzultační web",
      offerText: "Služby, pro koho jsou, postup konzultace, FAQ, dokumenty od klienta a formulář.",
      offers: [
        { title: "Služby", text: "Balíčky konzultací a oblasti pomoci.", meta: "od první poptávky" },
        { title: "Postup", text: "Co klient pošle, jak proběhne hovor a co dostane.", meta: "méně dotazů" },
        { title: "FAQ", text: "Cena, termíny, dokumenty, forma práce a omezení.", meta: "snižuje obavy" }
      ],
      processTitle: "Web má prodávat přes jasnost",
      processText: base.processText,
      processCards: [
        { title: "1. Služby", text: "Upřesníme, jaké otázky řešíte a co neberete.", meta: "pozice" },
        { title: "2. Poptávka", text: "Formulář sbírá kontakt a stručný popis zadání.", meta: "e-mail" }
      ],
      galleryCards: [
        { title: "B2B styl", text: "Klidná paleta a obchodní struktura." },
        { title: "FAQ", text: "Odpovědi na časté otázky před poptávkou." },
        { title: "Konzultace", text: "Tlačítko na rozhovor v několika kliknutích." }
      ],
      finalTitle: "Chcete takový web pro konzultace?",
      finalText: "Šablonu lze upravit pro právníka, účetní, daňového poradce, business consulting nebo soukromého specialistu.",
      messagePlaceholder: "Jaké služby, město/jazyk, forma konzultací a jaký balíček vás zajímá?"
    }),

    "auto-service": demo({
      slug: "auto-service",
      brand: "Torque Garage",
      descriptor: "service · detailing · diagnostics",
      mark: "TG",
      templateName: "Demo web pro autoservis / detailing",
      businessType: "Auto Service / Detailing",
      demoLabel: "DEMO šablona pro autoservis / detailing",
      heroLabel: "Demo pro autoservis",
      image: "../../assets/images/categories/auto-service.jpg",
      imageAlt: "Auto service garage",
      accent: "#f59e0b",
      accent2: "#ef4444",
      dark: "#151515",
      soft: "#fff3dc",
      bg: "#faf8f3",
      title: "Web pro autoservis, detailing nebo dopravu",
      subtitle: "Služby, ceny od, fotky práce, objednání na diagnostiku, kontakty a mapa — vše důležité z telefonu.",
      timeline: "4–8 dní",
      chips: ["Služby", "Ceny od", "Fotky práce", "Objednání"],
      introKicker: "Auto / servis",
      introTitle: "Klient chce rychle vědět, co opravujete, kolik to přibližně stojí a kam má přijet",
      introText: "Web autoservisu má být praktický: seznam služeb, důvěra, fotky práce, rychlý hovor, mapa a formulář.",
      valueCards: [
        { title: "Seznam prací", text: "Diagnostika, opravy, olej, pneumatiky, detailing, leštění.", meta: "jasné kategorie" },
        { title: "Objednání na diagnostiku", text: "Značka auta, problém, telefon a vhodný termín.", meta: "méně zpráv" }
      ],
      offerKicker: "Výkladní skříň služeb",
      offerTitle: "Co lze zahrnout",
      offerText: "Služby, ceník od, ukázky práce, garance, FAQ, adresa a kontaktní tlačítka.",
      offers: [
        { title: "Opravy a diagnostika", text: "Karty služeb s cenou od a časovou náročností.", meta: "základ webu" },
        { title: "Před / po", text: "Fotky práce pro detailing, karoserii, interiér nebo opravy.", meta: "důvěra" },
        { title: "Rychlé objednání", text: base.contactText, meta: "mobilní CTA" }
      ],
      processTitle: "Nejdřív služby a mapa, potom vizuální prezentace",
      processText: base.processText,
      processCards: [
        { title: "1. Služby", text: "Struktura oblastí a cen od.", meta: "katalog" },
        { title: "2. Objednání", text: "Formulář sbírá auto, problém a kontakt.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Realizace", text: "Fotky oprav nebo detailingu." },
        { title: "Ceník", text: "Ceny od bez složitých tabulek." },
        { title: "Mapa", text: "Jak se rychle dostat do servisu." }
      ],
      finalTitle: "Chcete takový web pro autoservis?",
      finalText: "Šablonu lze upravit pro opravy, detailing, pneuservis, diagnostiku, dopravu nebo lokální auto službu.",
      messagePlaceholder: "Jaké auto služby, město, fotky práce a jaký balíček vás zajímá?"
    }),

    cleaning: demo({
      slug: "cleaning",
      brand: "FreshHome",
      descriptor: "cleaning · home services",
      mark: "FH",
      templateName: "Demo web pro úklid / domácí služby",
      businessType: "Cleaning / Home Services",
      demoLabel: "DEMO šablona pro úklid / domácí služby",
      heroLabel: "Demo pro úklidové služby",
      image: "../../assets/images/categories/cleaning.jpg",
      imageAlt: "Cleaning service equipment",
      accent: "#16a34a",
      accent2: "#0ea5e9",
      dark: "#10231a",
      soft: "#eaf9f0",
      bg: "#f8fbf9",
      title: "Web pro úklidové nebo domácí služby s rychlou poptávkou",
      subtitle: "Balíčky úklidu, zóny, ceny od, FAQ, messengery a formulář, aby klient rychle pochopil cenu a nechal kontakt.",
      timeline: "2–6 dní",
      chips: ["Balíčky služeb", "Zóny", "Ceny od", "Rychlý kontakt"],
      introKicker: "Lokální služby",
      introTitle: "Klient potřebuje rychle vybrat balíček a poslat poptávku",
      introText: "Pro úklid jsou důležité jednoduché balíčky, ceny od, zóny, fotky výsledku a rychlé kontakty.",
      valueCards: [
        { title: "Balíčky", text: "Generální, pravidelný, po rekonstrukci, kanceláře.", meta: "snadný výběr" },
        { title: "Zóny", text: "Město, čtvrti, výjezd, urgentní termíny a podmínky.", meta: "méně dotazů" }
      ],
      offerKicker: "Balíčky",
      offerTitle: "Co prodává web úklidu",
      offerText: "Balíčky služeb, ceny od, seznam prací, FAQ, fotky výsledku a formulář.",
      offers: [
        { title: "Regular cleaning", text: "Týdenní nebo jednorázový úklid.", meta: "od 1 500 Kč" },
        { title: "Deep cleaning", text: "Po rekonstrukci, stěhování nebo silném znečištění.", meta: "podle odhadu" },
        { title: "Office cleaning", text: "Kanceláře, malé firmy, harmonogram a dohody.", meta: "B2B" }
      ],
      processTitle: "Nejdřív balíček, potom kalkulace",
      processText: "Formulář sbírá typ prostoru, metry, lokalitu, urgentnost a kontakt.",
      processCards: [
        { title: "1. Co uklidit", text: "Byt, dům, kancelář, po rekonstrukci.", meta: "typ zadání" },
        { title: "2. Kontakt", text: "Telefon, messenger a vhodný čas.", meta: "rychlá odpověď" }
      ],
      galleryCards: [
        { title: "Balíčky", text: "Jasně: co je v ceně a co zvlášť." },
        { title: "Výsledek", text: "Fotky před/po nebo typické práce." },
        { title: "Kontakt", text: "Telefon a formulář v dosahu." }
      ],
      finalTitle: "Chcete takový web pro úklid?",
      finalText: "Šablonu lze upravit pro úklid, domácí služby, kanceláře, jednorázové práce nebo lokální servis.",
      messagePlaceholder: "Jaké služby, město, zóny, ceny a jaký balíček vás zajímá?"
    }),

    "real-estate": demo({
      slug: "real-estate",
      brand: "EstatePoint",
      descriptor: "real estate · rental",
      mark: "EP",
      templateName: "Demo web pro reality / pronájem",
      businessType: "Real Estate / Rental",
      demoLabel: "DEMO šablona pro nemovitosti / pronájem",
      heroLabel: "Demo pro nemovitosti",
      image: "../../assets/images/categories/real-estate.jpg",
      imageAlt: "Modern apartment interior",
      accent: "#0f766e",
      accent2: "#b45309",
      dark: "#13201f",
      soft: "#eef8f6",
      bg: "#f6fbfa",
      title: "Web pro nemovitosti, pronájem nebo realitní služby",
      subtitle: "Karty objektů, fotky, lokalita, cena, poptávka na prohlídku a kontakty na jednom místě.",
      timeline: "4–10 dní",
      chips: ["Objekty", "Fotky", "Poptávka", "Mapa"],
      introKicker: "Nemovitosti",
      introTitle: "Klient musí rychle vidět prostor, cenu a další krok",
      introText: "Realitní web má ukázat objekty, důležité parametry, fotky, důvěru a jednoduchou poptávku na prohlídku.",
      valueCards: [
        { title: "Karty objektů", text: "Fotky, cena, dispozice, lokalita a stav.", meta: "rychlé skenování" },
        { title: "Prohlídka", text: "Formulář, telefon a messenger pro domluvu termínu.", meta: "jasná akce" }
      ],
      offerKicker: "Prezentace objektů",
      offerTitle: "Co lze na webu ukázat",
      offerText: "Objekty, galerie, výhody lokality, postup spolupráce a kontaktní formulář.",
      offers: [
        { title: "Objekty", text: "Karty bytů, domů, kanceláří nebo pronájmů.", meta: "katalog" },
        { title: "Důvěra", text: "Postup, časté otázky, kontakty a bezpečná prezentace.", meta: "pro rozhodnutí" },
        { title: "Poptávka", text: "Termín prohlídky a kontakt z telefonu.", meta: "rychlý lead" }
      ],
      processTitle: "Nejdřív objekty, potom poptávkový tok",
      processText: base.processText,
      processCards: [
        { title: "1. Data", text: "Fotky, ceny, dispozice a lokality.", meta: "obsah" },
        { title: "2. Kontakt", text: "Formulář na prohlídku a rychlý telefon.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Interiéry", text: "Velké fotky prostoru." },
        { title: "Parametry", text: "Cena, dispozice, lokalita." },
        { title: "Prohlídka", text: "Poptávka na termín." }
      ],
      finalTitle: "Chcete takový realitní web?",
      finalText: "Šablonu lze upravit pro pronájem, realitního makléře, apartmány, objekty nebo investiční nabídku.",
      messagePlaceholder: "Jaké objekty, lokalita, fotky, ceny a jaký balíček vás zajímá?"
    }),

    "product-catalog": demo({
      slug: "product-catalog",
      brand: "Nordic Shelf",
      descriptor: "product catalog",
      mark: "NS",
      templateName: "Demo web pro produktový katalog",
      businessType: "Product Catalog / Showcase",
      demoLabel: "DEMO šablona pro katalog produktů",
      heroLabel: "Demo katalogu",
      image: "../../assets/images/categories/product-catalog.jpg",
      imageAlt: "Product shelf",
      accent: "#2563eb",
      accent2: "#f59e0b",
      dark: "#111827",
      soft: "#eef5ff",
      bg: "#f8fafc",
      title: "Produktový katalog bez složitého e-shopu",
      subtitle: "Karty produktů, ceny, kategorie, poptávka a kontakty — ideální, když zatím nepotřebujete plný e-shop.",
      timeline: "5–12 dní",
      chips: ["Katalog", "Kategorie", "Poptávky", "Kontakt"],
      introKicker: "Produkty",
      introTitle: "Návštěvník má rychle pochopit nabídku a zeptat se na produkt",
      introText: "Katalog je vhodný pro firmy, které chtějí ukázat sortiment, ceny od a sbírat poptávky bez složitého košíku.",
      valueCards: [
        { title: "Produkty", text: "Karty s fotkou, popisem, cenou od a CTA.", meta: "přehled" },
        { title: "Poptávka", text: "Formulář s vybranou kategorií nebo produktem.", meta: "bez e-shopu" }
      ],
      offerKicker: "Katalog",
      offerTitle: "Co lze zahrnout",
      offerText: "Kategorie, produktové karty, filtry, FAQ, kontakty a poptávka.",
      offers: [
        { title: "Kategorie", text: "Přehledné rozdělení sortimentu.", meta: "rychlé hledání" },
        { title: "Produkty", text: "Fotky, parametry, cena od a detail.", meta: "pro rozhodnutí" },
        { title: "Poptávka", text: "Kontakt bez složitého checkoutu.", meta: "jednoduše" }
      ],
      processTitle: "Nejdřív sortiment, potom poptávka",
      processText: base.processText,
      processCards: [
        { title: "1. Produkty", text: "Připravíme kategorie a karty.", meta: "obsah" },
        { title: "2. Kontakt", text: "Nastavíme formulář a CTA.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Karty", text: "Produkt, cena a CTA." },
        { title: "Kategorie", text: "Snadné procházení." },
        { title: "Poptávka", text: "Dotaz na produkt." }
      ],
      finalTitle: "Chcete takový katalog?",
      finalText: "Šablonu lze upravit pro produkty, showroom, B2B nabídku, lokální obchod nebo malý sortiment.",
      messagePlaceholder: "Jaké produkty, kategorie, ceny a jaký balíček vás zajímá?"
    }),

    education: demo({
      slug: "education",
      brand: "SkillBridge",
      descriptor: "courses · academy",
      mark: "SB",
      templateName: "Demo web pro školu / kurzy",
      businessType: "School / Courses",
      demoLabel: "DEMO šablona pro kurzy / školu",
      heroLabel: "Demo pro vzdělávání",
      image: "../../assets/images/categories/education.jpg",
      imageAlt: "Students in classroom",
      accent: "#7c3aed",
      accent2: "#06b6d4",
      dark: "#20143b",
      soft: "#f1edff",
      bg: "#faf8ff",
      title: "Web pro kurzy, školu nebo vzdělávací program",
      subtitle: "Programy, rozvrh, lektoři, ceny, FAQ a poptávka na studium na jedné stránce.",
      timeline: "4–10 dní",
      chips: ["Programy", "Lektoři", "Ceník", "Poptávka"],
      introKicker: "Vzdělávání",
      introTitle: "Student chce rychle vidět, co se naučí a jak se přihlásit",
      introText: "Web kurzů má ukázat programy, termíny, cenu, lektory, FAQ a jednoduchou přihlášku.",
      valueCards: [
        { title: "Program", text: "Moduly, výsledky a komu je kurz určen.", meta: "jasná hodnota" },
        { title: "Přihláška", text: "Formulář, telefon a messenger pro rychlé dotazy.", meta: "lead" }
      ],
      offerKicker: "Programy",
      offerTitle: "Co lze ukázat na webu školy",
      offerText: "Kurzy, rozvrh, ceny, lektoři, FAQ, přihlášku a kontakty.",
      offers: [
        { title: "Kurzy", text: "Karty programů a výsledků učení.", meta: "přehled" },
        { title: "Lektoři", text: "Fotky, zkušenosti a specializace.", meta: "důvěra" },
        { title: "Přihláška", text: "Jednoduchá poptávka na kurz.", meta: "rychle" }
      ],
      processTitle: "Nejdřív program, potom přihláška",
      processText: base.processText,
      processCards: [
        { title: "1. Programy", text: "Struktura kurzů, termíny a ceny.", meta: "obsah" },
        { title: "2. Formulář", text: "Přihláška a kontakt.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Kurzy", text: "Programy a moduly." },
        { title: "Lektoři", text: "Důvěra a zkušenosti." },
        { title: "Přihláška", text: "Jasné CTA." }
      ],
      finalTitle: "Chcete takový web pro kurzy?",
      finalText: "Šablonu lze upravit pro školu, online kurz, workshop, lektora nebo vzdělávací program.",
      messagePlaceholder: "Jaké kurzy, termíny, ceny, lektoři a jaký balíček vás zajímá?"
    }),

    "personal-brand": demo({
      slug: "personal-brand",
      brand: "Mira Studio",
      descriptor: "personal brand · portfolio",
      mark: "MS",
      templateName: "Demo web pro osobní značku / portfolio",
      businessType: "Personal Brand / Portfolio",
      demoLabel: "DEMO šablona pro osobní značku",
      heroLabel: "Demo portfolia",
      image: "../../assets/images/categories/personal-brand.jpg",
      imageAlt: "Creative workspace",
      accent: "#334155",
      accent2: "#d97706",
      dark: "#111827",
      soft: "#f3f4f6",
      bg: "#fafafa",
      title: "Portfolio web pro specialistu nebo osobní značku",
      subtitle: "Služby, projekty, profil, kontakt a poptávkový formulář v profesionální prezentaci.",
      timeline: "2–7 dní",
      chips: ["O mně", "Služby", "Projekty", "Kontakt"],
      introKicker: "Osobní značka",
      introTitle: "Návštěvník má rychle pochopit, kdo jste a co nabízíte",
      introText: "Portfolio web pomáhá prezentovat práci, služby, projekty a rychlý kontakt pro nové klienty.",
      valueCards: [
        { title: "Prezentace", text: "Profil, specializace a vybrané projekty.", meta: "důvěra" },
        { title: "Kontakt", text: "Formulář a sociální odkazy.", meta: "rychle" }
      ],
      offerKicker: "Struktura",
      offerTitle: "Co může portfolio obsahovat",
      offerText: "O mně, služby, projekty, proces, FAQ a kontaktní formulář.",
      offers: [
        { title: "Služby", text: "Co nabízíte a pro koho.", meta: "jasné" },
        { title: "Projekty", text: "Ukázky práce a výsledků.", meta: "důvěra" },
        { title: "Kontakt", text: "Poptávka, Telegram/Facebook a e-mail.", meta: "CTA" }
      ],
      processTitle: "Nejdřív pozice, potom portfolio",
      processText: base.processText,
      processCards: [
        { title: "1. Nabídka", text: "Upřesníme služby a cílové klienty.", meta: "pozice" },
        { title: "2. Ukázky", text: "Vybereme projekty a vizuály.", meta: "portfolio" }
      ],
      galleryCards: [
        { title: "Profil", text: "Kdo jste a co děláte." },
        { title: "Projekty", text: "Ukázky a případové práce." },
        { title: "Kontakt", text: "Jednoduchá poptávka." }
      ],
      finalTitle: "Chcete takový portfolio web?",
      finalText: "Šablonu lze upravit pro freelancera, specialistu, tvůrce, konzultanta nebo osobní značku.",
      messagePlaceholder: "Jaké služby, projekty, styl a jaký balíček vás zajímá?"
    }),

    "event-photo": demo({
      slug: "event-photo",
      brand: "Frame Atelier",
      descriptor: "events · photography",
      mark: "FA",
      templateName: "Demo web pro akci / fotografa",
      businessType: "Event / Photographer",
      demoLabel: "DEMO šablona pro event / fotografa",
      heroLabel: "Demo pro galerii a rezervace",
      image: "../../assets/images/categories/event-photo.jpg",
      imageAlt: "Photographer event setup",
      accent: "#be185d",
      accent2: "#f59e0b",
      dark: "#26111b",
      soft: "#fff1f7",
      bg: "#fff8fb",
      title: "Web pro fotografa, event nebo svatební službu",
      subtitle: "Galerie, balíčky, termíny, ukázky práce a poptávka na focení nebo akci.",
      timeline: "3–8 dní",
      chips: ["Galerie", "Balíčky", "Termíny", "Poptávka"],
      introKicker: "Event / foto",
      introTitle: "Vizuál prodává dřív než dlouhý text",
      introText: "Pro fotografa nebo event je důležitá silná galerie, jasné balíčky a rychlá poptávka na termín.",
      valueCards: [
        { title: "Galerie", text: "Velké fotky, atmosféra a styl práce.", meta: "první dojem" },
        { title: "Balíčky", text: "Co je v ceně, délka focení a dodání.", meta: "jasnost" }
      ],
      offerKicker: "Vizuální prodej",
      offerTitle: "Co lze ukázat",
      offerText: "Portfolio, balíčky, termíny, FAQ, kontakt a poptávku.",
      offers: [
        { title: "Portfolio", text: "Vybrané série fotek nebo akce.", meta: "důvěra" },
        { title: "Balíčky", text: "Svatby, portréty, eventy, produkt.", meta: "výběr" },
        { title: "Poptávka", text: "Termín, typ akce a kontakt.", meta: "lead" }
      ],
      processTitle: "Nejdřív styl, potom termín",
      processText: base.processText,
      processCards: [
        { title: "1. Portfolio", text: "Vybereme fotky a styl.", meta: "vizuál" },
        { title: "2. Poptávka", text: "Formulář sbírá typ akce a datum.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Galerie", text: "Velké fotografie." },
        { title: "Balíčky", text: "Jasné možnosti." },
        { title: "Termín", text: "Poptávka na datum." }
      ],
      finalTitle: "Chcete takový web pro focení nebo event?",
      finalText: "Šablonu lze upravit pro fotografa, svatby, eventy, ateliér, oslavy nebo tvůrčí službu.",
      messagePlaceholder: "Jaké služby, fotky, balíčky a jaký termín vás zajímá?"
    }),

    fitness: demo({
      slug: "fitness",
      brand: "CoreLab",
      descriptor: "training · sport",
      mark: "CL",
      templateName: "Demo web pro trenéra / fitness",
      businessType: "Fitness / Trainer",
      demoLabel: "DEMO šablona pro trenéra / fitness",
      heroLabel: "Demo fitness webu",
      image: "../../assets/images/categories/fitness.jpg",
      imageAlt: "Fitness training",
      accent: "#ef4444",
      accent2: "#f59e0b",
      dark: "#171717",
      soft: "#fff1f1",
      bg: "#fffafa",
      title: "Web pro trenéra, fitness studio nebo sportovní službu",
      subtitle: "Programy, ceny, výsledky, objednání na trénink a rychlý kontakt.",
      timeline: "3–7 dní",
      chips: ["Programy", "Ceník", "Výsledky", "Objednání"],
      introKicker: "Fitness",
      introTitle: "Klient chce vidět program, cenu a první krok",
      introText: "Fitness web má jasně ukázat služby, komu pomáháte, jak začít a jak se objednat.",
      valueCards: [
        { title: "Programy", text: "Osobní trénink, online plán, skupiny, výživa.", meta: "jasná nabídka" },
        { title: "Objednání", text: "Formulář, telefon a messenger pro rychlý kontakt.", meta: "CTA" }
      ],
      offerKicker: "Nabídka",
      offerTitle: "Co lze zahrnout",
      offerText: "Programy, ceny, výsledky, trenér, FAQ a poptávka.",
      offers: [
        { title: "Tréninky", text: "Osobní, skupinové nebo online.", meta: "služby" },
        { title: "Výsledky", text: "Bez falešných slibů, s důrazem na proces.", meta: "důvěra" },
        { title: "Kontakt", text: "Rychlá rezervace a dotazy.", meta: "lead" }
      ],
      processTitle: "Nejdřív nabídka, potom objednání",
      processText: base.processText,
      processCards: [
        { title: "1. Programy", text: "Popíšeme služby a cílové klienty.", meta: "obsah" },
        { title: "2. Rezervace", text: "Formulář a kontaktní tlačítka.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Trénink", text: "Atmosféra a energie." },
        { title: "Program", text: "Jasný výběr." },
        { title: "Kontakt", text: "Objednání v telefonu." }
      ],
      finalTitle: "Chcete takový fitness web?",
      finalText: "Šablonu lze upravit pro trenéra, studio, sportovní klub, jógu, rehabilitaci nebo online program.",
      messagePlaceholder: "Jaké programy, ceny, fotky a jaký balíček vás zajímá?"
    }),

    "hotel-apartment": demo({
      slug: "hotel-apartment",
      brand: "StayNest",
      descriptor: "hotel · apartment · booking",
      mark: "SN",
      templateName: "Demo web pro hotel / apartmány",
      businessType: "Hotel / Apartment",
      demoLabel: "DEMO šablona pro hotel / apartmány",
      heroLabel: "Demo ubytování",
      image: "../../assets/images/categories/hotel-apartment.jpg",
      imageAlt: "Apartment interior",
      accent: "#0f766e",
      accent2: "#d97706",
      dark: "#14201f",
      soft: "#edf8f6",
      bg: "#f8fbfa",
      title: "Web pro hotel, apartmány nebo penzion",
      subtitle: "Pokoje, fotky, vybavení, lokalita, poptávka na rezervaci a kontakty.",
      timeline: "5–12 dní",
      chips: ["Pokoje", "Galerie", "Rezervace", "Mapa"],
      introKicker: "Ubytování",
      introTitle: "Host musí rychle vidět pokoj, cenu a možnost rezervace",
      introText: "Web ubytování má ukázat atmosféru, pokoje, podmínky, lokalitu a jednoduchý kontakt.",
      valueCards: [
        { title: "Pokoje", text: "Fotky, vybavení, cena od a dostupnost podle zadání.", meta: "výběr" },
        { title: "Rezervace", text: "Poptávkový formulář, telefon, mapa a messengery.", meta: "lead" }
      ],
      offerKicker: "Ubytování",
      offerTitle: "Co lze zahrnout",
      offerText: "Pokoje, galerie, vybavení, lokalita, FAQ, kontakt a rezervace.",
      offers: [
        { title: "Pokoje", text: "Karty pokojů nebo apartmánů.", meta: "přehled" },
        { title: "Lokalita", text: "Mapa, okolí, doprava a výhody.", meta: "důvěra" },
        { title: "Rezervace", text: "Formulář s termínem a počtem hostů.", meta: "CTA" }
      ],
      processTitle: "Nejdřív pokoje a fotky, potom rezervace",
      processText: base.processText,
      processCards: [
        { title: "1. Nabídka", text: "Pokoje, vybavení, ceny a podmínky.", meta: "obsah" },
        { title: "2. Rezervace", text: "Formulář a rychlé kontakty.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Pokoje", text: "Fotky a vybavení." },
        { title: "Lokalita", text: "Mapa a okolí." },
        { title: "Kontakt", text: "Rychlá rezervace." }
      ],
      finalTitle: "Chcete takový web pro ubytování?",
      finalText: "Šablonu lze upravit pro hotel, apartmány, penzion, guesthouse nebo krátkodobý pronájem.",
      messagePlaceholder: "Jaké pokoje, lokalita, ceny, fotky a jaký balíček vás zajímá?"
    }),

    recruitment: demo({
      slug: "recruitment",
      brand: "HireFlow",
      descriptor: "recruitment · jobs",
      mark: "HF",
      templateName: "Recruitment / Jobs Landing Demo",
      businessType: "Recruitment / Jobs",
      demoLabel: "DEMO šablona pro nábor lidí",
      heroLabel: "Demo pro recruitment",
      image: "../../assets/images/categories/recruitment.jpg",
      imageAlt: "People at work",
      accent: "#2563eb",
      accent2: "#f59e0b",
      dark: "#111827",
      soft: "#eef5ff",
      bg: "#f8fafc",
      title: "Landing page pro nábor kurýrů, pracovníků nebo partnerů",
      subtitle: "Podmínky, požadavky, výhody, FAQ a formulář pro uchazeče na jedné stránce.",
      timeline: "3–8 dní",
      chips: ["Podmínky", "Požadavky", "Formulář", "FAQ"],
      introKicker: "Nábor",
      introTitle: "Uchazeč musí rychle pochopit podmínky a poslat kontakt",
      introText: "Náborový landing page ukáže výhody, požadavky, postup a formulář pro rychlou odpověď.",
      valueCards: [
        { title: "Podmínky", text: "Mzda od, směny, lokalita, požadavky.", meta: "jasnost" },
        { title: "Formulář", text: "Jméno, telefon, zkušenost a dostupnost.", meta: "lead" }
      ],
      offerKicker: "Nábor",
      offerTitle: "Co lze zahrnout",
      offerText: "Podmínky, benefity, požadavky, FAQ, kontakty a formulář.",
      offers: [
        { title: "Pozice", text: "Kurýři, technici, brigádníci, partneři.", meta: "výběr" },
        { title: "Výhody", text: "Flexibilita, výdělek, lokality.", meta: "motivace" },
        { title: "Přihláška", text: "Krátký formulář pro zájemce.", meta: "rychle" }
      ],
      processTitle: "Nejdřív podmínky, potom formulář",
      processText: base.processText,
      processCards: [
        { title: "1. Nabídka", text: "Co nabízíte a koho hledáte.", meta: "pozice" },
        { title: "2. Odezva", text: "Formulář a kontaktní tlačítka.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Pozice", text: "Jasné požadavky." },
        { title: "Výhody", text: "Proč se ozvat." },
        { title: "Formulář", text: "Rychlá odpověď." }
      ],
      finalTitle: "Chcete takový náborový landing page?",
      finalText: "Šablonu lze upravit pro kurýry, řemeslníky, brigády, partnerský program nebo lokální nábor.",
      messagePlaceholder: "Koho hledáte, jaké podmínky, lokalita a jaký balíček vás zajímá?"
    }),

    "start-landing": demo({
      slug: "start-landing",
      brand: "StartPage",
      descriptor: "landing page",
      mark: "SP",
      templateName: "Start landing Demo",
      businessType: "Start landing",
      demoLabel: "DEMO šablona pro rychlý landing page",
      heroLabel: "Start demo",
      image: "../../assets/images/categories/start-landing.jpg",
      imageAlt: "Modern landing page concept",
      accent: "#2563eb",
      accent2: "#7c3aed",
      dark: "#101827",
      soft: "#eef5ff",
      bg: "#f8fbff",
      title: "Rychlý landing page pro službu, nápad nebo lokální byznys",
      subtitle: "Jasná nabídka, sekce služeb, důvěra, kontaktní tlačítka a poptávkový formulář.",
      timeline: "2–5 dní",
      chips: ["Nabídka", "CTA", "Formulář", "Mobil"],
      introKicker: "Rychlý start",
      introTitle: "Nejdřív potřebujete funkční stránku, ne složitý systém",
      introText: "Start landing page je vhodný, když chcete rychle spustit nabídku, testovat službu nebo sbírat první poptávky.",
      valueCards: [
        { title: "Nabídka", text: "První obrazovka s jasným sdělením.", meta: "rychle pochopit" },
        { title: "Poptávka", text: "Formulář a kontaktní tlačítka.", meta: "lead" }
      ],
      offerKicker: "Struktura",
      offerTitle: "Co obsahuje startovací landing page",
      offerText: "Hero, služby, výhody, FAQ, kontakt a formulář.",
      offers: [
        { title: "Hero", text: "Jasná nabídka a CTA.", meta: "první dojem" },
        { title: "Služby", text: "Co nabízíte a pro koho.", meta: "jasnost" },
        { title: "Kontakt", text: "Poptávka, Telegram/Facebook a e-mail.", meta: "lead" }
      ],
      processTitle: "Rychle postavit a ověřit",
      processText: base.processText,
      processCards: [
        { title: "1. Obsah", text: "Nabídka, služby, kontakty.", meta: "základ" },
        { title: "2. Spuštění", text: "Mobilní kontrola a zveřejnění.", meta: "start" }
      ],
      galleryCards: [
        { title: "Hero", text: "Silná první obrazovka." },
        { title: "Služby", text: "Přehledné karty." },
        { title: "Formulář", text: "Poptávka do e-mailu." }
      ],
      finalTitle: "Chcete rychlý landing page?",
      finalText: "Šablonu lze upravit pro službu, test nápadu, lokální byznys nebo jednoduchou reklamní stránku.",
      messagePlaceholder: "Jaká služba, cíl, materiály a jaký balíček vás zajímá?"
    }),

    "business-website": demo({
      slug: "business-website",
      brand: "BrightBusiness",
      descriptor: "business website",
      mark: "BB",
      templateName: "Firemní web Demo",
      businessType: "Firemní web",
      demoLabel: "DEMO šablona pro firemní web",
      heroLabel: "Business demo",
      image: "../../assets/images/categories/business-website.jpg",
      imageAlt: "Business website preview",
      accent: "#1d4ed8",
      accent2: "#06b6d4",
      dark: "#111827",
      soft: "#eef5ff",
      bg: "#f8fafc",
      title: "Firemní web se službami, důvěrou a poptávkou",
      subtitle: "Služby, realizace, výhody, proces, FAQ, kontakty a formulář v čisté firemní struktuře.",
      timeline: "5–10 dní",
      chips: ["Služby", "Realizace", "Důvěra", "Kontakt"],
      introKicker: "Firemní web",
      introTitle: "Klient má rychle pochopit, co děláte a proč vám napsat",
      introText: "Firemní web je vhodný pro služby a lokální podnikání, které potřebuje přehlednou prezentaci a poptávkový tok.",
      valueCards: [
        { title: "Služby", text: "Přehled nabídky a cen od.", meta: "jasně" },
        { title: "Důvěra", text: "Ukázky, proces, FAQ a kontakty.", meta: "rozhodnutí" }
      ],
      offerKicker: "Struktura",
      offerTitle: "Co firemní web obsahuje",
      offerText: "Služby, práce, proces, FAQ, kontakty, formulář a připravenost na publikaci.",
      offers: [
        { title: "Služby", text: "Karty služeb a popis hodnoty.", meta: "nabídka" },
        { title: "Ukázky", text: "Fotky, projekty nebo realizace.", meta: "důvěra" },
        { title: "Poptávka", text: "Formulář, messengery a e-mail.", meta: "lead" }
      ],
      processTitle: "Nejdřív nabídka, potom struktura důvěry",
      processText: base.processText,
      processCards: [
        { title: "1. Služby", text: "Co nabízíte, komu a za kolik od.", meta: "obsah" },
        { title: "2. Kontakt", text: "Formulář a rychlé CTA.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Služby", text: "Přehled a hodnota." },
        { title: "Důvěra", text: "Proces a ukázky." },
        { title: "Kontakt", text: "Poptávka do e-mailu." }
      ],
      finalTitle: "Chcete takový firemní web?",
      finalText: "Šablonu lze upravit pro lokální službu, firmu, studio, B2B nabídku nebo osobní podnikání.",
      messagePlaceholder: "Jaké služby, cíloví klienti, materiály a jaký balíček vás zajímá?"
    }),

    "mvp-platform": demo({
      slug: "mvp-platform",
      brand: "LaunchCore",
      descriptor: "MVP · platform",
      mark: "LC",
      templateName: "MVP / mini platforma Demo",
      businessType: "MVP / mini platforma",
      demoLabel: "DEMO šablona pro MVP / mini platformu",
      heroLabel: "MVP demo",
      image: "../../assets/images/categories/mvp-platform.jpg",
      imageAlt: "Digital product dashboard",
      accent: "#7c3aed",
      accent2: "#2563eb",
      dark: "#17122f",
      soft: "#f1edff",
      bg: "#fbfaff",
      title: "MVP nebo mini platforma pro ověření nápadu",
      subtitle: "Role, formuláře, administrace, databáze, dashboard nebo integrace podle konkrétního zadání.",
      timeline: "individuálně",
      chips: ["Role", "Formuláře", "Admin", "Integrace"],
      introKicker: "MVP",
      introTitle: "Když landing page nestačí, potřebujete jasný scope",
      introText: "MVP vyžaduje konkrétní logiku, role, data a bezpečný plán rozsahu. Nejdřív se řeší cíl a minimum pro spuštění.",
      valueCards: [
        { title: "Scope", text: "Co musí být v první verzi a co počká.", meta: "priorita" },
        { title: "Logika", text: "Role, formuláře, data, admin nebo integrace.", meta: "produkt" }
      ],
      offerKicker: "Produkt",
      offerTitle: "Co může mini platforma obsahovat",
      offerText: "Role, formuláře, dashboard, databázi, admin, notifikace nebo integrace podle zadání.",
      offers: [
        { title: "Formuláře", text: "Sbírání dat, poptávek nebo registrací.", meta: "základ" },
        { title: "Role", text: "Uživatel, admin, partner nebo klient.", meta: "přístup" },
        { title: "Dashboard", text: "Přehled dat a stavů.", meta: "kontrola" }
      ],
      processTitle: "Nejdřív scope, potom MVP",
      processText: "Než se staví složitější logika, je potřeba stanovit minimum, rizika, data a přesný první krok.",
      processCards: [
        { title: "1. Audit nápadu", text: "Co je nutné pro první verzi.", meta: "scope" },
        { title: "2. MVP plán", text: "Funkce, data, role a první release.", meta: "roadmapa" }
      ],
      galleryCards: [
        { title: "Dashboard", text: "Přehled a stav." },
        { title: "Role", text: "Uživatelé a přístup." },
        { title: "Data", text: "Formuláře a databáze." }
      ],
      finalTitle: "Chcete MVP nebo mini platformu?",
      finalText: "Tento směr se vždy plánuje individuálně: nejdřív scope, potom první verze a až poté rozšiřování.",
      messagePlaceholder: "Jaký nápad, role, data, funkce a rozpočet chcete probrat?"
    }),

    "project-rescue": demo({
      slug: "project-rescue",
      brand: "RescueLab",
      descriptor: "audit · rescue",
      mark: "RL",
      templateName: "Záchrana / audit projektu Demo",
      businessType: "Záchrana / audit projektu",
      demoLabel: "DEMO šablona pro audit / záchranu projektu",
      heroLabel: "Audit demo",
      image: "../../assets/images/categories/project-rescue.jpg",
      imageAlt: "Project audit workspace",
      accent: "#dc2626",
      accent2: "#f59e0b",
      dark: "#1f1515",
      soft: "#fff1f1",
      bg: "#fffafa",
      title: "Audit a záchrana projektu bez chaosu",
      subtitle: "Když web nebo projekt vypadá hotový jen napůl, pomůže audit, seznam problémů a plán oprav.",
      timeline: "1–4 dny",
      chips: ["Audit", "Chyby", "Plán", "Opravy"],
      introKicker: "Rescue",
      introTitle: "Nejdřív zjistit, co je opravdu hotové",
      introText: "Audit pomáhá oddělit funkční části od rizik, chyb, rozbitých formulářů, responzivity nebo publikace.",
      valueCards: [
        { title: "Stav projektu", text: "Co funguje, co je rozbité a co chybí.", meta: "realita" },
        { title: "Plán oprav", text: "Priorita, rozsah a další krok.", meta: "bez chaosu" }
      ],
      offerKicker: "Audit",
      offerTitle: "Co se kontroluje",
      offerText: "Layout, mobil, formuláře, odkazy, rychlost, obsah, publikace a hlavní rizika.",
      offers: [
        { title: "Oprava chyb", text: "Rozbité části a rychlé opravy.", meta: "priorita" },
        { title: "Responzivita", text: "Telefon, tablet, desktop.", meta: "kontrola" },
        { title: "Formuláře", text: "Poptávky, redirect, děkovací stránka.", meta: "lead" }
      ],
      processTitle: "Nejdřív audit, potom opravy",
      processText: "Sepíšu stav, rizika, prioritu a doporučený postup, aby se projekt nepřepisoval naslepo.",
      processCards: [
        { title: "1. Kontrola", text: "Projdeme web a hlavní toky.", meta: "audit" },
        { title: "2. Opravy", text: "Vybereme nejdůležitější zásahy.", meta: "plan" }
      ],
      galleryCards: [
        { title: "Audit", text: "Seznam problémů." },
        { title: "Opravy", text: "Priorita a scope." },
        { title: "Kontrola", text: "Formuláře a mobil." }
      ],
      finalTitle: "Potřebujete zachránit projekt?",
      finalText: "Audit lze použít pro rozbitý web, nedokončený landing page, problém s formuláři, responzivitou nebo publikací.",
      messagePlaceholder: "Co je rozbité, kde je projekt, co má fungovat a jak rychle to potřebujete?"
    }),

    "bug-fixing": demo({
      slug: "bug-fixing",
      brand: "FixPoint",
      descriptor: "bug fixing",
      mark: "FP",
      templateName: "Bug Fixing Demo",
      businessType: "Bug Fixing",
      demoLabel: "DEMO šablona pro opravu chyb",
      heroLabel: "Oprava chyb demo",
      image: "../../assets/images/categories/bug-fixing.jpg",
      imageAlt: "Oprava chyb workspace",
      accent: "#f97316",
      accent2: "#2563eb",
      dark: "#1f1710",
      soft: "#fff4e6",
      bg: "#fffaf5",
      title: "Oprava chyb na webu, formuláři nebo mobilní verzi",
      subtitle: "Rozbité obrazovky, špatné formuláře, responzivita, odkazy, publikace nebo drobná logika.",
      timeline: "podle zadání",
      chips: ["Chyby", "Formuláře", "Mobil", "Deploy"],
      introKicker: "Fix",
      introTitle: "Malá chyba může zastavit poptávky",
      introText: "Když nefunguje tlačítko, formulář, mobilní layout nebo publikace, je lepší opravit konkrétní problém než přepisovat vše.",
      valueCards: [
        { title: "Rychlá diagnostika", text: "Co je rozbité a proč.", meta: "příčina" },
        { title: "Konkrétní oprava", text: "Formulář, CSS, JS, odkazy, redirect.", meta: "výsledek" }
      ],
      offerKicker: "Opravy",
      offerTitle: "Co lze řešit",
      offerText: "Formuláře, mobilní zobrazení, broken links, drobný JS, publikace a thank-you flow.",
      offers: [
        { title: "Formulář", text: "Odeslání, field names, redirect, thank-you.", meta: "lead" },
        { title: "Mobil", text: "Overflow, tlačítka, texty, layout.", meta: "UX" },
        { title: "Deploy", text: "Publikace a funkční odkazy.", meta: "release" }
      ],
      processTitle: "Nejdřív reprodukce, potom oprava",
      processText: "Popíšete chybu, já ji ověřím, opravím a zkontroluji hlavní scénář.",
      processCards: [
        { title: "1. Problém", text: "Co přesně nefunguje a kde.", meta: "repro" },
        { title: "2. Fix", text: "Oprava a kontrola.", meta: "hotovo" }
      ],
      galleryCards: [
        { title: "Chyba", text: "Najít příčinu." },
        { title: "Fix", text: "Opravit konkrétní tok." },
        { title: "Test", text: "Ověřit na mobilu." }
      ],
      finalTitle: "Potřebujete opravit chybu?",
      finalText: "Pošlete odkaz, screenshot, popis problému a ideální výsledek. Navrhnu další krok.",
      messagePlaceholder: "Co nefunguje, kde je odkaz, screenshot, priorita a termín?"
    })
  };
})();



