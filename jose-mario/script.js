// JOSÉ MÁRIO: INTERAÇÕES E ANIMAÇÕES CINEMATOGRÁFICAS

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Fecha outros itens
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        // Alterna o selecionado
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 2. Header Efeito de Rolagem
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.style.background = 'rgba(8, 8, 10, 0.96)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
      } else {
        header.style.background = 'rgba(8, 8, 10, 0.88)';
        header.style.boxShadow = 'none';
      }
    }
  }, { passive: true });

  // 3. Menu Mobile
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('menu-open');
      mobileToggle.classList.toggle('active', isOpen);
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('menu-open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 4. Scroll Reveal com Escalonamento (Staggered Cards Entrance)
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const parent = el.parentElement;
          const siblings = parent ? Array.from(parent.querySelectorAll('.reveal-item')) : [];
          const index = siblings.indexOf(el);
          const delay = index > 0 ? (index % 4) * 110 : 0;

          setTimeout(() => {
            el.classList.add('is-revealed');
          }, delay);

          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 5. Contadores Numéricos Animados no Scroll
  const counterElements = document.querySelectorAll('[data-count-target]');
  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1500;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Curva easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easeProgress * target);

            el.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.25
    });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // 6. Efeito 3D Tilt Interativo nos Cards
  const tiltCards = document.querySelectorAll('.tilt-card');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice && tiltCards.length > 0) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 7. Sticky Footer CTA no Mobile ao Rolar
  const stickyBar = document.getElementById('mobileStickyBar');
  if (stickyBar) {
    window.addEventListener('scroll', () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 400) {
          stickyBar.classList.add('visible');
          document.body.classList.add('has-sticky-bar');
        } else {
          stickyBar.classList.remove('visible');
          document.body.classList.remove('has-sticky-bar');
        }
      }
    }, { passive: true });
  }
});
