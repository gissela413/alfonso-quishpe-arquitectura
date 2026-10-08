document.addEventListener('DOMContentLoaded', function() {
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Aquí normalmente enviarías el formulario a un servidor
            // Para este ejemplo, solo mostraremos una alerta
            if (nombre && email && mensaje) {
                alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos pronto a ${email}.`);
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
    
    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar observador a secciones y elementos
    const animatedElements = document.querySelectorAll('.section, .proyecto-card, .servicio-item, .contacto-info, form');
    
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Menú activo basado en scroll
    const sections = document.querySelectorAll('section[id], header[id]');
    const menuLinks = document.querySelectorAll('header nav a');
    
    const menuObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remover clase active de todos los enlaces
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Añadir clase active al enlace correspondiente
                const correspondingLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        menuObserver.observe(section);
    });
    
    // Efecto parallax sutil en el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});