// ================================
// Three-Body Orbital System
// Enhanced planet interactions
// ================================

class OrbitalSystem {
    constructor() {
        this.constellation = document.getElementById('constellation');
        this.svg = this.constellation?.querySelector('.constellation-lines');
        this.planets = document.querySelectorAll('.planet');
        this.orbits = document.querySelectorAll('.planet-orbit');
        this.isLowPowerMode = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isMobile = window.innerWidth < 768;
        
        if (!this.constellation) return;
        
        this.init();
    }
    
    init() {
        // Optimize for performance
        if (this.isMobile || this.isLowPowerMode) {
            this.constellation.classList.add('performance-mode');
        }
        
        // Setup planet interactions
        this.setupPlanetInteractions();
        
        // Draw gravitational bonds (optional - can be toggled)
        if (!this.isMobile) {
            this.drawGravitationalBonds();
            
            // Update bonds every 100ms
            setInterval(() => this.drawGravitationalBonds(), 100);
        }
        
        // Setup keyboard navigation
        this.setupKeyboardNav();
        
        // Add performance observer
        this.observePerformance();
    }
    
    setupPlanetInteractions() {
        this.planets.forEach((planet, index) => {
            // Enhanced hover effect
            planet.addEventListener('mouseenter', (e) => {
                this.onPlanetHover(planet, index);
            });
            
            planet.addEventListener('mouseleave', (e) => {
                this.onPlanetLeave(planet, index);
            });
            
            // Click effect
            planet.addEventListener('click', (e) => {
                this.onPlanetClick(planet, e);
            });
            
            // Touch support
            planet.addEventListener('touchstart', (e) => {
                this.onPlanetHover(planet, index);
            }, { passive: true });
        });
    }
    
    onPlanetHover(planet, index) {
        // Make other planets pulse
        this.planets.forEach((otherPlanet, otherIndex) => {
            if (otherIndex !== index) {
                otherPlanet.style.animation = 'none';
                setTimeout(() => {
                    otherPlanet.style.animation = '';
                }, 10);
                
                // Add subtle pulse
                otherPlanet.classList.add('planet--influenced');
                setTimeout(() => {
                    otherPlanet.classList.remove('planet--influenced');
                }, 600);
            }
        });
        
        // Brighten constellation center
        if (this.constellation) {
            this.constellation.classList.add('constellation--active');
        }
    }
    
    onPlanetLeave(planet, index) {
        if (this.constellation) {
            this.constellation.classList.remove('constellation--active');
        }
    }
    
    onPlanetClick(planet, event) {
        // Add ripple effect on click
        const ripple = document.createElement('div');
        ripple.className = 'planet-ripple';
        
        const rect = planet.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        planet.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    drawGravitationalBonds() {
        if (!this.svg || this.isLowPowerMode) return;
        
        // Clear previous lines
        this.svg.innerHTML = '';
        
        // Get planet positions
        const positions = [];
        this.planets.forEach(planet => {
            const rect = planet.getBoundingClientRect();
            const constellationRect = this.constellation.getBoundingClientRect();
            
            positions.push({
                x: rect.left + rect.width / 2 - constellationRect.left,
                y: rect.top + rect.height / 2 - constellationRect.top
            });
        });
        
        // Draw lines between planets (gravitational bonds)
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', positions[i].x);
                line.setAttribute('y1', positions[i].y);
                line.setAttribute('x2', positions[j].x);
                line.setAttribute('y2', positions[j].y);
                line.setAttribute('stroke', 'rgba(255, 255, 255, 0.05)');
                line.setAttribute('stroke-width', '1');
                line.setAttribute('stroke-dasharray', '5,5');
                line.classList.add('gravitational-bond');
                
                this.svg.appendChild(line);
            }
        }
    }
    
    setupKeyboardNav() {
        this.planets.forEach((planet, index) => {
            planet.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    planet.click();
                }
                
                // Arrow key navigation
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % this.planets.length;
                    this.planets[nextIndex].focus();
                }
                
                if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + this.planets.length) % this.planets.length;
                    this.planets[prevIndex].focus();
                }
            });
        });
    }
    
    observePerformance() {
        // Monitor FPS and disable complex animations if needed
        let lastTime = performance.now();
        let frames = 0;
        
        const checkPerformance = () => {
            frames++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                
                // If FPS drops below 30, enable performance mode
                if (fps < 30 && !this.constellation.classList.contains('performance-mode')) {
                    console.log('Low FPS detected, enabling performance mode');
                    this.constellation.classList.add('performance-mode');
                }
                
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkPerformance);
        };
        
        requestAnimationFrame(checkPerformance);
    }
}

// Additional CSS for dynamic effects
const style = document.createElement('style');
style.textContent = `
    .planet--influenced {
        animation: quantum-pulse 0.6s ease !important;
    }
    
    .constellation--active::before {
        opacity: 1 !important;
        transform: translate(-50%, -50%) scale(2) !important;
    }
    
    .planet-ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        background: currentColor;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple-out 0.6s ease-out;
        pointer-events: none;
        opacity: 0.6;
    }
    
    @keyframes ripple-out {
        to {
            transform: translate(-50%, -50%) scale(8);
            opacity: 0;
        }
    }
    
    .gravitational-bond {
        animation: bond-pulse 3s ease-in-out infinite;
    }
    
    @keyframes bond-pulse {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.15; }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new OrbitalSystem();
    });
} else {
    new OrbitalSystem();
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const system = new OrbitalSystem();
    }, 250);
});

