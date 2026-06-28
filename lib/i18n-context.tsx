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
    projects_dashboard_title: "Digital Marketing Dashboard",
    projects_dashboard_desc: "Analyzed webshop performance, customer behavior, and KPIs to support commercial decisions. Monitored market trends and competitor activities.",
    projects_viewAll: "View all projects on GitHub",
    projects_products: "products",
    projects_growth: "growth",
    projects_pages: "pages",
    projects_speed: "speed",
    projects_components: "components",
    projects_reviews: "reviews",

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
    projects_dashboard_title: "Digitális Marketing Dashboard",
    projects_dashboard_desc: "Webáruház teljesítményének, vásárlói magatartás és KPI-ok elemzése az üzleti döntések támogatásához. Piactrendek és versenytársak figyelése.",
    projects_viewAll: "Összes projekt megtekintése GitHubon",
    projects_products: "termék",
    projects_growth: "növekedés",
    projects_pages: "oldal",
    projects_speed: "sebesség",
    projects_components: "komponens",
    projects_reviews: "revízió",

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
