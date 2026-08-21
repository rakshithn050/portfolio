import { useEffect, useRef } from "react";
import "./Background.css";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    let time = 0;

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.0018;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 420;
      const cos = Math.cos(time);
      const sin = Math.sin(time);

      stars.forEach((star) => {
        const x = star.x * cos - star.z * sin;
        const z = star.x * sin + star.z * cos;
        const scale = fov / (fov + z * 240);
        const px = cx + x * Math.min(width, 1100) * 0.42 * scale;
        const py = cy + star.y * 340 * scale;
        const size = Math.max(0.5, 2.4 * scale);
        const alpha = Math.max(0.12, (z + 1.2) / 2.4);

        ctx.beginPath();
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="scene-bg" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="grid-floor" />
      <div className="cube cube-one" />
      <div className="cube cube-two" />
      <div className="cube cube-three" />
      <canvas ref={canvasRef} className="star-canvas" />
    </div>
  );
};

export default Background;
