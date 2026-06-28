"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hu";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_sayHello: "Say Hello",

    // Hero
    hero_available: "Open for opportunities",
    hero_title1: "Web Developer",
    hero_title2: "& Digital Product",
    hero_title3: "Specialist",
    hero_description: "I'm David Szilagyi, a web developer with a background in digital product development, UX design, and e-commerce. I build and optimize digital solutions with a strong focus on user experience, customer journeys, and online business performance.",
    hero_viewProjects: "View Projects",
    hero_getInTouch: "Get in Touch",
    hero_scroll: "Scroll",

    // Projects
    projects_badge: "Featured Work",
    projects_title: "Projects",
    projects_description: "A selection of projects showcasing expertise in e-commerce, web development, and digital product optimization.",
    projects_shopify_title: "Shopify E-commerce Store",
    projects_shopify_desc: "Managed and optimized a Shopify-based e-commerce store with 600+ products. Improved product data organization, customer journey flow, and merchandising effectiveness.",
    projects_wordpress_title: "WordPress Company Website",
    projects_wordpress_desc: "Developed and maintained a company website using WordPress. Improved website structure, performance, and user experience with digital marketing integration.",
    projects_frontend_title: "Frontend Component System",
    projects_frontend_desc: "Developed reusable frontend components using C#, JavaScript, .NET and Bootstrap within an Agile Scrum environment. Contributed to e-commerce platform development.",
    projects_ux_title: "UX Design System",
    projects_ux_desc: "Created user-centered interface designs and responsive web solutions as part of Multimedia Design studies. Focused on user research, prototyping, and usability testing.",
    projects_dashboard_title: "Digital concept development",
    projects_dashboard_desc: "Analyzed webshop performance, customer behavior, and KPIs to support commercial decisions. Monitored market trends and competitor activities.",
    projects_viewAll: "View all projects on GitHub",
    projects_products: "products",
    projects_growth: "growth",
    projects_pages: "pages",
    projects_speed: "speed",
    projects_components: "components",
    projects_reviews: "reviews",
    projects_headless_ecommerce_title: "Headless E-commerce",
     projects_headless_ecommerce_desc: "Headless implementation",

    // Experience
    experience_badge: "Career",
    experience_title: "Experience",
    experience_description: "A track record of delivering impactful digital solutions across e-commerce, web development, and team management.",
    experience_current: "Current",
    experience_buildgreener_role: "Web & E-commerce Specialist",
    experience_buildgreener_desc: "Managed and optimized a Shopify-based e-commerce store with 600+ products. Maintained product data, categories, and merchandising to ensure an effective customer journey.",
    experience_buildgreener_h1: "Analyzed webshop performance, customer behavior, and KPIs to support commercial decisions",
    experience_buildgreener_h2: "Supported promotions, campaigns, and online sales initiatives",
    experience_buildgreener_h3: "Monitored market trends and competitors while collaborating with cross-functional teams",
    experience_kooka_role: "Web Developer & Digital Marketing Consultant",
    experience_kooka_desc: "Developed and maintained the company website using WordPress. Improved the website structure, performance, and user experience. Assisted with digital marketing strategies to improve online presence.",
    experience_kooka_h1: "Improved website structure, performance, and user experience",
    experience_kooka_h2: "Assisted with digital marketing strategies to improve online presence",
    experience_kooka_h3: "Optimized website content and functionality",
    experience_dynamicweb_role: "Frontend Developer Intern",
    experience_dynamicweb_desc: "Developed frontend components using C#, JavaScript, .NET and Bootstrap. Participated in Agile Scrum development processes and collaborated with Product Managers, Designers and Developers.",
    experience_dynamicweb_h1: "Worked with Azure DevOps, code reviews and sprint planning",
    experience_dynamicweb_h2: "Contributed to e-commerce platform development and bug fixing",
    experience_dynamicweb_h3: "Improved user experience and platform functionality",
    experience_fratelli_role: "Manager",
    experience_fratelli_desc: "Achieved to reduce expenses and increased the sales which helped the company to be able to reinvest the revenue into the business. Responsible for a team containing 25 members.",
    experience_fratelli_h1: "Reduced expenses and increased sales, enabling reinvestment",
    experience_fratelli_h2: "Responsible for a team containing 25 members",
    experience_fratelli_h3: "Training and hiring new people",
    experience_fratelli_h4: "Managed situations from both business and employee perspectives",

    // Skills
    skills_badge: "Capabilities",
    skills_title: "Skills & Education",
    skills_description: "A blend of technical development, UX design, and digital marketing expertise honed through education and professional experience.",
    skills_frontend_title: "Frontend Development",
    skills_cms_title: "CMS & E-commerce",
    skills_ux_title: "UX / UI Design",
    skills_marketing_title: "Digital Marketing",
    skills_wireframing_title: "Wireframing & Prototyping",
    skills_languages_title: "Languages",
    skills_education_badge: "Education",
    skills_education_title: "Academic Background",
    skills_edu1_degree: "Digital Concept Development",
    skills_edu1_desc: "Bachelor's top-up programme expanding knowledge in UX design, concept development, and game development using Unity, C#, and Blender.",
    skills_edu2_degree: "Multimedia Design",
    skills_edu2_desc: "Focus on UX/UI design and frontend development, covering the full process from user research to implementation.",
    skills_edu3_degree: "Marketing Management",
    skills_edu3_desc: "Foundation in developing and analyzing businesses, with focus on marketing strategies and business development.",

    // Contact
    contact_badge: "Let's Connect",
    contact_title: "Get in Touch",
    contact_description: "I'm currently open for new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out.",
    contact_connectWithMe: "Connect with me",
    contact_form_name: "Name",
    contact_form_namePlaceholder: "Your name",
    contact_form_email: "Email",
    contact_form_emailPlaceholder: "you@example.com",
    contact_form_message: "Message",
    contact_form_messagePlaceholder: "Tell me about your project...",
    contact_form_send: "Send Message",
    contact_form_sending: "Sending...",
    contact_form_success: "Message Sent",
    contact_form_successDesc: "Thanks for reaching out. I'll get back to you soon.",
    contact_form_error: "Failed to send message. Please try again.",

    // Footer
    footer_rights: "All rights reserved",

    // Project Detail Page
    project_backToProjects: "Back to Projects",
    project_overview: "Overview",
    project_challenge: "The Challenge",
    project_solution: "The Solution",
    project_features: "Key Features",
    project_technologies: "Technologies",
    project_timeline: "Timeline",
    project_role: "Role",
    project_links: "Links",
    project_liveSite: "Live Site",
    project_github: "GitHub Repository",
    project_figma: "Figma Design",
    project_adobexd: "Adobe XD Design",

    // Shopify Project Detail
    project_shopify_longDesc: "Managed and optimized a large-scale Shopify e-commerce store specializing in sustainable building materials. The project involved comprehensive product catalog management, customer journey optimization, and data-driven decision making to improve overall store performance.",
    project_shopify_challenge: "The main challenge was managing a complex product catalog with 600+ items while maintaining consistent data quality and optimizing the customer journey. The store needed better organization, improved search functionality, and more effective merchandising strategies.",
    project_shopify_solution: "Implemented a systematic approach to product management using Shopify's built-in tools combined with custom solutions. Analyzed customer behavior data to optimize product categorization and improve the checkout flow. Integrated analytics tools to track KPIs and make data-driven decisions.",
    project_shopify_feature1: "Product catalog optimization with improved categorization",
    project_shopify_feature2: "Customer journey analysis and checkout optimization",
    project_shopify_feature3: "Marketing campaign integration and performance tracking",

    // WordPress Project Detail
    project_wordpress_longDesc: "Developed and maintained a company website for a UK-based business using WordPress. The project focused on improving website performance, user experience, and integrating digital marketing strategies to enhance online presence.",
    project_wordpress_challenge: "The existing website had performance issues, poor SEO structure, and outdated design. It needed a complete overhaul to better represent the brand and support marketing initiatives.",
    project_wordpress_solution: "Redesigned the website using modern WordPress practices with a focus on performance optimization, SEO best practices, and user experience. Integrated analytics and marketing tools to track performance.",
    project_wordpress_feature1: "Complete website redesign with modern UI/UX",
    project_wordpress_feature2: "SEO optimization and performance improvements",
    project_wordpress_feature3: "Marketing integration and analytics setup",

    // Frontend Project Detail
    project_frontend_longDesc: "Contributed to the development of a frontend component system for an enterprise e-commerce platform. Worked within an Agile Scrum environment to build reusable components using C#, JavaScript, .NET and Bootstrap.",
    project_frontend_challenge: "The platform needed a unified component system that could be reused across multiple implementations while maintaining consistency and ease of use for developers.",
    project_frontend_solution: "Developed modular frontend components following best practices and design patterns. Collaborated with the team to ensure components were well-documented and tested.",
    project_frontend_feature1: "Reusable component architecture",
    project_frontend_feature2: "Cross-browser compatibility and responsive design",
    project_frontend_feature3: "Comprehensive documentation and testing",

    // UX Design Project Detail
    project_ux_longDesc: "Created user-centered design solutions as part of Multimedia Design studies. This project focused on the complete design process from user research to high-fidelity prototypes.",
    project_ux_challenge: "Understanding user needs and translating them into effective design solutions that balance aesthetics with functionality.",
    project_ux_solution: "Applied user-centered design methodology with extensive research, iterative prototyping, and usability testing to create effective design solutions.",
    project_ux_feature1: "User research and persona development",
    project_ux_feature2: "Wireframing and interactive prototyping",
    project_ux_feature3: "Usability testing and iteration",

    // Headless Project Detail
    project_headless_longDesc: "A headless e-commerce implementation separating the frontend presentation layer from the backend commerce platform. This approach provides greater flexibility and improved performance.",
    project_headless_challenge: "Building a modern, fast e-commerce experience while integrating with existing systems and maintaining SEO capabilities.",
    project_headless_solution: "Implemented a Next.js frontend with API-based integration to the commerce backend, optimizing for performance and developer experience.",
    project_headless_feature1: "API-first architecture",
    project_headless_feature2: "Server-side rendering for performance",
    project_headless_feature3: "Optimized image delivery and caching",
  },
  hu: {
    // Navbar
    nav_projects: "Projektek",
    nav_experience: "Tapasztalat",
    nav_skills: "Készségek",
    nav_contact: "Kapcsolat",
    nav_sayHello: "Üzenj nekem",

    // Hero
    hero_available: "Nyitott új lehetőségekre",
    hero_title1: "Webfejlesztő",
    hero_title2: "& Digitális Termék",
    hero_title3: "Specialista",
    hero_description: "Szilágyi Dávid vagyok, webfejlesztő digitális termékfejlesztési, UX design és e-kereskedelemi háttérrel. Felhasználói élményre, vásárlói útra és online üzleti teljesítményre összpontosítva építem és optimalizálom a digitális megoldásokat.",
    hero_viewProjects: "Projektek megtekintése",
    hero_getInTouch: "Keress meg",
    hero_scroll: "Görgesd",

    // Projects
    projects_badge: "Kiemelt Munkák",
    projects_title: "Projektek",
    projects_description: "E-kereskedelem, webfejlesztés és digitális termékoptimalizálás területén szerzett szakértelem bemutatása.",
    projects_shopify_title: "Shopify Webáruház",
    projects_shopify_desc: "600+ termékkel rendelkező Shopify-alapú webáruház kezelése és optimalizálása. Termékinformációk szervezése, vásárlói út és árucikk-elrendezés javítása.",
    projects_wordpress_title: "WordPress Céges Weboldal",
    projects_wordpress_desc: "Céges weboldal fejlesztése és karbantartása WordPress használatával. Weboldal szerkezet, teljesítmény és felhasználói élmény javítása digitális marketing integrációval.",
    projects_frontend_title: "Frontend Komponens Rendszer",
    projects_frontend_desc: "Újrafelhasználható frontend komponensek fejlesztése C#, JavaScript, .NET és Bootstrap használatával Agile Scrum környezetben. Hozzájárulás az e-kereskedelmi platform fejlesztéséhez.",
    projects_ux_title: "UX Design Rendszer",
    projects_ux_desc: "Felhasználóközpontú interfész tervek és reszponzív web megoldások készítése a Multimédia Design tanulmányok részeként. Felhasználói kutatásra, prototípus készítésre és használhatósági tesztelésre fókuszálva.",
    projects_dashboard_title: "Digital concept development",
    projects_dashboard_desc: "Webáruház teljesítményének, vásárlói magatartás és KPI-ok elemzése az üzleti döntések támogatásához. Piactrendek és versenytársak figyelése.",
    projects_viewAll: "Összes projekt megtekintése GitHubon",
    projects_products: "termék",
    projects_growth: "növekedés",
    projects_pages: "oldal",
    projects_speed: "sebesség",
    projects_components: "komponens",
    projects_reviews: "revízió",
    projects_headless_ecommerce_title: "Headless E-commerce",
    projects_headless_ecommerce_desc: "Headless implementation",

    // Experience
    experience_badge: "Karrier",
    experience_title: "Tapasztalat",
    experience_description: "E-kereskedelem, webfejlesztés és csapatmenedzsment területén nyújtott hatékony digitális megoldások.",
    experience_current: "Jelenlegi",
    experience_buildgreener_role: "Web & E-kereskedelmi Specialista",
    experience_buildgreener_desc: "600+ termékkel rendelkező Shopify-alapú webáruház kezelése és optimalizálása. Termékinformációk, kategóriák és árucikk-elrendezés karbantartása a hatékony vásárlói út érdekében.",
    experience_buildgreener_h1: "Webáruház teljesítmény, vásárlói magatartás és KPI-ok elemzése az üzleti döntések támogatásához",
    experience_buildgreener_h2: "Promóciók, kampányok és online értékesítési kezdeményezések támogatása",
    experience_buildgreener_h3: "Piactrendek és versenytársak figyelése, együttműködés a funkcionális csapatokkal",
    experience_kooka_role: "Webfejlesztő & Digitális Marketing Tanácsadó",
    experience_kooka_desc: "Céges weboldal fejlesztése és karbantartása WordPress használatával. Weboldal szerkezet, teljesítmény és felhasználói élmény javítása. Digitális marketing stratégiák támogatása az online jelenlét javításához.",
    experience_kooka_h1: "Weboldal szerkezet, teljesítmény és felhasználói élmény javítása",
    experience_kooka_h2: "Digitális marketing stratégiák támogatása az online jelenlét javításához",
    experience_kooka_h3: "Weboldal tartalom és funkcionalitás optimalizálása",
    experience_dynamicweb_role: "Frontend Fejlesztő Gyakornok",
    experience_dynamicweb_desc: "Frontend komponensek fejlesztése C#, JavaScript, .NET és Bootstrap használatával. Részvétel Agile Scrum fejlesztési folyamatokban, együttműködés termékmenedzserekkel, tervezőkkel és fejlesztőkkel.",
    experience_dynamicweb_h1: "Azure DevOps, kódrevíziók és sprint tervezés",
    experience_dynamicweb_h2: "Hozzájárulás az e-kereskedelmi platform fejlesztéséhez és hibajavításhoz",
    experience_dynamicweb_h3: "Felhasználói élmény és platform funkcionalitás javítása",
    experience_fratelli_role: "Vezető",
    experience_fratelli_desc: "Költségek csökkentése és árbevétel növelése, ami lehetővé tette a cég számára a bevétel visszaemelését az üzletbe. 25 fős csapatért felelős.",
    experience_fratelli_h1: "Költségek csökkentése és árbevétel növelése, lehetővé téve a visszaemelést",
    experience_fratelli_h2: "25 fős csapatért felelős",
    experience_fratelli_h3: "Új emberek képzése és felvétele",
    experience_fratelli_h4: "Mind üzleti, mind munkavállalói szempontból kezelt helyzetek",

    // Skills
    skills_badge: "Képességek",
    skills_title: "Készségek & Tanulmányok",
    skills_description: "Technikai fejlesztés, UX design és digitális marketing szakértelem kombinációja, amelyet tanulmányok és szakmai tapasztalat alapozott meg.",
    skills_frontend_title: "Frontend Fejlesztés",
    skills_cms_title: "CMS & E-kereskedelem",
    skills_ux_title: "UX / UI Design",
    skills_marketing_title: "Digitális Marketing",
    skills_wireframing_title: "Vázlat & Prototípus",
    skills_languages_title: "Nyelvek",
    skills_education_badge: "Tanulmányok",
    skills_education_title: "Végzettség",
    skills_edu1_degree: "Digitális Koncepció Fejlesztés",
    skills_edu1_desc: "Bachelor kiegészítő program UX design, koncepciófejlesztés és játékfejlesztés területén Unity, C# és Blender használatával.",
    skills_edu2_degree: "Multimédia Design",
    skills_edu2_desc: "UX/UI design és frontend fejlesztés fókusszal, a felhasználói kutatástól a megvalósításig terjedő teljes folyamat lefedésével.",
    skills_edu3_degree: "Marketing Menedzsment",
    skills_edu3_desc: "Üzletek fejlesztésének és elemzésének alapjai, marketing stratégiák és üzleti fejlesztés fókusszal.",

    // Contact
    contact_badge: "Kapcsolódjunk",
    contact_title: "Vedd fel velem a kapcsolatot",
    contact_description: "Jelenleg nyitott vagyok új lehetőségekre. Legyen szó egy projektről vagy csak egy beszélgetésről, nyugodtan keress meg.",
    contact_connectWithMe: "Kapcsolódj velem",
    contact_form_name: "Név",
    contact_form_namePlaceholder: "A neved",
    contact_form_email: "Email",
    contact_form_emailPlaceholder: "te@pelda.com",
    contact_form_message: "Üzenet",
    contact_form_messagePlaceholder: "Mesélj a projektedről...",
    contact_form_send: "Üzenet küldése",
    contact_form_sending: "Küldés...",
    contact_form_success: "Üzenet Elküldve",
    contact_form_successDesc: "Köszönöm, hogy írtál. Hamarosan válaszolok.",
    contact_form_error: "Nem sikerült elküldeni az üzenetet. Kérlek próbáld újra.",

    // Footer
    footer_rights: "Minden jog fenntartva",

    // Project Detail Page
    project_backToProjects: "Vissza a projektekhez",
    project_overview: "Áttekintés",
    project_challenge: "A kihívás",
    project_solution: "A megoldás",
    project_features: "Fő jellemzők",
    project_technologies: "Technológiák",
    project_timeline: "Időszak",
    project_role: "Pozíció",
    project_links: "Linkek",
    project_liveSite: "Élő oldal",
    project_github: "GitHub repository",
    project_figma: "Figma terv",
    project_adobexd: "Adobe XD terv",

    // Shopify Project Detail
    project_shopify_longDesc: "Fenntartható építőanyagokkal foglalkozó nagyüzemi Shopify webáruház kezelése és optimalizálása. A projekt átfogó termékkatalógus-kezelést, vásárlói út optimalizálást és adatalapú döntéshozatalt foglalt magában az áruház teljesítményének javítása érdekében.",
    project_shopify_challenge: "A fő kihívás az 600+ tételből álló összetett termék katalógus kezelése volt a következetes adatminőség megőrzése mellett, a vásárlói út optimalizálásával együtt. Az áruháznak jobb szervezésre, jobb keresési funkcióra és hatékonyabb árubemutatási stratégiákra volt szüksége.",
    project_shopify_solution: "Rendszertani megközelítést alkalmaztam a termékmenedzsmenthez a Shopify beépített eszközeinek és egyedi megoldások kombinálásával. Elemeztem a vásárlói magatartás adatait a termék kategorizálás optimalizálása és a fizetési folyamat javítása érdekében. Integráltam az analitikai eszközöket a KPI-ok követésére és adatalapú döntések meghozatalára.",
    project_shopify_feature1: "Termék katalógus optimalizálás javított kategorizálással",
    project_shopify_feature2: "Vásárlói út elemzés és fizetési folyamat optimalizálás",
    project_shopify_feature3: "Marketing kampány integráció és teljesítmény követés",

    // WordPress Project Detail
    project_wordpress_longDesc: "Céges weboldal fejlesztése és karbantartása egy Egyesült Királyságbeli vállalkozás számára WordPress használatával. A projekt a weboldal teljesítményének, felhasználói élményének javítására és digitális marketing stratégiák integrálására összpontosított az online jelenlét növelése érdekében.",
    project_wordpress_challenge: "A meglévő weboldal teljesítményproblémákkal, gyenge SEO szerkezettel és elavott designnal rendelkezett. Teljes felújításra volt szükség a márka jobb képviselete és a marketing kezdeményezések támogatása érdekében.",
    project_wordpress_solution: "Újraterveztem a weboldalt modern WordPress gyakorlatok alkalmazásával, fókuszálva a teljesítmény-optimalizálásra, SEO legjobb gyakorlatokra és felhasználói élményre. Integráltam az analitikai és marketing eszközöket a teljesítmény követésére.",
    project_wordpress_feature1: "Teljes weboldal újraterv modern UI/UX-al",
    project_wordpress_feature2: "SEO optimalizálás és teljesítmény javítások",
    project_wordpress_feature3: "Marketing integráció és analitika beállítás",

    // Frontend Project Detail
    project_frontend_longDesc: "Hozzájárulás egy frontend komponens rendszer fejlesztéséhez egy vállalati e-kereskedelmi platform számára. Agile Scrum környezetben dolgoztam újrafelhasználható komponensek építésén C#, JavaScript, .NET és Bootstrap használatával.",
    project_frontend_challenge: "A platformnak egy egységes komponens rendszerre volt szüksége, amely több implementációban is újrafelhasználható, miközben megőrzi a következetességet és a fejlesztők számára való egyszerű használatot.",
    project_frontend_solution: "Moduláris frontend komponenseket fejlesztettem a legjobb gyakorlatok és tervezési minták követésével. Együttműködtem a csapattal a komponensek megfelelő dokumentálása és tesztelése érdekében.",
    project_frontend_feature1: "Újrafelhasználható komponens architektúra",
    project_frontend_feature2: "Böngésző-kompatibilitás és reszponzív design",
    project_frontend_feature3: "Átfogó dokumentáció és tesztelés",

    // UX Design Project Detail
    project_ux_longDesc: "Felhasználóközpontú design megoldások készítése a Multimédia Design tanulmányok részeként. Ez a projekt a teljes design folyamatra összpontosított a felhasználói kutatástól a magas hűségű prototípusokig.",
    project_ux_challenge: "A felhasználói igények megértése és hatékony design megoldásokká alakítása, amelyek egyensúlyt teremtenek az esztétika és a funkcionalitás között.",
    project_ux_solution: "Felhasználóközpontú design módszertant alkalmaztam kiterjedt kutatással, iteratív prototípus készítéssel és használhatósági teszteléssel hatékony design megoldások létrehozásához.",
    project_ux_feature1: "Felhasználói kutatás és persona fejlesztés",
    project_ux_feature2: "Vázlatkészítés és interaktív prototípusok",
    project_ux_feature3: "Használhatósági tesztelés és iteráció",

    // Headless Project Detail
    project_headless_longDesc: "Headless e-kereskedelmi implementáció, amely elválasztja a frontend megjelenítési réteget a backend kereskedelmi platformtól. Ez a megközelítés nagyobb rugalmasságot és jobb teljesítményt nyújt.",
    project_headless_challenge: "Modern, gyors e-kereskedelmi élmény építése meglévő rendszerekkel való integráció mellett, az SEO képességek megőrzésével.",
    project_headless_solution: "Next.js frontendet implementáltam API-alapú integrációval a kereskedelmi backendhez, optimalizálva a teljesítményt és a fejlesztői élményt.",
    project_headless_feature1: "API-first architektúra",
    project_headless_feature2: "Szerver-side renderelés a teljesítményért",
    project_headless_feature3: "Optimalizált kézbesítés és gyorsítótárazás",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "hu")) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "hu") {
        setLanguage("hu");
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
