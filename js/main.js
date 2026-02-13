/**
 * VALENTINA REYES - PSICÓLOGA CLÍNICA
 * Main JavaScript File
 *
 * Handles navigation, animations, and interactive elements
 */

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// MOBILE HAMBURGER MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const reveals = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation with delay
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

reveals.forEach(el => observer.observe(el));

// ============================================
// STATS ANIMATION ON SCROLL
// ============================================
const statItems = document.querySelectorAll('.stat-item');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

statItems.forEach(stat => statsObserver.observe(stat));

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitButtonText = document.getElementById('submitButtonText');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Change button text to loading state
        const originalText = submitButtonText.textContent;
        submitButtonText.textContent = 'Enviando...';
        contactForm.querySelector('button').disabled = true;

        // Hide previous messages
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';

        try {
            // Get form data as JSON
            const formData = new FormData(contactForm);
            const data = {
                nombre: formData.get('nombre'),
                apellido: formData.get('apellido'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                mensaje: formData.get('mensaje')
            };

            // Send to Vercel serverless function
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                // Show success message
                formMessage.textContent = '¡Mensaje enviado! Te contactaremos pronto.';
                formMessage.classList.add('success');
                formMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(result.error || 'Error al enviar el mensaje');
            }
        } catch (error) {
            // Show error message
            formMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';

            console.error('Form submission error:', error);
        } finally {
            // Restore button state
            submitButtonText.textContent = originalText;
            contactForm.querySelector('button').disabled = false;
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of the element to scroll to
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Initialize all animations and observers
 */
function initializeAnimations() {
    console.log('Animations initialized');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAnimations);
