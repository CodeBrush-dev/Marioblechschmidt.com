// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.marioblechschmidt.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.marioblechschmidt.com/","title_tag":"Psychotherapie Dreieich & Burnout Therapie | Mario Blechschmidt","meta_description":"Heilpraktiker Psychotherapie in Dreieich für Burnout, Angststörungen, Lebenskrisen, Depressionen, somatoforme Erkrankungen und Online Therapie Dreieich."},{"page_url":"https://www.marioblechschmidt.com/über-mich","title_tag":"Heilpraktiker Psychotherapie & Burnout Therapie | Mario Blechschmidt","meta_description":"Heilpraktiker für Psychotherapie in Dreieich mit Schwerpunkt Burnout Therapie, Lebenskrisen Therapie und Stressprävention. Ganzheitliche, wertschätzende Begleitung."},{"page_url":"https://www.marioblechschmidt.com/anwendungsgebiete","title_tag":"Burnout Therapie & Angststörungen Dreieich | Mario Blechschmidt","meta_description":"Therapie bei Burnout, Angststörungen, Zwangsgedanken, Depressionen, Lebenskrisen sowie somatoforme Erkrankungen. Individuelle Unterstützung in Dreieich."},{"page_url":"https://www.marioblechschmidt.com/ablauf-und-honorar","title_tag":"Psychotherapie Dreieich & Online Therapie | Mario Blechschmidt","meta_description":"Ablauf und Honorar Ihrer Psychotherapie in Dreieich. Transparente Kosten, vertrauensvolle Zusammenarbeit und auf Wunsch Online Therapie Dreieich."},{"page_url":"https://www.marioblechschmidt.com/contact-8","title_tag":"Psychotherapie Dreieich Kontakt & Online Therapie | Mario Blechschmidt","meta_description":"Kontakt für Psychotherapie Dreieich. Terminvereinbarung für Burnout Therapie, Angststörungen, Lebenskrisen Therapie und Online Therapie Dreieich."},{"page_url":"https://www.marioblechschmidt.com/datenschutz","title_tag":"Datenschutz | Mario Blechschmidt Heilpraktiker Psychotherapie","meta_description":"Datenschutzerklärung von Heilpraktiker Psychotherapie Mario Blechschmidt in Dreieich. Informationen zu Datenschutz, Cookies und Website-Analyse."},{"page_url":"https://www.marioblechschmidt.com/agb","title_tag":"AGB | Mario Blechschmidt Heilpraktiker Psychotherapie","meta_description":"Allgemeine Geschäftsbedingungen von Heilpraktiker Psychotherapie Mario Blechschmidt in Dreieich zu Leistungen, Honorar, Terminen und Vertraulichkeit."},{"page_url":"https://www.marioblechschmidt.com/impressum","title_tag":"Impressum | Mario Blechschmidt Heilpraktiker Psychotherapie","meta_description":"Impressum von Mario Blechschmidt, Heilpraktiker für Psychotherapie in Dreieich. Gesetzliche Anbieterkennzeichnung und Kontaktinformationen."}],"keywords":["psychotherapie dreieich","heilpraktiker psychotherapie","burnout therapie","angststörungen dreieich","lebenskrisen therapie","stressprävention dreieich","zwangsgedanken unterstützung","depressionen behandlung","somatoforme erkrankungen","online therapie dreieich"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.marioblechschmidt.com/#medicalbusiness",
  "name": "Mario Blechschmidt – Heilpraktiker für Psychotherapie",
  "url": "https://www.marioblechschmidt.com/",
  "image": [
    "https://static.wixstatic.com/media/f27df5_09e30d3605504c3ba320ba0db09c0476~mv2.jpg/v1/fill/w_293,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_5401%20x%20x.jpg",
    "https://static.wixstatic.com/media/f27df5_a0758705e7fe4da9995dc6f7189e2473%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/f27df5_a0758705e7fe4da9995dc6f7189e2473%7Emv2.jpg"
  ],
  "description": "Praxis für Psychotherapie (Heilpraktiker sektoral für Psychotherapie) von Mario Blechschmidt in Dreieich. Schwerpunkte: Burnout, Stressbewältigung, Angststörungen, Panikattacken, Zwangsgedanken, Lebenskrisen, Depressionen, somatoforme Störungen und Motivationsaufbau für Entzugstherapien. Persönliche und Online-Sitzungen.",
  "medicalSpecialty": [
    "Psychotherapy",
    "MentalHealth"
  ],
  "priceRange": "€€",
  "telephone": "+49 177 7133826",
  "email": "mailto:marioblechschmidt@gmx.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Am Lachengraben 7",
    "postalCode": "63303",
    "addressLocality": "Dreieich",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.0,
    "longitude": 8.7
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Dreieich"
  },
  "founder": {
    "@type": "Person",
    "@id": "https://www.marioblechschmidt.com/#person",
    "name": "Mario Blechschmidt",
    "jobTitle": "Heilpraktiker (beschränkt auf das Gebiet der Psychotherapie)",
    "image": "https://static.wixstatic.com/media/f27df5_09e30d3605504c3ba320ba0db09c0476~mv2.jpg/v1/fill/w_293,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_5401%20x%20x.jpg",
    "url": "https://www.marioblechschmidt.com/über-mich"
  },
  "foundingDate": "2024",
  "sameAs": [],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Psychotherapeutische Einzelsitzung (50 Minuten)",
      "price": "85",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Psychotherapeutische Sitzung",
        "description": "Einzelsitzung à 50 Minuten bei Mario Blechschmidt, Heilpraktiker für Psychotherapie. Individuelle Begleitung bei seelischen Belastungen wie Burnout, Stress, Angststörungen, Depressionen oder Lebenskrisen."
      }
    }
  ],
  "serviceType": [
    "Psychotherapie bei Burnout",
    "Stressbewältigung und Stressprävention",
    "Therapie bei Angststörungen und Panikattacken",
    "Begleitung bei Zwangsgedanken und Zwangshandlungen",
    "Unterstützung in Lebenskrisen und Sinnfragen",
    "Überbrückungstherapie vor stationärer oder ambulanter Behandlung",
    "Motivationsaufbau für Entzugstherapie",
    "Therapie bei depressiven Stimmungen und Antriebslosigkeit",
    "Begleitung bei somatoformen Störungen",
    "Online-Psychotherapie-Sitzungen"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Anwendungsgebiete Psychotherapie",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Burnout",
        "itemOffered": {
          "@type": "Service",
          "name": "Therapie bei Burnout",
          "description": "Unterstützung bei tiefer Erschöpfung und Überlastung, um Ursachen zu verstehen und Wege zu mehr innerer Kraft und Lebensfreude zu finden."
        }
      },
      {
        "@type": "Offer",
        "name": "Angststörungen und Panikattacken",
        "itemOffered": {
          "@type": "Service",
          "name": "Therapie bei Angststörungen und Panikattacken",
          "description": "Therapeutische Begleitung zur Bewältigung von Ängsten und Panikattacken und zur Rückgewinnung von Sicherheit im Alltag."
        }
      },
      {
        "@type": "Offer",
        "name": "Zwangsgedanken und Zwangshandlungen",
        "itemOffered": {
          "@type": "Service",
          "name": "Therapie bei Zwangsgedanken und Zwangshandlungen",
          "description": "Unterstützung beim Verstehen und Bearbeiten von Zwangsgedanken und -handlungen in einem geschützten Rahmen."
        }
      },
      {
        "@type": "Offer",
        "name": "Lebenskrisen und Sinnfragen",
        "itemOffered": {
          "@type": "Service",
          "name": "Begleitung in Lebenskrisen und bei Sinnfragen",
          "description": "Vertrauensvolle Gespräche zur Klärung von Lebenskrisen und existenziellen Fragen sowie zur Entwicklung neuer Perspektiven."
        }
      },
      {
        "@type": "Offer",
        "name": "Überbrückungstherapie",
        "itemOffered": {
          "@type": "Service",
          "name": "Überbrückungstherapie vor stationärer oder ambulanter Behandlung",
          "description": "Stabilisierende Begleitung in der Wartezeit auf einen kassenärztlichen Therapieplatz, zur Vorbereitung auf eine stationäre oder ambulante Therapie."
        }
      },
      {
        "@type": "Offer",
        "name": "Umgang mit akutem Stress und Stressprävention",
        "itemOffered": {
          "@type": "Service",
          "name": "Stressbewältigung und -prävention",
          "description": "Unterstützung beim Erkennen von Stressauslösern und Entwicklung individueller Strategien zur Bewältigung und Prävention von Stress."
        }
      },
      {
        "@type": "Offer",
        "name": "Motivationsaufbau für eine Entzugstherapie",
        "itemOffered": {
          "@type": "Service",
          "name": "Motivationsaufbau für Entzugstherapie",
          "description": "Therapeutische Begleitung beim Aufbau von Motivation und Überwinden innerer Widerstände vor Beginn einer Entzugstherapie."
        }
      },
      {
        "@type": "Offer",
        "name": "Depressive Stimmungen, Depressionen und Antriebslosigkeit",
        "itemOffered": {
          "@type": "Service",
          "name": "Therapie bei depressiven Störungen und Antriebslosigkeit",
          "description": "Unterstützung beim Erkennen von Ursachen depressiver Stimmungen und Entwicklung individueller Wege zu mehr Lebensfreude und Antrieb."
        }
      },
      {
        "@type": "Offer",
        "name": "Somatoforme Erkrankungen",
        "itemOffered": {
          "@type": "Service",
          "name": "Begleitung bei somatoformen Störungen",
          "description": "Therapeutische Unterstützung bei körperlichen Beschwerden ohne organische Ursache sowie beim Erkennen seelischer Hintergründe."
        }
      }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49 177 7133826",
    "contactType": "customer service",
    "availableLanguage": [
      "de"
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
