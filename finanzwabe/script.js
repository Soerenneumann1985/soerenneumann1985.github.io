// ==================== Einstellungen ====================
// Sobald die App online ist, hier die Adresse eintragen, z. B.
// const APP_URL = "https://app.finanzwabe.de";
// Solange sie leer ist, führen die Buttons zum Abschnitt "Beta-Tester werden".
const APP_URL = "";

// ==================== App-Links ====================
document.querySelectorAll("[data-app-link]").forEach((link) => {
    if (APP_URL) {
        link.href = APP_URL.replace(/\/$/, "") + link.dataset.appLink;
    } else if (link.hasAttribute("data-hide-without-app")) {
        link.hidden = true;
    }
});

// ==================== E-Mail-Adresse kopieren ====================
// Ohne eingerichtetes Mailprogramm tut ein mailto-Link nichts. Darum steht die Adresse sichtbar da.
// Jeder Knopf "copy-mail" kopiert die Adresse (".mail-address") aus demselben Absatz.
document.querySelectorAll(".copy-mail").forEach((copyButton) => {
    const mailAddress = copyButton.parentElement.querySelector(".mail-address");
    if (!mailAddress) return;
    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(mailAddress.textContent.trim());
            copyButton.textContent = "Kopiert ✓";
        } catch (error) {
            // Kein Zugriff auf die Zwischenablage: Adresse markieren, dann geht Strg+C.
            const range = document.createRange();
            range.selectNodeContents(mailAddress);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            copyButton.textContent = "Markiert – Strg+C";
        }
    });
});

// ==================== Mobile Navigation ====================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ==================== Sanftes Einblenden beim Scrollen ====================
const reveal = document.querySelectorAll(".feature-row, .feature-card, .price-card, .steps li");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveal.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
