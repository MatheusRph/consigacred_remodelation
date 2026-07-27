import React, { useState, useRef, useEffect } from 'react';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number; // Maximum rotation angle in degrees
  perspective?: number; // Perspective distance in px
  scale?: number; // Scale factor
  globalMouse?: boolean; // Track mouse across entire site/window
}

export const TiltContainer: React.FC<TiltProps> = ({
  children,
  className = '',
  maxAngle = 20,
  perspective = 800,
  scale = 1.05,
  globalMouse = false,
}) => {
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globalMouse) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elemCenterX = rect.left + rect.width / 2;
      const elemCenterY = rect.top + rect.height / 2;

      // Calculate distance from cursor to element center normalized by half screen dimensions
      const deltaX = (e.clientX - elemCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - elemCenterY) / (window.innerHeight / 2);

      // Clamp between -1 and 1
      const clampedX = Math.max(-1, Math.min(1, deltaX));
      const clampedY = Math.max(-1, Math.min(1, deltaY));

      const rotateX = (-clampedY * maxAngle).toFixed(2);
      const rotateY = (clampedX * maxAngle).toFixed(2);

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [globalMouse, maxAngle, perspective, scale]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (globalMouse) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -((y / (rect.height / 2)) * maxAngle).toFixed(2);
    const rotateY = ((x / (rect.width / 2)) * maxAngle).toFixed(2);

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!globalMouse) {
      setTransformStyle(
        `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      );
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform ${
        globalMouse || isHovered 
          ? 'transition-transform duration-100 ease-out' 
          : 'transition-transform duration-500 ease-out'
      } ${className}`}
      style={{
        transform: transformStyle || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};
