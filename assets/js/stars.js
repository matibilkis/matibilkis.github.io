// ================================
// Cute Blinking Stars Animation
// ================================

function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    const numberOfStars = 80; // Adjust for more/fewer stars
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay for twinkling effect
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        // Random animation duration (2-4 seconds)
        star.style.animationDuration = `${2 + Math.random() * 2}s`;
        
        // Random size variation (1-3px)
        const size = 1 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        starsContainer.appendChild(star);
    }
}

// Create stars when page loads
document.addEventListener('DOMContentLoaded', createStars);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

