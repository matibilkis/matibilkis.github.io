// ================================
// UX Enhancements
// Micro-interactions and animations
// ================================

// ===== Scroll-triggered Animations =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);
    
    // Observe all cards, sections, and timeline items
    const elementsToAnimate = document.querySelectorAll(
        '.card, .timeline-item, .content-section, .video-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-element');
        fadeInObserver.observe(el);
    });
}

// ===== Planet Tooltips =====
function setupPlanetTooltips() {
    const planets = document.querySelectorAll('.planet');
    
    planets.forEach(planet => {
        planet.setAttribute('title', 'Click to explore');
        planet.setAttribute('role', 'button');
        planet.setAttribute('tabindex', '0');
        
        // Keyboard support
        planet.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                planet.click();
            }
        });
    });
}

// ===== Scroll Indicator =====
function setupScrollIndicator() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = `
        <div class="scroll-indicator__icon">↓</div>
        <span class="scroll-indicator__text">Scroll to explore</span>
    `;
    indicator.setAttribute('aria-label', 'Scroll down to see more content');
    
    hero.appendChild(indicator);
    
    // Hide on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled > 100) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = 'auto';
        }
        lastScroll = scrolled;
    });
}

// ===== Animated Counters =====
function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

function setupAnimatedCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.dataset.count);
                entry.target.classList.add('counted');
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== Parallax Stars =====
function setupParallaxStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    let lastScrollY = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        lastScrollY = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const offset = lastScrollY * 0.3;
                starsContainer.style.transform = `translateY(${offset}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== Button Press Effect =====
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .planet');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ===== Skip to Content Link =====
function setupSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ID to main content
    const mainContent = document.querySelector('main, .hero');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
}

// ===== Card Hover Effects =====
function setupCardEffects() {
    const cards = document.querySelectorAll('.card, .video-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ===== Constellation Entanglement Effect =====
function setupConstellationEffect() {
    const planets = document.querySelectorAll('.planet');
    
    planets.forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            // Make other planets pulse subtly
            planets.forEach(otherPlanet => {
                if (otherPlanet !== planet) {
                    otherPlanet.style.animation = 'quantum-pulse 0.6s ease';
                    setTimeout(() => {
                        otherPlanet.style.animation = '';
                    }, 600);
                }
            });
        });
    });
}

// ===== Loading State =====
function setupLoadingState() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ===== Copy Email Functionality =====
function setupCopyEmail() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        const email = link.href.replace('mailto:', '');
        
        link.addEventListener('click', (e) => {
            // Still allow default mailto to work
            // But also show a copy confirmation
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('Email copied to clipboard!');
                });
            }
        });
    });
}

// ===== Toast Notification =====
function showToast(message, duration = 2000) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('toast--visible'), 100);
    
    setTimeout(() => {
        toast.classList.remove('toast--visible');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===== Performance: Reduce animations on mobile =====
function optimizeForMobile() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isLowPowerMode = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || isLowPowerMode) {
        // Reduce star count
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index % 2 !== 0) star.remove();
        });
    }
}

// ===== Initialize All UX Enhancements =====
function initUXEnhancements() {
    setupLoadingState();
    setupSkipLink();
    setupScrollAnimations();
    setupPlanetTooltips();
    setupScrollIndicator();
    setupAnimatedCounters();
    setupParallaxStars();
    setupButtonEffects();
    setupCardEffects();
    setupConstellationEffect();
    setupCopyEmail();
    optimizeForMobile();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUXEnhancements);
} else {
    initUXEnhancements();
}

