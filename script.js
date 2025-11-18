(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WJDDB8VZ');






// Smooth scrolling for navigation links (but not language switcher)
document.querySelectorAll('a[href^="#"]:not([data-language])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip empty anchors
        if (href === '#' || href.length <= 1) {
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behaviour: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced scroll effect for header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(26, 54, 93, 0.98), rgba(45, 74, 113, 0.98))';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1a365d, #2d4a71)';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Language switcher functionality
document.querySelectorAll('[data-language]').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-language');
        if (window.i18n) {
            window.i18n.changeLanguage(lang);
        }
    });
});

// Mobile menu toggle functionality
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link (except dropdown toggles)
    document.querySelectorAll('.mobile-nav-menu a:not(.mobile-dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function () {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!mobileToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// Mobile dropdown functionality
const mobileDropdown = document.querySelector('.mobile-dropdown');
const dropdownToggle = document.querySelector('.mobile-dropdown-toggle');

if (dropdownToggle && mobileDropdown) {
    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        mobileDropdown.classList.toggle('active');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and elements for animation
document.querySelectorAll('.product-card, .solution-row, .benefit-item, .system-link').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Track rail product engagement
document.addEventListener('click', function (e) {
    const target = e.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Track product page access with specific product types
    const productMapping = {
        'connect.html': 'connect_system',
        'link.html': 'link_system',
        'interlocking.html': 'interlocking_rrap',
        'baseplate.html': 'baseplate_system',
        'titan.html': 'titan_heavy_duty',
        'antitrespass.html': 'anti_trespass_panels',
        'walkway.html': 'walkway_panels',
        'edgebeams.html': 'edge_beams',
        'accessories.html': 'accessories_spares'
    };

    // Check if it's a product page
    const productKey = Object.keys(productMapping).find(key => href.includes(key));
    if (productKey) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'engagement',
            'engagement_type': 'product_page_access',
            'business_area': 'rail',
            'product_type': productMapping[productKey],
            'click_text': target.textContent.trim(),
            'page_location': window.location.href,
            'source_section': target.closest('section')?.className || 'unknown'
        });
    }

    // Track general products page access
    if (href.includes('products.html')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'engagement',
            'engagement_type': 'products_overview_access',
            'business_area': 'rail',
            'click_text': target.textContent.trim(),
            'page_location': window.location.href
        });
    }

    // Track about page access
    if (href.includes('about.html')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'engagement',
            'engagement_type': 'about_access',
            'business_area': 'rail',
            'click_text': target.textContent.trim(),
            'page_location': window.location.href
        });
    }

    // Track contact requests
    if (href.includes('contact.html')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'engagement',
            'engagement_type': 'contact_request',
            'business_area': 'rail',
            'click_text': target.textContent.trim(),
            'page_location': window.location.href
        });
    }
});




// GTM consent management
function enableGTMAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'cookie_consent_granted',
        'consent_level': 'analytics'
    });
}

function disableGTMAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'cookie_consent_denied',
        'consent_level': 'analytics_denied'
    });
}

// Cookie Consent Management
const COOKIE_CONSENT_KEY = 'rosehill_cookie_consent';
const CONSENT_EXPIRY = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

function getCookieConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
        const data = JSON.parse(consent);
        if (new Date().getTime() - data.timestamp < CONSENT_EXPIRY) {
            return data;
        }
        localStorage.removeItem(COOKIE_CONSENT_KEY);
    }
    return null;
}

function setCookieConsent(analytics) {
    const consent = {
        analytics: analytics,
        timestamp: new Date().getTime()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

function showCookieBanner() {
    document.getElementById('cookie-banner').classList.add('show');
}

function hideCookieBanner() {
    document.getElementById('cookie-banner').classList.remove('show');
}

function initializeConsent() {
    const consent = getCookieConsent();
    if (consent) {
        if (consent.analytics) {
            enableGTMAnalytics();
        }
    } else {
        // Show banner after a short delay
        setTimeout(showCookieBanner, 1500);
    }
}

// Event listeners
document.getElementById('cookie-accept-all').addEventListener('click', function () {
    setCookieConsent(true);
    enableGTMAnalytics();
    hideCookieBanner();
});

document.getElementById('cookie-essential-only').addEventListener('click', function () {
    setCookieConsent(false);
    disableGTMAnalytics();
    hideCookieBanner();
});

document.getElementById('cookie-settings-link').addEventListener('click', function (e) {
    e.preventDefault();
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'flex';

    // Set current analytics preference
    const consent = getCookieConsent();
    const analyticsToggle = document.getElementById('analytics-toggle');
    if (consent && analyticsToggle) {
        analyticsToggle.checked = consent.analytics;
    }
});

document.getElementById('modal-essential-only').addEventListener('click', function () {
    setCookieConsent(false);
    disableGTMAnalytics();
    hideCookieBanner();
    document.getElementById('cookie-settings-modal').style.display = 'none';
});

document.getElementById('modal-save-settings').addEventListener('click', function () {
    const analyticsConsent = document.getElementById('analytics-toggle').checked;
    setCookieConsent(analyticsConsent);

    if (analyticsConsent) {
        enableGTMAnalytics();
    } else {
        disableGTMAnalytics();
    }

    hideCookieBanner();
    document.getElementById('cookie-settings-modal').style.display = 'none';
});

// Close modal when clicking outside
document.getElementById('cookie-settings-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Footer cookie settings link
document.getElementById('footer-cookie-settings').addEventListener('click', function (e) {
    e.preventDefault();
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'flex';

    // Set current analytics preference
    const consent = getCookieConsent();
    const analyticsToggle = document.getElementById('analytics-toggle');
    if (consent && analyticsToggle) {
        analyticsToggle.checked = consent.analytics;
    }
});

// Initialize consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeConsent();
});







{
    "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://rail.rosehill.group/#organization",
                "name": "Indovia",
                "url": "https://rail.rosehill.group/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://rail.rosehill.group/rosehill_rail_logo.png"
                },
                "image": "https://rail.rosehill.group/rosehill_rail_social_sharing.jpg",
                "description": "Leading UK manufacturer of innovative rail crossing solutions, specializing in sustainable rubber technology for modern railway infrastructure.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Beech Road",
                    "addressLocality": "Sowerby Bridge",
                    "addressRegion": "West Yorkshire",
                    "postalCode": "HX6 2JT",
                    "addressCountry": "GB"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 53.7067,
                    "longitude": -1.9436
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+44-1422-839-610",
                        "contactType": "sales",
                        "areaServed": ["GB", "EU", "WORLDWIDE"],
                        "availableLanguage": ["English"]
                    },
                    {
                        "@type": "ContactPoint",
                        "email": "info@rail.rosehill.group",
                        "contactType": "customer service",
                        "areaServed": ["GB", "EU", "WORLDWIDE"],
                        "availableLanguage": ["English"]
                    }
                ],
                "parentOrganization": {
                    "@type": "Organization",
                    "name": "Rosehill Polymers",
                    "url": "https://rosehill.group/"
                },
                "foundingDate": "1990",
                "numberOfEmployees": "50-100",
                "industry": "Railway Infrastructure Manufacturing",
                "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 52.3026,
                        "longitude": -1.9419
                    },
                    "geoRadius": "20000000"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Rail Crossing Solutions",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "name": "LINK Level Crossing System",
                            "url": "https://rail.rosehill.group/link.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "Baseplate Solutions",
                            "url": "https://rail.rosehill.group/baseplate.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "Edge Beam Systems",
                            "url": "https://rail.rosehill.group/edgebeams.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "Anti-Trespass Barriers",
                            "url": "https://rail.rosehill.group/antitrespass.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "Walkway Panels",
                            "url": "https://rail.rosehill.group/walkway.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "TITAN Heavy-Duty Crossing",
                            "url": "https://rail.rosehill.group/titan.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "Interlocking Systems",
                            "url": "https://rail.rosehill.group/interlocking.html"
                        },
                        {
                            "@type": "Offer",
                            "name": "CONNECT Modular Solutions",
                            "url": "https://rail.rosehill.group/connect.html"
                        }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://rail.rosehill.group/#website",
                "url": "https://rail.rosehill.group/",
                "name": "Indovia",
                "description": "Leading UK manufacturer of innovative rail crossing solutions",
                "publisher": {
                    "@id": "https://rail.rosehill.group/#organization"
                },
                "inLanguage": "en-GB"
            }
        ]
}
