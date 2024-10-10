// components/ConnectedDots.tsx
import { useEffect, useRef } from "react";

const ConnectedDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let stars: Star[] = [];
    const FPS = 60;
    const numberOfStars = 100;

    // Star interface
    interface Star {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }

    // Generate stars
    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    // Calculate distance between two points
    const distance = (point1: Star, point2: Star) => {
      const xs = (point2.x - point1.x) ** 2;
      const ys = (point2.y - point1.y) ** 2;
      return Math.sqrt(xs + ys);
    };

    // Draw the stars and connecting lines
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Draw stars
      stars.forEach((s) => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.stroke();
      });

      // Draw connecting lines between stars within a certain distance
      ctx.beginPath();
      stars.forEach((starI) => {
        stars.forEach((starII) => {
          if (distance(starI, starII) < 150) {
            ctx.moveTo(starI.x, starI.y);
            ctx.lineTo(starII.x, starII.y);
          }
        });
      });

      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
    };

    // Update star positions
    const update = () => {
      stars.forEach((s) => {
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      });
    };

    // Animation loop
    const tick = () => {
      draw();
      update();
      requestAnimationFrame(tick);
    };

    tick();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

const canvasStyle: React.CSSProperties = {
  position: "absolute",
  width:"700px",
  height:"700px",
  marginTop:"10px"
};

export default ConnectedDots;
