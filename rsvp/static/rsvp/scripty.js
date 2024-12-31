// static/rsvp/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Clock Countdown
    const clock = document.getElementById('clock');
    let countdownTime = new Date();
    countdownTime.setHours(7, 0, 0);  // Set target time to 7:00 AM

    function quickCountdown() {
        let now = new Date();

        // If the countdown time is in the past, set it for the next day
        if (now.getHours() >= 7) {
            countdownTime.setDate(now.getDate() + 1);
        }

        let distance = countdownTime - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        clock.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (distance < 0) {
            clearInterval(interval);
            clock.innerHTML = "Please come to the gym at 7:00 today.";
            launchFireworks();
        } else {
            // Speed up the countdown for demo purposes
            let simulatedNow = new Date(now.getTime() + 10 * 1000); // Simulate 10 seconds per second
            countdownTime = new Date(simulatedNow);
        }
    }

    const interval = setInterval(quickCountdown, 1000);

    // Fireworks Animation
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function launchFireworks() {
        // Fireworks settings and animation logic
        // You can add your fireworks animation logic here
    }

    // Example fireworks animation
    let particles = [];
    function createParticles(x, y, color) {
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle(x, y, color));
        }
    }

    function Particle(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 2 + 1;
        this.velocity = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
        };
        this.alpha = 1;

        this.draw = function() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        };

        this.update = function() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.01;
        };
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            } else {
                particle.update();
                particle.draw();
            }
        });
    }

    animate();
    createParticles(canvas.width / 2, canvas.height / 2, 'red');
    createParticles(canvas.width / 2, canvas.height / 2, 'yellow');
    createParticles(canvas.width / 2, canvas.height / 2, 'blue');
});
