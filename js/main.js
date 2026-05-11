// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }
    
    // Donation amount selection
    const donationAmounts = document.querySelectorAll('.donation-amount');
    const customAmount = document.getElementById('custom-amount');
    
    donationAmounts.forEach(btn => {
        btn.addEventListener('click', function() {
            donationAmounts.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
            donationAmounts.forEach(b => b.classList.add('bg-gray-100', 'text-gray-800'));
            this.classList.remove('bg-gray-100', 'text-gray-800');
            this.classList.add('bg-blue-600', 'text-white');
            if (customAmount) customAmount.value = '';
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });
    }
    
    // Newsletter
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
});