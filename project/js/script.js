document.addEventListener('DOMContentLoaded', () => {
  const floatingBtn = document.getElementById('floatingBtn');

  if (floatingBtn) {
    floatingBtn.addEventListener('click', () => {
      alert('Redirecionando para a loja de aplicativos... 📱');
    });
  }

  const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-download-nav, .btn-doc, .btn-cta-primary');

  allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (!button.closest('a') && button.id !== 'floatingBtn') {
        const buttonText = button.textContent.trim();

        if (buttonText.includes('Baixar') || buttonText.includes('Download')) {
          alert('Redirecionando para a loja de aplicativos... 📱');
        } else if (buttonText.includes('Saiba Mais')) {
          document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
        } else if (buttonText.includes('Documentação')) {
          alert('Abrindo documentação do projeto... 📄');
        }
      }
    });
  });

  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Só intercepta rolagem suave para âncoras locais
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .tech-card, .team-member');

  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});
