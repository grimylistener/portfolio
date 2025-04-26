// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission (basic alert for demo)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For demo, show an alert. In production, send to a backend or email service.
    alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);

    // Clear form
    this.reset();
});