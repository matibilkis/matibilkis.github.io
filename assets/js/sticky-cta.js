/**
 * Sticky CTA Bar
 * Shows CTA bar after user scrolls past hero section
 */

document.addEventListener('DOMContentLoaded', () => {
    const stickyCta = document.getElementById('stickyCta');
    
    if (!stickyCta) return;
    
    // Show sticky CTA after scrolling 80% of viewport height
    const scrollThreshold = window.innerHeight * 0.8;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateStickyCtaVisibility() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > scrollThreshold) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function onScroll() {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateStickyCtaVisibility();
                ticking = false;
            });
            
            ticking = true;
        }
    }
    
    // Initial check
    updateStickyCtaVisibility();
    
    // Listen to scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
});

