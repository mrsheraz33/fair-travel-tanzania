// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Back button functionality
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }
    
    // Form submission handling (Contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;
            
            if (name && email && message) {
                alert('Thank you! We will get back to you within 24 hours.');
                this.reset();
            } else {
                alert('Please fill all fields.');
            }
        });
    }
    
    // Challenge form submission
    const challengeForm = document.getElementById('challenge-form');
    if (challengeForm) {
        challengeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your offer has been submitted! We will review and contact you within 48 hours.');
            this.reset();
        });
    }
    
    // Newsletter subscription
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeEmail = document.getElementById('subscribe-email');
    
    if (subscribeBtn && subscribeEmail) {
        subscribeBtn.addEventListener('click', function() {
            if (subscribeEmail.value && subscribeEmail.value.includes('@')) {
                alert('Subscribed successfully!');
                subscribeEmail.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});