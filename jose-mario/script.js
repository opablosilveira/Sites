// JOSÉ MÁRIO: INTERAÇÕES E COMPORTAMENTO DA LANDING PAGE

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
  });

  // 3. Menu Mobile
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('menu-open');
      if (isOpen) {
        navMenu.classList.remove('menu-open');
        navMenu.style.display = 'none';
      } else {
        navMenu.classList.add('menu-open');
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(10, 10, 14, 0.98)';
        navMenu.style.padding = '1.8rem';
        navMenu.style.borderBottom = '1px solid rgba(0, 102, 255, 0.35)';
        navMenu.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.8)';
      }
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('menu-open');
          navMenu.style.display = 'none';
        }
      });
    });
  }
});
