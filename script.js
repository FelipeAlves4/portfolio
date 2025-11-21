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
const toggleMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.classList.toggle('active');
    const isOpen = mainNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    body.classList.toggle('menu-open', isOpen);
};

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') &&
            !mainNav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
}

// Smooth scroll + close menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offset < 0 ? 0 : offset,
                    behavior: 'smooth'
                });
            }
        }

        if (mainNav?.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Intersection animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .bio-content, .progress-item').forEach((el) => observer.observe(el));

// Scroll helpers
const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 160;
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

// Efeito de digitação no título
const title = document.querySelector('.bio-title');
if (title) {
    const text = title.textContent.trim();
    title.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    };

    setTimeout(typeWriter, 600);
}

// Animação das barras de progresso
const skillBars = document.querySelectorAll('.skill-progress');
const observerSkills = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.dataset.progress || 0;
            entry.target.style.width = `${progress}%`;
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

skillBars.forEach(bar => {
    bar.style.width = '0';
    observerSkills.observe(bar);
});