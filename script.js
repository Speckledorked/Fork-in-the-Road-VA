// Fork in the Road VA - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button if it doesn't exist
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    // Create hamburger button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle mobile menu');
    menuToggle.innerHTML = '☰';

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Insert hamburger button before nav links
    navContainer.appendChild(menuToggle);

    // Toggle menu function
    function toggleMenu() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');

        // Change hamburger to X when open
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    }

    // Click handlers
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Enhanced Form Validation (for contact form)
if (document.querySelector('form.contact-form')) {
    const form = document.querySelector('form.contact-form');

    // Add custom validation messages and real-time feedback
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        // Validate on blur (when user leaves field)
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Clear error on input
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = this.parentElement.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        const fieldName = field.name;

        // Remove existing error
        field.classList.remove('error');
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();

        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            showError(field, 'This field is required');
            return false;
        }

        // Email validation
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(field, 'Please enter a valid email address');
                return false;
            }
        }

        // Phone validation
        if (fieldType === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
                showError(field, 'Please enter a valid 10-digit phone number');
                return false;
            }
        }

        // Number validation for guest count
        if (fieldName === 'guest-count' && value) {
            const guests = parseInt(value);
            if (guests < 1) {
                showError(field, 'Guest count must be at least 1');
                return false;
            }
            if (guests > 1000) {
                showError(field, 'For events over 1000 guests, please call us directly');
                return false;
            }
        }

        // Date validation - must be future date
        if (fieldType === 'date' && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                showError(field, 'Event date must be in the future');
                return false;
            }
        }

        return true;
    }

    function showError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#d32f2f';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '0.25rem';
        field.parentElement.appendChild(errorDiv);
    }

    // Enhanced form submission
    form.addEventListener('submit', function(e) {
        // Validate all fields before submission
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Add loading state to submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Note: Formspree will handle the actual submission
        // This just provides better UX feedback

        // If using Formspree, it will redirect or show confirmation
        // We'll restore the button after a delay as fallback
        setTimeout(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 3000);
    });

    // Add CSS for error states
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #d32f2f !important;
            background-color: #ffebee;
        }
        .form-group input:focus.error,
        .form-group select:focus.error,
        .form-group textarea:focus.error {
            border-color: #c62828 !important;
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
