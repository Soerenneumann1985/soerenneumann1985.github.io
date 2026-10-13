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

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

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

// ==================== Gallery Lightbox ====================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

const galleryData = [
    { src: 'assets/Screenshot 2026-08-17 095822.jpg', caption: 'Wälder & Landschaft' },
    { src: 'assets/Screenshot 2026-08-17 095928.jpg', caption: 'Weitwinkel Perspektive' },
    { src: 'assets/Screenshot 2026-08-17 100027.jpg', caption: 'Naturaufnahmen' },
    { src: 'assets/Screenshot 2026-08-17 095425.jpg', caption: 'Drohnen Perspektive' },
    { src: 'assets/Screenshot 2026-08-17 095537.jpg', caption: 'Luftbilder' },
    { src: 'assets/Screenshot 2026-08-17 095655.jpg', caption: 'Landschaften' },
    { src: 'assets/Screenshot 2026-08-17 095758.jpg', caption: 'Panorama-Aufnahmen' }
];

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index < galleryData.length) {
            const data = galleryData[index];
            lightboxImg.src = data.src;
            lightboxCaption.textContent = data.caption;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
});

// ==================== Contact Form ====================
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (!(name && email && message)) {
        e.preventDefault();
        alert('Bitte füllen Sie alle Felder aus.');
    }
    // Ansonsten normal absenden -> öffnet das E-Mail-Programm (mailto)
});
