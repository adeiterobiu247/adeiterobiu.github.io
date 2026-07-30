const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close the menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
const elements = 
document.querySelectorAll(".gaffer, .werey, .skills-section, .projects, .services, .contact-section");

const observer = new
IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
elements.forEach((el) =>
observer.observe(el));

  emailjs.init("tjYvdR1x6hR4rlknc");
   document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_q3ogd0b', 'template_g8ud69z', this)
      .then(() => {
        alert('Message sent!');
        this.reset();
      })
      .catch((err) => {
        alert('Failed to send. Try again.');
        console.error(err);
      });
  });
