const header = document.querySelector<HTMLElement>('[data-header]');
const button = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const navigation = document.querySelector<HTMLElement>('[data-nav]');
const menuIcon = document.querySelector<HTMLElement>('[data-menu-icon]');
const closeIcon = document.querySelector<HTMLElement>('[data-close-icon]');
const cursorGlow = document.querySelector<HTMLElement>('[data-cursor-glow]');
const scrollProgress = document.querySelector<HTMLElement>('[data-scroll-progress]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const closeMenu = () => {
  document.body.classList.remove('menu-open');
  button?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  menuIcon?.removeAttribute('hidden');
  closeIcon?.setAttribute('hidden', '');
};

button?.addEventListener('click', () => {
  const willOpen = !navigation?.classList.contains('is-open');
  navigation?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
  button.setAttribute('aria-expanded', String(willOpen));
  menuIcon?.toggleAttribute('hidden', willOpen);
  closeIcon?.toggleAttribute('hidden', !willOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 840) closeMenu(); });

/* Header state + reading progress */
let scrollTicking = false;
const updateScrollState = () => {
  const scrollY = window.scrollY;
  header?.classList.toggle('is-scrolled', scrollY > 10);

  if (scrollProgress) {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max((scrollY / maxScroll) * 100, 0), 100);
    scrollProgress.style.setProperty('--scroll-progress', `${progress}%`);
  }

  scrollTicking = false;
};

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollState);
    scrollTicking = true;
  }
}, { passive: true });
updateScrollState();

/* Hero must never wait for an observer to become visible. */
document.querySelectorAll<HTMLElement>('.hero .reveal').forEach((element) => element.classList.add('is-visible'));

/* Rich scroll reveals with automatic stagger. */
const motionSelector = [
  '.section-heading',
  '.service-card',
  '.project-card',
  '.why-item',
  '.process-step',
  '.tech-group',
  '.experience-card',
  '.about-image',
  '.about-copy',
  '.contact-box',
  '.case-header',
  '.case-visual',
  '.case-details > *',
].join(',');

const motionTargets = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));

motionTargets.forEach((element, index) => {
  element.classList.add('motion-reveal');

  const parent = element.parentElement;
  const siblingIndex = parent
    ? Array.from(parent.children).filter((child) => child.matches?.(motionSelector)).indexOf(element)
    : index;

  element.style.setProperty('--motion-index', String(Math.max(siblingIndex, 0)));

  if (element.classList.contains('about-image')) element.dataset.motionDirection = 'left';
  else if (element.classList.contains('about-copy')) element.dataset.motionDirection = 'right';
  else if (element.classList.contains('project-card')) element.dataset.motionDirection = siblingIndex % 2 === 0 ? 'left' : 'right';
  else element.dataset.motionDirection = 'up';
});

if (prefersReducedMotion) {
  motionTargets.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  motionTargets.forEach((element) => revealObserver.observe(element));

  /* Keep compatibility with any existing reveal class outside the hero. */
  document.querySelectorAll<HTMLElement>('.reveal:not(.hero .reveal)').forEach((element) => {
    if (!element.classList.contains('motion-reveal')) {
      element.classList.add('motion-reveal');
      revealObserver.observe(element);
    }
  });
}

/* The process line draws itself when its section enters the viewport. */
const processGrid = document.querySelector<HTMLElement>('.process-grid');
if (processGrid) {
  if (prefersReducedMotion) processGrid.classList.add('is-visible');
  else {
    const processObserver = new IntersectionObserver(([entry], observer) => {
      if (!entry?.isIntersecting) return;
      processGrid.classList.add('is-visible');
      observer.disconnect();
    }, { threshold: 0.3 });
    processObserver.observe(processGrid);
  }
}

/* Active navigation follows the section currently on screen. */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]'));
const sectionMap = navLinks
  .map((link) => {
    const href = link.getAttribute('href');
    if (!href) return null;
    const section = document.querySelector<HTMLElement>(href);
    return section ? { link, section } : null;
  })
  .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } => item !== null);

if (sectionMap.length > 0) {
  const setActiveLink = (activeLink: HTMLAnchorElement) => {
    navLinks.forEach((link) => link.classList.toggle('is-active', link === activeLink));
  };

  const navObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;
    const match = sectionMap.find(({ section }) => section === visibleEntry.target);
    if (match) setActiveLink(match.link);
  }, { rootMargin: '-25% 0px -58% 0px', threshold: [0.01, 0.12, 0.35] });

  sectionMap.forEach(({ section }) => navObserver.observe(section));
  setActiveLink(sectionMap[0].link);
}

if (!prefersReducedMotion && hasFinePointer) {
  /* Soft light follows the mouse, giving the whole page depth. */
  if (cursorGlow) {
    let glowFrame = 0;
    let pointerX = window.innerWidth * 0.5;
    let pointerY = window.innerHeight * 0.3;

    const paintGlow = () => {
      cursorGlow.style.setProperty('--cursor-x', `${pointerX}px`);
      cursorGlow.style.setProperty('--cursor-y', `${pointerY}px`);
      glowFrame = 0;
    };

    window.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!glowFrame) glowFrame = window.requestAnimationFrame(paintGlow);
    }, { passive: true });
  }

  /* 3D tilt and local light on interactive cards. */
  const tiltCards = document.querySelectorAll<HTMLElement>('.service-card, .project-card, .process-step, .tech-group');
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;

      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      card.style.setProperty('--pointer-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--pointer-y', `${(y * 100).toFixed(1)}%`);
      card.classList.add('tilt-active');
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('tilt-active');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
    });
  });

  /* Buttons subtly lean toward the pointer. */
  document.querySelectorAll<HTMLElement>('.button, .text-link, .project-link').forEach((element) => {
    element.classList.add('magnetic');
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      element.style.setProperty('--magnetic-x', `${(x * 0.1).toFixed(2)}px`);
      element.style.setProperty('--magnetic-y', `${(y * 0.12).toFixed(2)}px`);
    });
    element.addEventListener('pointerleave', () => {
      element.style.setProperty('--magnetic-x', '0px');
      element.style.setProperty('--magnetic-y', '0px');
    });
  });

  /* Hero portrait uses a restrained parallax instead of a heavy animation library. */
  const hero = document.querySelector<HTMLElement>('.hero');
  const heroVisual = document.querySelector<HTMLElement>('.hero-visual');
  if (hero && heroVisual) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width) - 0.5;
      const normalizedY = ((event.clientY - rect.top) / rect.height) - 0.5;
      heroVisual.style.transform = `translate3d(${(normalizedX * 10).toFixed(2)}px, ${(normalizedY * 8).toFixed(2)}px, 0) rotateX(${(-normalizedY * 2.2).toFixed(2)}deg) rotateY(${(normalizedX * 2.6).toFixed(2)}deg)`;
    });

    hero.addEventListener('pointerleave', () => {
      heroVisual.style.transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
    });
  }
}
