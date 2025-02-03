import { useEffect, useState } from "react";
import "./Highlight.css";

const Highlight = ({ size = 600 }: { size?: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="highlight"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
      }}
    />
  );
};

export default Highlight;
