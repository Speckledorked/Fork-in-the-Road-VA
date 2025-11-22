// Fork in the Road VA - Analytics Configuration

// Google Analytics 4 Configuration
// To enable analytics:
// 1. Create a Google Analytics 4 property at https://analytics.google.com
// 2. Get your Measurement ID (format: G-XXXXXXXXXX)
// 3. Replace 'YOUR_GA4_MEASUREMENT_ID' below with your actual ID
// 4. Uncomment the code below

/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_GA4_MEASUREMENT_ID', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
});
*/

// Custom Event Tracking
// Track important user interactions

document.addEventListener('DOMContentLoaded', function() {

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const buttonHref = this.getAttribute('href') || 'no-href';

            // Log to console (replace with gtag when GA is enabled)
            console.log('CTA Click:', {
                text: buttonText,
                destination: buttonHref,
                page: window.location.pathname
            });

            // Uncomment when GA is enabled:
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'button_text': buttonText,
                    'destination': buttonHref,
                    'page_location': window.location.pathname
                });
            }
            */
        });
    });

    // Track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');

            console.log('Phone Click:', phoneNumber);

            // Uncomment when GA is enabled:
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_phone', {
                    'phone_number': phoneNumber,
                    'page_location': window.location.pathname
                });
            }
            */
        });
    });

    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            const email = this.getAttribute('href').replace('mailto:', '');

            console.log('Email Click:', email);

            // Uncomment when GA is enabled:
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_email', {
                    'email_address': email,
                    'page_location': window.location.pathname
                });
            }
            */
        });
    });

    // Track form submissions
    const contactForm = document.querySelector('form.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const eventType = document.getElementById('event-type')?.value || 'unknown';
            const guestCount = document.getElementById('guest-count')?.value || 0;

            console.log('Form Submission:', {
                event_type: eventType,
                guest_count: guestCount
            });

            // Uncomment when GA is enabled:
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_type': eventType,
                    'guest_count': guestCount,
                    'page_location': window.location.pathname
                });
            }
            */
        });
    }

    // Track menu item views (if on menu page)
    if (window.location.pathname.includes('menu')) {
        console.log('Menu Page View');

        // Uncomment when GA is enabled:
        /*
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': 'Menu',
                'page_location': window.location.pathname
            });
        }
        */
    }
});

// Alternative: Plausible Analytics (Privacy-focused, GDPR-compliant)
// To use Plausible instead:
// 1. Sign up at https://plausible.io
// 2. Add your domain
// 3. Uncomment the script below and replace YOUR_DOMAIN

/*
(function() {
    var script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = 'YOUR_DOMAIN.com';
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
})();
*/
