function createParticle() {
    const sandStorm = document.querySelector('.sand-storm');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random starting position
    const startY = Math.random() * window.innerHeight;
    particle.style.top = `${startY}px`;
    particle.style.left = '-10px';
    
    // Random animation properties
    const duration = 3 + Math.random() * 4; // 3-7 seconds
    const delay = Math.random() * 2; // 0-2 seconds delay
    
    // Choose random animation
    const animations = ['flyRight', 'flyRightSlow', 'flyRightFast'];
    const animation = animations[Math.floor(Math.random() * animations.length)];
    
    particle.style.animation = `${animation} ${duration}s linear ${delay}s`;
    
    sandStorm.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

function startSandStorm() {
    // Create initial batch of particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
    
    // Continuously create new particles
    setInterval(() => {
        if (document.querySelector('.sand-storm').children.length < 100) {
            createParticle();
        }
    }, 100);
}

// Create sand storm container
const sandStorm = document.createElement('div');
sandStorm.className = 'sand-storm';
document.body.appendChild(sandStorm);

// Start the sand storm when the page loads
window.addEventListener('load', startSandStorm); 