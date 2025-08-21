// src/components/ui/RippleButton.jsx
import React, { useRef } from "react";

export default function RippleButton({ children, className, ...props }) {
  const buttonRef = useRef(null);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    // Remove old ripple
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <button
      ref={buttonRef}
      onClick={createRipple}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
