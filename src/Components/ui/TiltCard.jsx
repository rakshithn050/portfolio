import { useRef } from "react";
import "./TiltCard.css";

const TiltCard = ({ children, className = "", max = 10 }) => {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateZ(12px)`;
  };

  const onLeave = () => {
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
