/* ==========================================================================
   SCRIPT.JS - Personal Portfolio JavaScript
   Author: Anshu Repala
   Description: Handles mobile menu toggle, active navbar links on scroll,
   and contact form interaction. Simple and easy for beginners to read!
   ========================================================================== */

// Wait for the DOM to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. UPDATE FOOTER YEAR AUTOMATICALLY
    // ----------------------------------------------------------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 2. MOBILE MENU TOGGLE
    // ----------------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu open/close when hamburger button is clicked
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon between bars and X
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Close mobile menu automatically when any navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 3. HIGHLIGHT ACTIVE NAV LINK ON SCROLL
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for header height
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------------------------
    // 4. CONTACT FORM HANDLING
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Prevent the default browser form submit refresh
            e.preventDefault();

            // Display success message
            if (formAlert) {
                formAlert.textContent = 'Thank you! Your message has been sent successfully. (Note: This is a frontend demo)';
                formAlert.className = 'form-alert success';
                
                // Automatically hide the message after 5 seconds
                setTimeout(() => {
                    formAlert.className = 'form-alert hidden';
                }, 5000);
            }

            // Clear the form fields
            contactForm.reset();
        });
    }

});
