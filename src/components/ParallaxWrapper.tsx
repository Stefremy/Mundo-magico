"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number; // 0 to 1, where 1 is static, <1 is slower/farther, >1 is faster/closer
  className?: string;
}

export default function ParallaxWrapper({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Only animate if in or near viewport
      if (top < windowHeight && top > -ref.current.offsetHeight) {
        setOffset((window.scrollY - (ref.current.offsetTop || 0)) * (1 - speed));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        style={{ 
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out' 
        }}
      >
        {children}
      </div>
    </div>
  );
}
