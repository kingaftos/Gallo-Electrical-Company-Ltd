/* ==========================================================
   GALLO ELECTRICAL COMPANY LTD - SCRIPT
   ==========================================================
   This file is split into small, labelled sections. Each one
   handles a single job on the page. You do not need to edit
   this file to add project photos or change text - that is
   all done in index.html.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------------------
       1. MOBILE MENU (hamburger button)
       Shows/hides the navigation menu on small screens.
       ------------------------------------------------------ */
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function () {
            var isOpen = mainNav.classList.toggle('is-open');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close the mobile menu after tapping a link, so the
        // page doesn't stay covered by the menu.
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('is-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ------------------------------------------------------
       2. CAPABILITIES DROPDOWN MENU
       Opens/closes when the "Capabilities" button is clicked.
       Works by clicking (not just hovering) so it is easy to
       use on both touch screens and with a mouse.
       ------------------------------------------------------ */
    var dropdownToggle = document.getElementById('capabilities-toggle');
    var dropdownMenu = document.getElementById('capabilities-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            var isOpen = dropdownMenu.classList.toggle('is-open');
            dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close the dropdown if someone clicks anywhere else on the page
        document.addEventListener('click', function (event) {
            if (!dropdownMenu.contains(event.target) && event.target !== dropdownToggle) {
                dropdownMenu.classList.remove('is-open');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close the dropdown after choosing one of its links
        dropdownMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                dropdownMenu.classList.remove('is-open');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ------------------------------------------------------
       3. BACK TO TOP BUTTON
       Appears after the visitor scrolls down the page, and
       scrolls smoothly back to the top when clicked.
       ------------------------------------------------------ */
    var backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ------------------------------------------------------
       4. CONTACT FORM -> SENDS MESSAGE VIA WHATSAPP
       There is no website server behind this form, so instead
       of "submitting" it, we open WhatsApp with the visitor's
       details already typed into a message for them to send.
       ------------------------------------------------------ */
    var contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var name = document.getElementById('form-name').value.trim();
            var phone = document.getElementById('form-phone').value.trim();
            var message = document.getElementById('form-message').value.trim();

            var whatsappText =
                'Hello Gallo Electrical,%0A' +
                'Name: ' + encodeURIComponent(name) + '%0A' +
                'Phone: ' + encodeURIComponent(phone) + '%0A' +
                'Project details: ' + encodeURIComponent(message);

            var whatsappNumber = '2348037272895';
            window.open('https://wa.me/' + whatsappNumber + '?text=' + whatsappText, '_blank');
        });
    }

    /* ------------------------------------------------------
       5. SMOOTH SCROLL OFFSET FOR THE FIXED HEADER
       Because the header stays fixed at the top of the page,
       jumping straight to a section (like #capabilities) would
       normally hide its heading behind the header. This nudges
       the scroll position down slightly so the heading is
       always visible after clicking a menu link.
       ------------------------------------------------------ */
    var headerHeight = document.querySelector('.site-header').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                var targetEl = document.querySelector(targetId);
                if (targetEl) {
                    event.preventDefault();
                    var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 1;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

});
