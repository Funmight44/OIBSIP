
// MOBILE NAVIGATION
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation' : 'Close navigation'
    );

    navLinks.classList.toggle('open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navLinks.classList.remove('open');
    });
  });
}


// ACTIVE NAVIGATION LINKS
const sections = [...document.querySelectorAll('main section[id]')];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${entry.target.id}`
      );
    });
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach((section) => sectionObserver.observe(section));


// REVEAL ANIMATIONS
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});


// DYNAMIC COPYRIGHT YEAR
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// WEB3FORMS CONTACT FORM
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const submitButton = contactForm.querySelector('#submit-btn');
    const formNote = document.querySelector('#form-note');

    const formData = new FormData(contactForm);

    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';

    formNote.textContent = 'Sending your message...';

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        formNote.textContent =
          'Thank you! Your message has been sent successfully.';

        formNote.style.color = '#16a34a';

        contactForm.reset();

      } else {
        formNote.textContent =
          result.message || 'Something went wrong. Please try again.';

        formNote.style.color = '#dc2626';
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);

      formNote.textContent =
        'Unable to send your message. Please check your internet connection.';

      formNote.style.color = '#dc2626';

    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message <span>↗</span>';
    }
  });
}
