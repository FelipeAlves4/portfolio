// Element references
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const body = document.body;
const header = document.querySelector('header');
const headerContainer = document.querySelector('.header-container');
const backToTop = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');

// Menu Toggle
const closeMenu = () => {
    if (!menuToggle || !mainNav) return;

    menuToggle.classList.remove('active');
    mainNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
};

const toggleMenu = () => {
    if (!menuToggle || !mainNav) return;

    const isOpen = mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('menu-open', isOpen);
};

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (event) => {
        if (mainNav.classList.contains('active') &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Smooth scroll + close menu
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            event.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = targetSection.offsetTop - 88;
                window.scrollTo({
                    top: offset < 0 ? 0 : offset,
                    behavior: 'smooth'
                });
            }
        }

        closeMenu();
    });
});

// Intersection animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document
    .querySelectorAll('.card, .bio-content, .service-card, .process-step, .skill-category, .contato-container, .home-panel')
    .forEach((element) => observer.observe(element));

// Scroll helpers
const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 180;
    let currentId = '#home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentId = `#${section.id}`;
        }
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === currentId;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
};

const handleScrollEffects = () => {
    const hasScrolled = window.scrollY > 30;
    header?.classList.toggle('scrolled', hasScrolled);
    headerContainer?.classList.toggle('scrolled', hasScrolled);

    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    }

    updateActiveLink();
};

window.addEventListener('scroll', handleScrollEffects);
window.addEventListener('load', () => {
    updateActiveLink();
    handleScrollEffects();
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
