import { useEffect, useRef } from "react";

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particlesArray: any[] = [];
    const numberOfParticles = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    // Particle class to define the behavior of individual particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor(startFromLeftCorner: boolean) {
        // Position particles on the top left or top right corners
        this.x = startFromLeftCorner
          ? Math.random() * (canvas.width / 4) // Left corner range
          : canvas.width - Math.random() * (canvas.width / 4); // Right corner range
        this.y = Math.random() * canvas.height; // Start at a random height (continuous effect)
        this.size = Math.random() * 0.1 + 0.3; // Small particles
        this.speedX = startFromLeftCorner
          ? Math.random() * 0.5 + 0.5 // Move toward the center from left
          : -(Math.random() * 0.5 + 0.5); // Move toward the center from right
        this.speedY = Math.random() * 0.1 + 0.5; // Falling down speed
        this.opacity = 1; // Initial opacity is 100%
        this.color = `rgba(255, 255, 255, ${this.opacity})`; // White particles
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Fade out as they fall closer to the bottom of the screen
        if (this.y > canvas.height * 0.5) {
          this.opacity -= 0.01; // Slowly decrease opacity
        }

        // Ensure the particle completely fades out before reaching the bottom
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      reset() {
        // Reset particle to start again from the top after fading out
        this.y = Math.random() * 50;
        this.x =
          Math.random() < 0.5
            ? Math.random() * (canvas.width / 4) // Left corner
            : canvas.width - Math.random() * (canvas.width / 4); // Right corner
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX =
          this.x < canvas.width / 2
            ? Math.random() * 0.5 + 0.5
            : -(Math.random() * 0.5 + 0.5); // Adjust the direction
        this.size = Math.random() * 0.1 + 0.3;
        this.opacity = 1; // Reset opacity to full
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // Dynamic opacity
        ctx.fill();
      }
    }

    // Create particles starting from both corners
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles / 2; i++) {
        particlesArray.push(new Particle(true)); // From left corner
        particlesArray.push(new Particle(false)); // From right corner
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

export default Particles;
