// ==================== Übersetzungen (DE/EN) ====================
const translations = {
    'meta.title': { de: 'Sören Neumann | Cloud Engineer (angehend)', en: 'Sören Neumann | Aspiring Cloud Engineer' },
    'meta.description': { de: 'Persönliche Homepage von Sören Neumann: angehender Cloud Engineer bei MSIT, zuvor Feinwerkmechaniker & Techniker Maschinenbau. Projekte, Zertifikate und Kontakt.', en: 'Personal website of Sören Neumann: aspiring cloud engineer at MSIT, previously precision mechanic & mechanical engineering technician. Projects, certifications and contact.' },

    'nav.home': { de: 'Start', en: 'Home' },
    'nav.about': { de: 'Über mich', en: 'About' },
    'nav.skills': { de: 'Skills', en: 'Skills' },
    'nav.certifications': { de: 'Zertifikate', en: 'Certifications' },
    'nav.projects': { de: 'Projekte', en: 'Projects' },
    'nav.contact': { de: 'Kontakt', en: 'Contact' },
    'nav.personal': { de: 'Persönliches', en: 'Personal' },

    'hero.eyebrow': { de: 'Angehender Cloud Engineer @ MSIT', en: 'Aspiring Cloud Engineer @ MSIT' },
    'hero.subtitle': { de: 'Vom Feinwerkmechaniker zum Cloud Engineer', en: 'From Precision Mechanic to Cloud Engineer' },
    'hero.line1': { de: 'Präzision aus der Werkstatt.', en: 'Precision from the workshop.' },
    'hero.line2': { de: 'Gebaut für die Cloud.', en: 'Built for the cloud.' },
    'hero.intro': {
        de: 'Über 15 Jahre Erfahrung aus Präzisionshandwerk und Luftfahrttechnik treffen auf moderne Softwareentwicklung. Aktuell im Quereinsteiger-Studium zum Software-Ingenieur mit Schwerpunkt Cloud Engineering — und in Vorbereitung auf die Zertifizierung AWS Certified Cloud Practitioner.',
        en: '15+ years of experience in precision engineering and aerospace manufacturing meet modern software development. Currently retraining as a software engineer with a focus on cloud engineering — and preparing for the AWS Certified Cloud Practitioner certification.'
    },
    'hero.ctaProjects': { de: 'Projekte ansehen', en: 'View projects' },
    'hero.ctaCv': { de: 'Lebenslauf (PDF)', en: 'Resume (PDF)' },
    'hero.ctaContact': { de: 'Kontakt aufnehmen', en: 'Get in touch' },

    'about.heading': { de: 'Über mich', en: 'About me' },
    'about.p1': { de: 'Mein Name ist Sören Neumann, geboren 1985, aufgewachsen und wohnhaft in Nordenham, Niedersachsen.', en: 'My name is Sören Neumann, born in 1985, raised and living in Nordenham, Lower Saxony, Germany.' },
    'about.p2': {
        de: 'Mein beruflicher Weg begann in der Feinwerkmechanik: Ausbildung zum Feinwerkmechaniker, danach Qualifizierung zum Strukturmechaniker Luftfahrt mit Einsatz in der Flugzeugmontage, gefolgt von einer Weiterbildung zum Staatlich geprüften Techniker der Fachrichtung Maschinentechnik. In den letzten Jahren habe ich als CNC-Maschinenbediener im 5-Achs-Fräsen gearbeitet.',
        en: 'My career began in precision mechanics: an apprenticeship as a precision mechanic, followed by qualification as an aerospace structural mechanic working in aircraft assembly, then further training as a certified mechanical engineering technician. Most recently I worked as a CNC machine operator in 5-axis milling.'
    },
    'about.p3': {
        de: 'Seit Mai 2026 gehe ich den nächsten Schritt: ein Quereinsteiger-Studium zum Software-Ingenieur mit Schwerpunkt Python-Entwicklung und dem klaren Ziel Cloud Engineering. Parallel bereite ich mich auf die Zertifizierung <strong>AWS Certified Cloud Practitioner</strong> vor.',
        en: 'Since May 2026 I have been taking the next step: retraining as a software engineer with a focus on Python development and a clear goal of cloud engineering. In parallel, I am preparing for the <strong>AWS Certified Cloud Practitioner</strong> certification.'
    },
    'about.p4': {
        de: 'Was mich antreibt: die gleiche Präzision und Sorgfalt, die ich jahrelang an CNC-Maschinen und in der Luftfahrtfertigung gelernt habe, jetzt in sauberen, gut getesteten Code und stabile Cloud-Infrastruktur zu übersetzen.',
        en: 'What drives me: translating the same precision and care I spent years honing on CNC machines and in aerospace manufacturing into clean, well-tested code and stable cloud infrastructure.'
    },

    'skills.heading': { de: '🚀 Tech Stack', en: '🚀 Tech Stack' },
    'skills.stack': { de: 'Python • Git & GitHub • pytest • HTML • CSS • JavaScript • AWS (in Vorbereitung) • Linux', en: 'Python • Git & GitHub • pytest • HTML • CSS • JavaScript • AWS (in progress) • Linux' },
    'skills.cloudHeading': { de: 'Cloud & Software', en: 'Cloud & Software' },
    'skills.cloud1': { de: 'Cloud Engineering (aktuell in Ausbildung, Schwerpunkt AWS)', en: 'Cloud Engineering (currently training, AWS focus)' },
    'skills.cloud2': { de: 'Python-Entwicklung (OOP, Exception Handling, Dateisystem-Operationen)', en: 'Python development (OOP, exception handling, file system operations)' },
    'skills.cloud3': { de: 'Testing mit pytest', en: 'Testing with pytest' },
    'skills.cloud4': { de: 'Versionierung mit Git & GitHub, kollaborative Workflows', en: 'Version control with Git & GitHub, collaborative workflows' },
    'skills.cloud5': { de: 'Datenanalyse & Visualisierung (pandas, seaborn, matplotlib)', en: 'Data analysis & visualization (pandas, seaborn, matplotlib)' },
    'skills.craftHeading': { de: 'Handwerkliche Wurzeln', en: 'Hands-on Engineering Roots' },
    'skills.craft1': { de: 'Feinwerkmechaniker (Facharbeiterbrief)', en: 'Precision Mechanic (certified journeyman)' },
    'skills.craft2': { de: 'Strukturmechaniker Luftfahrt — Flugzeugmontage', en: 'Aerospace Structural Mechanic — aircraft assembly' },
    'skills.craft3': { de: 'Staatlich geprüfter Techniker, Maschinentechnik', en: 'State-certified Technician, Mechanical Engineering' },
    'skills.craft4': { de: 'CNC-Fräsen/-Drehen, CAD/CAM (Autodesk Inventor)', en: 'CNC milling/turning, CAD/CAM (Autodesk Inventor)' },

    'certs.heading': { de: 'Zertifikate', en: 'Certifications' },
    'certs.sub': { de: 'Abgeschlossen und in Vorbereitung.', en: 'Completed and in progress.' },
    'certs.statusDone': { de: 'Abgeschlossen', en: 'Completed' },
    'certs.statusProgress': { de: 'In Vorbereitung', en: 'In progress' },
    'certs.msitTitle': { de: 'Python Innovation Hackathon', en: 'Python Innovation Hackathon' },
    'certs.msitDesc': {
        de: 'Masterschool Institute of Technology — Python-Entwicklung mit API- & KI-Integration (27. Juli 2026).',
        en: 'Masterschool Institute of Technology — Python development with API & AI integration (July 27, 2026).'
    },
    'certs.viewCert': { de: 'Zertifikat ansehen →', en: 'View certificate →' },
    'certs.techTitle': { de: 'Staatlich geprüfter Techniker', en: 'State-certified Technician' },
    'certs.techDesc': { de: 'Fachrichtung Maschinentechnik — Technikerschule Bremen.', en: 'Mechanical Engineering — Technikerschule Bremen.' },
    'certs.awsDesc': { de: 'Aktuell in Vorbereitung — Einstiegszertifizierung von Amazon Web Services.', en: 'Currently in progress — entry-level certification from Amazon Web Services.' },

    'projects.heading': { de: 'Projekte', en: 'Projects' },
    'projects.sub': { de: 'Eine Auswahl an Arbeiten aus Studium und Selbstlernen.', en: 'A selection of work from my studies and self-learning.' },
    'projects.p1Title': { de: 'Animals Web Generator', en: 'Animals Web Generator' },
    'projects.p1Desc': {
        de: 'Python-Skript, das Tierdaten über eine externe API abruft und daraus automatisch eine statische HTML-Seite generiert. Nutzt requests und python-dotenv für die API-Key-Verwaltung.',
        en: 'Python script that fetches animal data from an external API and automatically generates a static HTML page from it. Uses requests and python-dotenv for API key management.'
    },
    'projects.p2Title': { de: 'Penguin Analysis', en: 'Penguin Analysis' },
    'projects.p2Desc': {
        de: 'Datenanalyse und Visualisierung des Palmer-Penguins-Datensets: Kennzahlen pro Pinguinart, Streudiagramme und Balkendiagramme mit pandas, seaborn und matplotlib. Inklusive Tests mit pytest.',
        en: 'Data analysis and visualization of the Palmer Penguins dataset: per-species statistics, scatter plots and bar charts using pandas, seaborn and matplotlib. Includes tests with pytest.'
    },
    'projects.p3Title': { de: 'Diese Homepage auf AWS', en: 'This Homepage on AWS' },
    'projects.p3Desc': {
        de: 'Diese Website selbst ist mein erstes Cloud-Projekt: statisches Hosting über Amazon S3, aufgebaut mit HTML, CSS und JavaScript.',
        en: 'This website itself is my first cloud project: static hosting via Amazon S3, built with HTML, CSS and JavaScript.'
    },
    'projects.p4Desc': { de: 'Datenbank-Projekt — Code ist fertig, Upload auf GitHub folgt in Kürze.', en: 'Database project — code is finished, GitHub upload coming soon.' },
    'projects.viewCode': { de: 'Code ansehen →', en: 'View code →' },
    'projects.inProgress': { de: 'In Arbeit', en: 'In progress' },
    'projects.comingSoon': { de: 'Demnächst auf GitHub', en: 'Coming soon on GitHub' },

    'contact.heading': { de: 'Schreib mir eine E-Mail', en: 'Send me an email' },
    'contact.name': { de: 'Name', en: 'Name' },
    'contact.namePlaceholder': { de: 'Dein Name', en: 'Your name' },
    'contact.email': { de: 'E-Mail', en: 'Email' },
    'contact.emailPlaceholder': { de: 'deine@email.de', en: 'you@email.com' },
    'contact.submit': { de: 'Absenden', en: 'Send' },
    'contact.altHtml': { de: 'oder direkt an <a href="mailto:soerenneumann85@gmx.de">soerenneumann85@gmx.de</a>', en: 'or directly to <a href="mailto:soerenneumann85@gmx.de">soerenneumann85@gmx.de</a>' },

    'personal.divider': { de: 'Persönliches', en: 'Personal' },

    'drone.heading': { de: 'Aus der Vogelperspektive', en: 'From a Bird\'s-Eye View' },
    'drone.sub': { de: 'Aufnahmen meiner DJI Neo Drohne', en: 'Footage from my DJI Neo drone' },
    'drone.cta': { de: 'Zur Drohnen-Seite →', en: 'Visit the drone page →' },

    'insta.heading': { de: 'Besuche mich!', en: 'Come say hi!' },
    'insta.sub': { de: 'Folge mir auf Instagram und bleibe immer auf dem Laufenden!', en: 'Follow me on Instagram to stay up to date!' },
    'insta.cta': { de: 'Mein Instagram Account', en: 'My Instagram account' },

    'gallery.heading': { de: 'Momente', en: 'Moments' },

    'footer.drone': { de: 'Drohne', en: 'Drone' },
    'footer.imprint': { de: 'Impressum', en: 'Legal notice' },
    'footer.privacy': { de: 'Datenschutz', en: 'Privacy' },

    'fw.badge': { de: 'Neu · Beta kostenlos', en: 'New · free beta' },
    'fw.slogan': { de: 'Wabe für Wabe schuldenfrei.', en: 'Debt-free, cell by cell.' },
    'fw.text': {
        de: 'Meine eigene Finanz-App: Sie zeigt, wofür das Geld draufgeht, wie viel man insgesamt besitzt – und an welchem Tag der letzte Kredit abbezahlt ist. Ohne Bank-Login, ohne Tracking, im Browser und als App auf dem Handy.',
        en: 'My own personal finance app: it shows where your money goes, what you are worth in total – and the day your last loan will be paid off. No bank login, no tracking, in the browser and as an app on your phone.'
    },
    'fw.cta': { de: 'Finanzwabe entdecken →', en: 'Discover Finanzwabe →' },
    'fw.ctaBeta': { de: 'Beta-Tester werden', en: 'Become a beta tester' },
    'projects.fwStatus': { de: 'Beta', en: 'Beta' },
    'projects.fwDesc': {
        de: 'Vollständige Finanz-App als Progressive Web App: Buchungen, Budgets, Nettovermögen und Kredit-Prognose „schuldenfrei am …“. Mit Login, Excel-Import, eigenen Diagrammen und über 150 automatischen Tests.',
        en: 'Full personal finance app as a Progressive Web App: transactions, budgets, net worth and a "debt-free by …" loan forecast. With login, Excel import, custom charts and more than 150 automated tests.'
    },
    'projects.fwCta': { de: 'Zur Produktseite →', en: 'View product page →' }
};

const LANG_KEY = 'preferredLang';

function getStoredLang() {
    try {
        return localStorage.getItem(LANG_KEY);
    } catch (e) {
        return null;
    }
}

function storeLang(lang) {
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
        // ignore (private browsing etc.)
    }
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const entry = translations[el.getAttribute('data-i18n')];
        if (!entry) return;
        const text = entry[lang] || entry.de;
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const entry = translations[el.getAttribute('data-i18n-placeholder')];
        if (entry) el.setAttribute('placeholder', entry[lang] || entry.de);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const entry = translations[el.getAttribute('data-i18n-value')];
        if (entry) el.setAttribute('value', entry[lang] || entry.de);
    });

    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        const entry = translations[el.getAttribute('data-i18n-content')];
        if (entry) el.setAttribute('content', entry[lang] || entry.de);
    });

    const titleEntry = translations['meta.title'];
    if (titleEntry) document.title = titleEntry[lang] || titleEntry.de;

    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.textContent = lang === 'de' ? 'EN' : 'DE';

    storeLang(lang);
}

(function initLanguage() {
    const browserLang = (navigator.language || 'de').toLowerCase().startsWith('en') ? 'en' : 'de';
    const lang = getStoredLang() || browserLang;
    applyLanguage(lang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = document.documentElement.lang === 'en' ? 'en' : 'de';
            applyLanguage(current === 'de' ? 'en' : 'de');
        });
    }
})();

// ==================== Mobile Navigation ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ==================== Aktiver Menüpunkt beim Scrollen ====================
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = [...navLinks]
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

if (sections.length) {
    const visibleRatios = new Map();

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            visibleRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let current = null;
        let best = 0;
        visibleRatios.forEach((ratio, section) => {
            if (ratio > best) {
                best = ratio;
                current = section;
            }
        });

        if (current) {
            const id = current.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(section => sectionObserver.observe(section));
}

// ==================== Parallax-Effekt fürs Drohnenvideo ====================
const heroMedia = document.querySelector('.video-hero-media');
const heroSection = document.querySelector('.video-hero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nur als Ersatz, falls GSAP nicht geladen wurde – sonst übernimmt ScrollTrigger (siehe unten)
const hasGsap = !!(window.gsap && window.ScrollTrigger);

if (heroMedia && heroSection && !prefersReducedMotion && !hasGsap) {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const rect = heroSection.getBoundingClientRect();
                const offset = rect.top * 0.35; // Parallax-Faktor
                heroMedia.style.transform = `translateY(${offset}px) scale(1.15)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Auf schmalen Geräten / bei langsamer Verbindung nur das Vorschaubild zeigen (Datenvolumen sparen)
const saveData = navigator.connection && navigator.connection.saveData;
if (heroMedia && (window.innerWidth < 600 || saveData)) {
    heroMedia.removeAttribute('autoplay');
    heroMedia.pause();
}

// ==================== Hero: animiertes Cloud-Netzwerk ====================
// Punkte (= Server/Dienste) treiben langsam umher. Liegen zwei nah beieinander,
// wird eine Linie gezeichnet. Ab und zu wandert ein "Datenpaket" über eine Verbindung.
(function initHeroNetwork() {
    const canvas = document.getElementById('heroNetwork');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.parentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const LINK_DISTANCE = 150;   // ab welchem Abstand (px) Punkte verbunden werden
    let nodes = [];
    let packets = [];
    let width = 0;
    let height = 0;
    let running = true;
    const mouse = { x: null, y: null };

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = hero.clientWidth;
        height = hero.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Anzahl der Punkte passt sich der Fläche an (Handy = weniger)
        const count = Math.round(Math.min(90, Math.max(28, (width * height) / 11000)));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 1.2,
            hub: Math.random() < 0.12   // einige größere "Knotenpunkte"
        }));
        packets = [];
    }

    function spawnPacket() {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const neighbours = nodes.filter(b => b !== a && Math.hypot(a.x - b.x, a.y - b.y) < LINK_DISTANCE);
        if (!neighbours.length) return;
        const b = neighbours[Math.floor(Math.random() * neighbours.length)];
        packets.push({ from: a, to: b, t: 0, speed: 0.012 + Math.random() * 0.01 });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Verbindungen
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i];
                const b = nodes[j];
                const dist = Math.hypot(a.x - b.x, a.y - b.y);
                if (dist < LINK_DISTANCE) {
                    const alpha = (1 - dist / LINK_DISTANCE) * 0.45;
                    ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // Punkte
        nodes.forEach(n => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.hub ? n.r + 1.8 : n.r, 0, Math.PI * 2);
            ctx.fillStyle = n.hub ? 'rgba(167, 139, 250, 0.95)' : 'rgba(147, 197, 253, 0.85)';
            ctx.shadowColor = n.hub ? '#a78bfa' : '#60a5fa';
            ctx.shadowBlur = n.hub ? 14 : 6;
            ctx.fill();
        });
        ctx.shadowBlur = 0;

        // Datenpakete
        packets.forEach(p => {
            const x = p.from.x + (p.to.x - p.from.x) * p.t;
            const y = p.from.y + (p.to.y - p.from.y) * p.t;
            ctx.beginPath();
            ctx.arc(x, y, 2.4, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#60a5fa';
            ctx.shadowBlur = 16;
            ctx.fill();
        });
        ctx.shadowBlur = 0;
    }

    function update() {
        nodes.forEach(n => {
            // Maus zieht Punkte leicht an
            if (mouse.x !== null) {
                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 180 && dist > 1) {
                    n.vx += (dx / dist) * 0.015;
                    n.vy += (dy / dist) * 0.015;
                }
            }
            // Geschwindigkeit begrenzen
            const speed = Math.hypot(n.vx, n.vy);
            if (speed > 0.8) {
                n.vx *= 0.8 / speed;
                n.vy *= 0.8 / speed;
            }
            n.x += n.vx;
            n.y += n.vy;
            // An den Rändern abprallen
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
        });

        if (Math.random() < 0.04 && packets.length < 8) spawnPacket();
        packets.forEach(p => { p.t += p.speed; });
        packets = packets.filter(p => p.t < 1);
    }

    function loop() {
        if (!running) return;
        update();
        draw();
        requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion) {
        draw();   // nur ein ruhiges Standbild
        return;
    }

    hero.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Animation pausieren, wenn der Hero nicht sichtbar ist (spart Akku/CPU)
    new IntersectionObserver(([entry]) => {
        const wasRunning = running;
        running = entry.isIntersecting;
        if (running && !wasRunning) loop();
    }).observe(hero);

    loop();
})();

// ==================== Lenis: weiches Scrollen ====================
// Lenis fängt das Mausrad ab und gleitet sanft zur Zielposition.
// GSAP steuert den Takt (ticker), damit Lenis und ScrollTrigger exakt synchron laufen.
window.siteLenis = null;
(function initSmoothScroll() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.Lenis || reduceMotion) return;

    const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),   // "expo out": schnell los, weich aus
        smoothWheel: true
    });
    window.siteLenis = lenis;

    if (hasGsap) {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(time => lenis.raf(time * 1000));   // GSAP rechnet in Sekunden, Lenis in ms
        gsap.ticker.lagSmoothing(0);
    } else {
        const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
    }

    // Menü- und Button-Links (#about, #projects …) weich anspringen – minus Höhe der Navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const navbar = document.querySelector('.navbar');
            const offset = (navbar ? navbar.offsetHeight : 0) + 16;
            lenis.scrollTo(target, { offset: -offset });
            history.pushState(null, '', id);
        });
    });
})();

// ==================== Futuristische Scroll-Effekte ====================
(function initScrollEffects() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1) Scroll-Fortschrittsbalken oben
    const bar = document.getElementById('scrollProgress');
    if (bar) {
        let ticking = false;
        const updateBar = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            bar.style.transform = `scaleX(${progress})`;
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateBar);
                ticking = true;
            }
        });
        updateBar();
    }

    // 2) Lichtkegel auf den Karten folgt der Maus
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    });

    // Ab hier: Effekte beim Hineinscrollen
    if (reduceMotion) return;
    if (!hasGsap && !('IntersectionObserver' in window)) return;

    // Große Blöcke bekommen die Klasse "reveal", Karten zusätzlich eine Scan-Linie
    const blocks = document.querySelectorAll('.container > .card, .video-hero, .section-divider, .tech-marquee');
    const ITEM_SELECTOR = '.project-card, .skills-list li, .gallery-item';
    blocks.forEach(block => {
        block.classList.add('reveal');
        if (block.classList.contains('card')) {
            const scan = document.createElement('div');
            scan.className = 'scanline';
            scan.setAttribute('aria-hidden', 'true');
            block.appendChild(scan);
        }
    });

    // Überschrift "entschlüsselt" sich wie in einem Hacker-Film
    const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&/<>';
    function decode(el) {
        const finalText = el.textContent;
        const chars = Array.from(finalText);   // Array.from, damit Emojis heil bleiben
        let frame = 0;
        let lastSet = null;
        const totalFrames = 24;

        const timer = setInterval(() => {
            // Wurde zwischendurch die Sprache gewechselt? Dann abbrechen.
            if (lastSet !== null && el.textContent !== lastSet) {
                clearInterval(timer);
                return;
            }
            frame++;
            const revealed = Math.floor((frame / totalFrames) * chars.length);
            lastSet = chars.map((ch, i) => {
                if (i < revealed || ch === ' ' || /[^\w]/.test(ch)) return ch;
                return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }).join('');
            el.textContent = lastSet;

            if (frame >= totalFrames) {
                el.textContent = finalText;
                clearInterval(timer);
            }
        }, 30);
    }

    // ---------- Variante A: GSAP + ScrollTrigger (Standard) ----------
    if (hasGsap) {
        gsap.registerPlugin(ScrollTrigger);

        blocks.forEach(block => {
            const items = block.querySelectorAll(ITEM_SELECTOR);
            const scan = block.querySelector('.scanline');
            const heading = block.querySelector('.section-heading h3');
            const animated = [block, ...items];

            // Während GSAP animiert, CSS-Übergänge abschalten (sonst "ziehen" beide am selben Wert)
            animated.forEach(el => el.classList.add('gsap-animating'));

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: block,
                    start: 'top 88%',       // los, wenn die Oberkante 88 % tief im Bild ist
                    once: true,             // jeder Block animiert nur einmal
                    onEnter: () => { if (heading) decode(heading); }
                },
                onComplete: () => {
                    // Inline-Styles entfernen, damit Hover-Effekte aus dem CSS wieder greifen
                    gsap.set(animated, { clearProps: 'transform,opacity,filter' });
                    animated.forEach(el => el.classList.remove('gsap-animating'));
                }
            });

            tl.from(block, { y: 90, opacity: 0, scale: 0.96, filter: 'blur(8px)', duration: 1.2, ease: 'expo.out' });
            if (scan) {
                tl.set(scan, { top: '0%', opacity: 1 }, 0.15)
                  .to(scan, { top: '100%', opacity: 0, duration: 1.3, ease: 'power2.out' }, 0.15);
            }
            if (items.length) {
                tl.from(items, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 0.25);
            }
        });

        // Hero: Text und Netzwerk wandern beim Wegscrollen mit unterschiedlichem Tempo (Tiefenwirkung)
        const hero = document.querySelector('.hero-main');
        if (hero) {
            const heroScroll = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
            gsap.to('.hero-content', { yPercent: -30, opacity: 0.15, ease: 'none', scrollTrigger: heroScroll });
            gsap.to('#heroNetwork', { yPercent: 18, ease: 'none', scrollTrigger: { ...heroScroll } });
        }

        // Drohnenvideo: Parallax, butterweich an die Scrollposition gekoppelt
        const media = document.querySelector('.video-hero-media');
        const videoSection = document.querySelector('.video-hero');
        if (media && videoSection) {
            gsap.fromTo(media,
                { yPercent: -12, scale: 1.2 },
                { yPercent: 12, scale: 1.2, ease: 'none',
                  scrollTrigger: { trigger: videoSection, start: 'top bottom', end: 'bottom top', scrub: true } });
        }

        // Bilder können später nachladen und die Seitenhöhe ändern -> Positionen neu berechnen
        window.addEventListener('load', () => ScrollTrigger.refresh());
        return;
    }

    // ---------- Variante B: Ersatz ohne GSAP (IntersectionObserver + CSS) ----------
    document.documentElement.classList.add('js-reveal');
    blocks.forEach(block => {
        block.querySelectorAll(ITEM_SELECTOR).forEach((item, i) => {
            item.classList.add('reveal-item');
            item.style.setProperty('--delay', `${0.15 + i * 0.08}s`);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const block = entry.target;
            block.classList.add('is-visible');
            const heading = block.querySelector('.section-heading h3');
            if (heading) decode(heading);
            observer.unobserve(block);   // jeder Block animiert nur einmal
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    blocks.forEach(block => observer.observe(block));
})();

// ==================== 3D-Tilt-Effekt für die Galerie ====================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -18;
        const rotateY = ((x / rect.width) - 0.5) * 18;
        item.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(700px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ==================== Lightbox: Galeriebilder in groß anzeigen ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        if (window.siteLenis) window.siteLenis.stop();   // Seite dahinter nicht weiterscrollen
    });
});

function closeLightbox(){
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    if (window.siteLenis) window.siteLenis.start();
}
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
