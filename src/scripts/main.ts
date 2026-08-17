const header = document.querySelector<HTMLElement>('[data-header]');
const button = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const navigation = document.querySelector<HTMLElement>('[data-nav]');
const menuIcon = document.querySelector<HTMLElement>('[data-menu-icon]');
const closeIcon = document.querySelector<HTMLElement>('[data-close-icon]');

const closeMenu = () => { document.body.classList.remove('menu-open'); button?.setAttribute('aria-expanded', 'false'); navigation?.classList.remove('is-open'); menuIcon?.removeAttribute('hidden'); closeIcon?.setAttribute('hidden', ''); };
button?.addEventListener('click', () => { const willOpen = !navigation?.classList.contains('is-open'); navigation?.classList.toggle('is-open', willOpen); document.body.classList.toggle('menu-open', willOpen); button.setAttribute('aria-expanded', String(willOpen)); menuIcon?.toggleAttribute('hidden', willOpen); closeIcon?.toggleAttribute('hidden', !willOpen); });
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 840) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 10), { passive: true });

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => revealObserver.observe(element));
