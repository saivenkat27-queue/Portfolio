    // Theme toggle
    document.querySelector('.toggle-theme').onclick = () => {
      document.body.classList.toggle('dark');
    };

    // Mobile menu toggle
    function toggleMenu() {
      document.getElementById('navbar').classList.toggle('show');
    }

    // Contact form validation
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
      }
      return true;
    }

    // ScrollReveal animations
    ScrollReveal().reveal('section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.project-card', {
      interval: 200
    });

    ScrollReveal().reveal('.skills > div, .certifications > div', {
      interval: 150,
      origin: 'left'
    });