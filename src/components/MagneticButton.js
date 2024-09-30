import React, { useEffect, useState, useRef } from "react";

const MagneticButton = ({ label, onClick, className }) => {
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenter = {
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    };

    const distanceX = mousePosition.x - buttonCenter.x;
    const distanceY = mousePosition.y - buttonCenter.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const attractionRadius = 100; // The radius where the attraction occurs
    const maxFollowDistance = 10; // Maximum allowed movement

    // If mouse is within the attraction radius, apply the attraction
    if (distance < attractionRadius && distance > maxFollowDistance) {
      setIsNear(true);
      const forceStrength = 0.05; // Smaller force for more subtle movement

      setButtonPosition((prevPos) => ({
        x: Math.min(prevPos.x + distanceX * forceStrength, maxFollowDistance),
        y: Math.min(prevPos.y + distanceY * forceStrength, maxFollowDistance),
      }));
    } else {
      setIsNear(false);
      setButtonPosition({ x: 0, y: 0 }); // Reset position when not near
    }
  }, [mousePosition]);

  return (
    <button
      onClick={onClick}
      ref={buttonRef}
      className={`text-white ${className} ${
        isNear
          ? "is-near bg-white bg-opacity-10 w-max h-max p-5 rounded-full"
          : ""
      }`}
      style={{
        transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
        transition: isNear ? "none" : "transform 0.3s ease",
      }}
    >
      <p className="text-white">{label}</p>
    </button>
  );
};

export default MagneticButton;
