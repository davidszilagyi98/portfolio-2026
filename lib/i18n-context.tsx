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
    projects_description: "A selection of projects showcasing expertise in e-commerce, web development, UX design and digital product optimization.",
    projects_shopify_title: "Shopify E-commerce Store",
    projects_shopify_desc: "Managed and optimized a Shopify-based e-commerce store with 600+ products. Improved product data organization, customer journey flow, and merchandising effectiveness.",
    projects_wordpress_title: "WordPress Company Website",
    projects_wordpress_desc: "Developed and maintained a company website using WordPress. Improved website structure, performance, and user experience with digital marketing integration.",
    projects_frontend_title: "Frontend Component System",
    projects_frontend_desc: "Developed reusable frontend components using C#, JavaScript, .NET and Bootstrap within an Agile Scrum environment. Contributed to e-commerce platform development.",
    projects_ux_title: "React Platform",
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
    skills_edu1_desc: "In this Bachelor’s top-up program I could expand my knowledge and further develop myself to know the whole process of UX design and concept development. As part of the programme I joined a game development elective where I learnt how to develop games on Unity by using C# and Blender. The last part of my education was an internship where I followed my passion for programming as a Frontend developer.",
    skills_edu2_degree: "Multimedia Design",
    skills_edu2_desc: "Studied multimedia design with a focus on UX/UI design and frontend development, covering the full process from user research to implementation. Gained hands-on experience in designing user-centered interfaces, prototyping, and developing responsive web solutions. Specialized in frontend development, working with modern web technologies to build interactive websites and applications, while collaborating in team-based projects.",
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
    project_shopify_longDesc: "Managed and continuously developed a Shopify-based e-commerce store specializing in sustainable building materials with a catalog of 600+ products. Responsible for the end-to-end webshop experience including product management, visual content creation, digital marketing initiatives, Google Ads campaigns, customer journey improvements, and ongoing store optimization. Worked closely with stakeholders to align business goals with customer needs while improving overall webshop performance.",
    project_shopify_challenge: "The store operated in a highly competitive market with a limited marketing budget, making efficient customer acquisition and conversion essential. Managing a large and diverse product catalog also presented challenges around product organization, searchability, and maintaining a smooth customer journey. Logistics added another layer of complexity due to varying product characteristics including heavy, lightweight, small, and oversized items requiring different delivery considerations.",
    project_shopify_solution: "Built and continuously improved the webshop by managing product structures, introducing new features, and optimizing the overall customer experience. Managed digital marketing activities including Google Ads campaigns and performance tracking, focusing on improving return on ad spend (ROAS) and maximizing results within budget limitations. Created and maintained visual assets and merchandising content while analyzing customer behavior and store performance to support business decisions and ongoing improvements.",
    project_shopify_feature1: "Product catalog optimization with improved categorization",
    project_shopify_feature2: "Customer journey analysis and checkout optimization",
    project_shopify_feature3: "Marketing campaign integration and performance tracking",
    project_shopify_feature4: "Google Ads campaign management and ROAS optimization",
    project_shopify_feature5: "Visual content creation and merchandising",

    // WordPress Project Detail
    project_wordpress_longDesc: "Developed and maintained a company website for a UK-based business using WordPress. The project focused on improving website performance, user experience, and integrating digital marketing strategies to enhance online presence.",
    project_wordpress_challenge: "The existing website had performance issues, poor SEO structure, and outdated design. It needed a complete overhaul to better represent the brand and support marketing initiatives.",
    project_wordpress_solution: "Redesigned the website using modern WordPress practices with a focus on performance optimization, SEO best practices, and user experience. Integrated analytics and marketing tools to track performance.",
    project_wordpress_feature1: "Complete website redesign with modern UI/UX",
    project_wordpress_feature2: "SEO optimization and performance improvements",
    project_wordpress_feature3: "Marketing integration and analytics setup",

    // Frontend Project Detail
    project_frontend_longDesc: "Contributed to the development and continuous improvement of DynamicWeb's SWIFT e-commerce platform as part of an Agile product team. Worked with C#, JavaScript, .NET, and Bootstrap while collaborating with developers, designers, and product managers to improve functionality and user experience.",
    project_frontend_challenge: "Developing and maintaining an enterprise e-commerce platform required balancing new functionality with platform stability and usability. Features and improvements needed to align with existing systems while supporting a consistent user experience across the platform.",
    project_frontend_solution: "Implemented frontend components and platform improvements while resolving bugs and supporting ongoing development tasks. Participated in Agile Scrum processes including sprint planning, code reviews, and task management using Azure DevOps. Collaborated closely with cross-functional teams to contribute to product development and platform improvements.",
    project_frontend_feature1: "Frontend component development using C#, JavaScript, .NET and Bootstrap",
    project_frontend_feature2: "Bug fixing and platform functionality improvements",
    project_frontend_feature3: "Agile Scrum participation and sprint planning",
    project_frontend_feature4: "Azure DevOps workflow and code review process",
    project_frontend_feature5: "Cross-functional collaboration with developers, designers, and product managers",

    // UX Design Project Detail
    project_ux_longDesc: "Connect is a social platform designed to connect volunteers with organizations seeking help. Volunteers can browse and apply for volunteering opportunities, while organizations can post projects and recruit suitable candidates. The platform was developed as a final project at the end of an AP degree, with the UI inspiration drawn from the LinkedIn layout to create a familiar, professional networking-style experience. The project was completed over a 10-week period covering research, design, and development.",
    project_ux_challenge: "One of the main challenges was the limited timeframe combined with a steep learning curve. During the project, React was still a new technology, so part of the development phase included learning and applying it simultaneously. Another challenge was prioritization: while modern development typically follows a mobile-first approach, the focus during this project was placed more on implementing core functionality rather than full responsiveness, which resulted in limited mobile optimization in the first version.",
    project_ux_solution: "To address the time and skill constraints, the development process was structured to prioritize core features first, ensuring a working platform within the deadline. React was learned and applied iteratively during development, allowing rapid progress despite inexperience. The design approach was kept simple and inspired by LinkedIn to reduce complexity and improve usability. A second version of the platform is currently in development, focusing on improved responsiveness and overall user experience.",
    project_ux_feature1: "User research and persona development",
    project_ux_feature2: "Wireframing and interactive prototyping",
    project_ux_feature3: "Usability testing and iteration",
    project_ux_feature4: "Frontend development using React and modern web technologies",

    // Headless Project Detail
    project_headless_longDesc: "The project demonstrated how Dynamicweb’s headless capabilities can be used to separate content management from presentation, allowing content to be delivered via APIs and rendered in a modern frontend application. The goal was to showcase a flexible, API-driven architecture where content and commerce data could be consumed independently of the backend system.",
    project_headless_challenge: "The main challenge was working with a headless architecture for the first time, where frontend and backend are fully decoupled. Understanding how to efficiently consume content and commerce data through APIs. Handling server-side rendering (SSR) and static generation (SSG) in Next.js.",
    project_headless_solution: "The solution focused on building a clean Next.js frontend that communicates with Dynamicweb’s headless APIs. Using Next.js data-fetching methods (SSR/SSG/ISR) to optimize performance and content freshness. Structuring API calls to retrieve structured content from Dynamicweb’s backend",
    project_headless_feature1: "Headless architecture separating frontend and backend",
    project_headless_feature2: "Next.js-based frontend with SSR/SSG capabilities",
    project_headless_feature3: "API-driven content delivery from Dynamicweb",
  },
  hu: {
    // Navbar
    nav_projects: "Projektek",
    nav_experience: "Tapasztalat",
    nav_skills: "Skills",
    nav_contact: "Kapcsolat",
    nav_sayHello: "Üzenj nekem",

    // Hero
    hero_available: "Elérhető új projektekre",
    hero_title1: "Webfejlesztő",
    hero_title2: "& Digitális Termék",
    hero_title3: "Specialista",
    hero_description: "Szilágyi Dávid vagyok, webfejlesztő. Digitális termékek és online megoldások fejlesztésével foglalkozom, különös figyelmet fordítva a felhasználói élményre, a vásárlói útvonalak optimalizálására és a jobb online teljesítményre.",
    hero_viewProjects: "Projektek megtekintése",
    hero_getInTouch: "Keress meg",
    hero_scroll: "Görgesd",

    // Projects
    projects_badge: "Kiemelt Munkák",
    projects_title: "Projektek",
    projects_description: "E-kereskedelem, webfejlesztés, UX design és digitális termékoptimalizálás területén szerzett szakértelem bemutatása.",
    projects_shopify_title: "Shopify Webáruház",
    projects_shopify_desc: "600+ termékkel rendelkező Shopify-alapú webáruház kezelése és optimalizálása. Termékinformációk szervezése, vásárlói út és árucikk-elrendezés javítása.",
    projects_wordpress_title: "WordPress Céges Weboldal",
    projects_wordpress_desc: "Céges weboldal fejlesztése és karbantartása WordPress használatával. Weboldal szerkezet, teljesítmény és felhasználói élmény javítása digitális marketing integrációval.",
    projects_frontend_title: "Frontend Komponensek Fejlesztése",
    projects_frontend_desc: "Újrafelhasználható frontend komponensek fejlesztése C#, JavaScript, .NET és Bootstrap használatával Agile Scrum környezetben. Hozzájárulás az e-kereskedelmi platform fejlesztéséhez.",
    projects_ux_title: "React Platform Fejlesztés",
    projects_ux_desc: "Felhasználóközpontú interfész tervek és reszponzív web megoldások készítése a Multimédia Design tanulmányok részeként. Felhasználói kutatásra, prototípus készítésre és használhatósági tesztelésre fókuszálva.",
    projects_dashboard_title: "Digital concept development",
    projects_dashboard_desc: "Webáruház teljesítményének, vásárlói magatartás és KPI-ok elemzése az üzleti döntések támogatásához. Piactrendek és versenytársak figyelése.",
    projects_viewAll: "Összes projekt megtekintése GitHubon",
    projects_products: "termék",
    projects_growth: "Növekedés",
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
    skills_description: "Technikai fejlesztés, UX design és digitális marketing szakértelem, amely tanulmányokra és többéves szakmai tapasztalatra épül.",
    skills_frontend_title: "Frontend Fejlesztés",
    skills_cms_title: "CMS & E-kereskedelem",
    skills_ux_title: "UX / UI Design",
    skills_marketing_title: "Digitális Marketing",
    skills_wireframing_title: "Vázlat & Prototípus",
    skills_languages_title: "Nyelvek",
    skills_education_badge: "Tanulmányok",
    skills_education_title: "Végzettség",
    skills_edu1_degree: "Digitális Koncepció Fejlesztés",
    skills_edu1_desc: "Ezen a bachelor-kiegészítő programon bővíthettem ismereteimet és továbbfejleszthettem magam, hogy megismerjem az UX-tervezés és a koncepció kidolgozás teljes folyamatát. A program részeként egy játékfejlesztési választható tantárgyat vettem fel, ahol megtanultam, hogyan kell C# és a Blender segítségével játékokat fejleszteni a Unity-ben. Tanulmányaim utolsó szakaszát egy szakmai gyakorlat jelentette, ahol frontend-fejlesztőként hódolhattam a programozás iránti szenvedélyemnek.",
    skills_edu2_degree: "Multimédia Design",
    skills_edu2_desc: "Multimédiatervezést tanultam, különös tekintettel az UX/UI-tervezésre és a frontend-fejlesztésre, amely a felhasználói kutatástól a megvalósításig terjedő teljes folyamatot magában foglalta. Gyakorlati tapasztalatot szereztem a felhasználóközpontú felületek tervezésében, a prototípus-készítésben és a reszponzív webes megoldások fejlesztésében. A frontend-fejlesztésre specializálódtam, modern webes technológiákkal dolgozom interaktív weboldalak és alkalmazások készítésén, miközben csapatalapú projektekben is együttműködöm.",
    skills_edu3_degree: "Marketing Menedzsment",
    skills_edu3_desc: "Alapvető ismeretek az üzleti tevékenységek fejlesztése és elemzése terén, különös tekintettel a marketingstratégiákra és az üzletfejlesztésre.",

    // Contact
    contact_badge: "Let's Connect",
    contact_title: "Vedd fel velem a kapcsolatot",
    contact_description: "Nyitott vagyok új lehetőségekre. Legyen szó egy projektről vagy csak egy beszélgetésről, nyugodtan keress meg.",
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
    project_shopify_longDesc: "Fenntartható építőanyagokkal foglalkozó Shopify webáruház kezelése és optimalizálása. A projekt átfogó termékkatalógus-kezelést, vásárlói út optimalizálást és adatalapú döntéshozatalt foglalt magában az áruház teljesítményének javítása érdekében.",
    project_shopify_challenge: "A fő kihívás az 600+ tételből álló összetett termék katalógus kezelése volt a következetes adatminőség megőrzése mellett, a vásárlói út optimalizálásával együtt. Az áruháznak jobb szervezésre, jobb keresési funkcióra és hatékonyabb árubemutatási stratégiákra volt szüksége.",
    project_shopify_solution: "Rendszertani megközelítést alkalmaztam a termékmenedzsmenthez a Shopify beépített eszközeinek és egyedi megoldások kombinálásával. Elemeztem a vásárlói magatartás adatait a termék kategorizálás optimalizálása és a fizetési folyamat javítása érdekében. Integráltam az analitikai eszközöket a KPI-ok követésére és adatalapú döntések meghozatalára.",
    project_shopify_feature1: "Termék katalógus optimalizálás javított kategorizálással",
    project_shopify_feature2: "Vásárlói út elemzés és fizetési folyamat optimalizálás",
    project_shopify_feature3: "Marketing kampány integráció és teljesítmény követés",
    project_shopify_feature4: "Google Ads kampánykezelés és ROAS-optimalizálás",
    project_shopify_feature5: "Vizuális tartalomkészítés és termékbemutatás",

    // WordPress Project Detail
    project_wordpress_longDesc: "Céges weboldal fejlesztése és karbantartása egy Egyesült Királyságbeli vállalkozás számára WordPress használatával. A projekt a weboldal teljesítményének, felhasználói élményének javítására és digitális marketing stratégiák integrálására összpontosított az online jelenlét növelése érdekében.",
    project_wordpress_challenge: "A meglévő weboldal teljesítménybeli problémákkal küzdött, SEO-szempontból rosszul volt felépítve, és elavult volt a kialakítása. Teljes átalakításra volt szükség ahhoz, hogy jobban tükrözze a márkát, és támogassa a marketingkezdeményezéseket.",
    project_wordpress_solution: "Újraterveztem a weboldalt modern WordPress gyakorlatok alkalmazásával, fókuszálva a teljesítmény-optimalizálásra, SEO legjobb gyakorlatokra és felhasználói élményre. Integráltam az analitikai és marketing eszközöket a teljesítmény követésére.",
    project_wordpress_feature1: "Teljes weboldal újraterv modern UI/UX-al",
    project_wordpress_feature2: "SEO optimalizálás és teljesítmény javítások",
    project_wordpress_feature3: "Marketing integráció és analitika beállítás",

    // Frontend Project Detail
    project_frontend_longDesc: "Egy Agile csapat tagjaként hozzájárultam a DynamicWeb SWIFT e-kereskedelmi platformjának fejlesztéséhez és folyamatos tökéletesítéséhez. C#, JavaScript, .NET és Bootstrap nyelveken dolgoztam, miközben fejlesztőkkel, tervezőkkel és termékmenedzserekkel együttműködve a funkcionalitás és a felhasználói élmény javításán dolgoztam.",
    project_frontend_challenge: "A vállalati e-kereskedelmi platform fejlesztése és karbantartása során egyensúlyt kellett teremteni az új funkciók, a platform stabilitása és a használhatóság között. A funkcióknak és fejlesztéseknek illeszkedniük kellett a meglévő rendszerekhez, miközben a platform egészén át egységes felhasználói élményt kellett biztosítaniuk.",
    project_frontend_solution: "Frontend-komponenseket és platformfejlesztéseket valósítottam meg, miközben hibákat javítottam és támogattam a folyamatban lévő fejlesztési feladatokat. Részt vettem az Agile Scrum-folyamatokban, beleértve a sprinttervezést, a kódfelülvizsgálatokat és a feladatkezelést az Azure DevOps segítségével. Szorosan együttműködöttem a többfunkciós csapatokkal, hogy hozzájáruljak a termékfejlesztéshez és a platformfejlesztésekhez.",
    project_frontend_feature1: "Frontend-komponensek fejlesztése C#, JavaScript, .NET és Bootstrap használatával",
    project_frontend_feature2: "Hibajavítás és platformfunkcionalitás fejlesztése",
    project_frontend_feature3: "Részvétel az Agile Scrum-folyamatban és a sprinttervezésben",
    project_frontend_feature4: "Az Azure DevOps munkafolyamat és a kódfelülvizsgálati folyamat",
    project_frontend_feature5: "Funkciók közötti együttműködés fejlesztőkkel, tervezőkkel és termékmenedzserekkel",

    // UX Design Project Detail
    project_ux_longDesc: "A Connect egy olyan közösségi platform, amelynek célja, hogy összekapcsolja az önkénteseket a segítséget kereső szervezetekkel. Az önkéntesek böngészhetik az önkéntes lehetőségeket és jelentkezhetnek rájuk, míg a szervezetek projektekkel hirdethetnek és toborozhatnak megfelelő jelölteket. A platformot egy AP-képzés záróprojektjeként fejlesztettem ki; a felhasználói felület kialakításához a LinkedIn elrendezéséből merítettek ihletet, hogy egy ismerős, professzionális hálózati stílusú felhasználói élményt teremtsenek. A projekt 10 héten át tartott, és magában foglalta a kutatást, a tervezést és a fejlesztést.",
    project_ux_challenge: "Az egyik legnagyobb kihívást a szűkös időkeret jelentette, amelyhez egy meredek tanulási görbe is társult. A projekt során a React még új technológia volt, így a fejlesztési szakasz részét képezte a technológia elsajátítása és egyidejű alkalmazása. Egy másik kihívás a prioritások meghatározása volt: míg a modern fejlesztés általában a „mobile-first” megközelítést követi, ebben a projektben a hangsúly inkább az alapvető funkciók megvalósításán volt, nem pedig a teljes reszponzivitáson, ami azt eredményezte, hogy az első verzióban a mobil eszközökre való optimalizálás korlátozott volt.",
    project_ux_solution: "Az időbeli és szakértelmi korlátok kezelése érdekében a fejlesztési folyamatot úgy alakítottuk ki, hogy elsősorban a legfontosabb funkciókat helyezzük előtérbe, így biztosítva a határidőn belül egy működőképes platformot. A React használatát a fejlesztés során fokozatosan sajátítottuk el és alkalmaztuk, ami a tapasztalatlanság ellenére is gyors előrehaladást tett lehetővé. A tervezési megközelítést egyszerűen tartottuk, és a LinkedIn-től merítettünk ihletet a komplexitás csökkentése és a használhatóság javítása érdekében. Jelenleg a platform második verziója van fejlesztés alatt, amelynek középpontjában a jobb reszponzivitás és az általános felhasználói élmény javítása áll.",
    project_ux_feature1: "Felhasználói kutatás és persona fejlesztés",
    project_ux_feature2: "Vázlatkészítés és interaktív prototípus-készítés",
    project_ux_feature3: "Használhatósági tesztelés és iteráció",
    project_ux_feature4: "Frontend-fejlesztés React és modern webes technológiák felhasználásával",

    // Headless Project Detail
    project_headless_longDesc: "A projekt bemutatta, hogyan használhatók a Dynamicweb headless funkciói a tartalomkezelés és a megjelenítés szétválasztására, lehetővé téve a tartalom API-kon keresztül történő továbbítását és egy modern frontend-alkalmazásban történő megjelenítését. A cél egy rugalmas, API-alapú architektúra bemutatása volt, amelyben a tartalmi és kereskedelmi adatok a háttérrendszertől függetlenül is felhasználhatók.",
    project_headless_challenge: "A legnagyobb kihívást az jelentette, hogy először dolgoztam headless architektúrával, amelyben a frontend és a backend teljesen egymástól független. Meg kellett értenem, hogyan lehet hatékonyan lekérni a tartalmi és kereskedelmi adatokat API-kon keresztül. Emellett a Next.js-ben kellett kezelni a szerveroldali renderelést (SSR) és a statikus generálást (SSG).",
    project_headless_solution: "A megoldás egy tiszta Next.js frontend létrehozására összpontosított, amely kommunikál a Dynamicweb headless API-jaival. A Next.js adatletöltési módszereinek (SSR/SSG/ISR) felhasználásával optimalizáltuk a teljesítményt és a tartalom frissességét. Az API-hívások strukturálásával strukturált tartalmat töltöttünk le a Dynamicweb háttérrendszeréből.",
    project_headless_feature1: "A frontend és a backend elválasztását biztosító headless architektúra",
    project_headless_feature2: "Next.js-alapú frontend SSR/SSG funkciókkal",
    project_headless_feature3: "API-vezérelt tartalomszolgáltatás a Dynamicweb segítségével",
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
