// src/components/wedding/GoldenParticles.jsx
import React from 'react';

export default function GoldenParticles() {
  const particleStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 40,
  };

  const particlesContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  };

  const particleStyleBase = {
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: '#fbbf24',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
  };

  return (
    <div style={particleStyle}>
      <div style={particlesContainerStyle}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...particleStyleBase,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}