import React from "react";
import { motion } from "framer-motion";

export default function FloralDecoration({ position }) {
  // Define posições para cada canto
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]",
  };

  // Animações diferentes para cada elemento
  const leafAnimation1 = {
    rotate: [0, 3, -2, 0],
    y: [0, -4, 0, 4, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  };

  const leafAnimation2 = {
    rotate: [0, -2, 3, 0],
    y: [0, 3, 0, -3, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  };

  const leafAnimation3 = {
    rotate: [0, 2, -3, 0],
    x: [0, -2, 0, 2, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
  };

  const flowerAnimation = {
    scale: [1, 1.05, 1],
    rotate: [0, 3, 0, -3, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className={`fixed ${positions[position]} z-0 pointer-events-none opacity-50`}>
      <svg width="250" height="250" viewBox="0 0 250 250" className="drop-shadow-xl">
        {/* Folhas longas verdes - estilo grama */}
        <motion.path
          d="M 30 220 Q 25 180, 28 140 Q 30 100, 32 60"
          stroke="#2d5f3f"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={leafAnimation1}
        />
        <motion.path
          d="M 45 230 Q 42 190, 44 150 Q 46 110, 48 70"
          stroke="#3a7d52"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          animate={leafAnimation2}
        />
        <motion.path
          d="M 15 210 Q 12 170, 14 130 Q 16 90, 18 50"
          stroke="#4a9865"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={leafAnimation3}
        />

        {/* Galhos principais com folhas */}
        <motion.g animate={leafAnimation1}>
          {/* Galho 1 */}
          <path
            d="M 80 200 Q 90 160, 95 120 Q 98 90, 100 60"
            stroke="#5a8e6f"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Folhas no galho - tons de verde eucalipto */}
          <ellipse cx="85" cy="180" rx="15" ry="25" fill="#7ba88f" opacity="0.85" transform="rotate(-20 85 180)" />
          <ellipse cx="92" cy="150" rx="18" ry="28" fill="#8fb89d" opacity="0.8" transform="rotate(-15 92 150)" />
          <ellipse cx="96" cy="110" rx="14" ry="22" fill="#9dc4ab" opacity="0.85" transform="rotate(-10 96 110)" />
          <ellipse cx="99" cy="80" rx="12" ry="20" fill="#abdbb9" opacity="0.8" transform="rotate(-5 99 80)" />
        </motion.g>

        <motion.g animate={leafAnimation2}>
          {/* Galho 2 */}
          <path
            d="M 120 210 Q 125 170, 128 130 Q 130 100, 132 70"
            stroke="#6a9e7f"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Folhas tons turquesa/verde-água */}
          <ellipse cx="122" cy="190" rx="16" ry="26" fill="#7db09a" opacity="0.8" transform="rotate(15 122 190)" />
          <ellipse cx="126" cy="155" rx="14" ry="24" fill="#8bc4ad" opacity="0.85" transform="rotate(20 126 155)" />
          <ellipse cx="129" cy="120" rx="13" ry="22" fill="#99d4bc" opacity="0.8" transform="rotate(18 129 120)" />
        </motion.g>

        {/* Flores amarelas - estilo mais bonito e vibrante */}
        <motion.g animate={flowerAnimation}>
          {/* Flor 1 - Principal */}
          <g transform="translate(100, 50)">
            {/* Pétalas amarelas vibrantes */}
            <ellipse cx="0" cy="-12" rx="8" ry="14" fill="#ffd93d" opacity="0.95" />
            <ellipse cx="10" cy="-6" rx="8" ry="14" fill="#ffe55d" opacity="0.95" transform="rotate(72 0 0)" />
            <ellipse cx="6" cy="10" rx="8" ry="14" fill="#ffed7d" opacity="0.95" transform="rotate(144 0 0)" />
            <ellipse cx="-6" cy="10" rx="8" ry="14" fill="#ffe55d" opacity="0.95" transform="rotate(216 0 0)" />
            <ellipse cx="-10" cy="-6" rx="8" ry="14" fill="#ffd93d" opacity="0.95" transform="rotate(288 0 0)" />
            {/* Centro da flor */}
            <circle cx="0" cy="0" r="6" fill="#d4af37" />
            <circle cx="0" cy="0" r="4" fill="#f0d779" opacity="0.8" />
          </g>

          {/* Flor 2 - Secundária */}
          <g transform="translate(130, 80)">
            <ellipse cx="0" cy="-10" rx="7" ry="12" fill="#ffe55d" opacity="0.9" />
            <ellipse cx="8" cy="-5" rx="7" ry="12" fill="#ffed7d" opacity="0.9" transform="rotate(72 0 0)" />
            <ellipse cx="5" cy="8" rx="7" ry="12" fill="#fff4a0" opacity="0.9" transform="rotate(144 0 0)" />
            <ellipse cx="-5" cy="8" rx="7" ry="12" fill="#ffed7d" opacity="0.9" transform="rotate(216 0 0)" />
            <ellipse cx="-8" cy="-5" rx="7" ry="12" fill="#ffe55d" opacity="0.9" transform="rotate(288 0 0)" />
            <circle cx="0" cy="0" r="5" fill="#d4af37" />
            <circle cx="0" cy="0" r="3" fill="#f0d779" opacity="0.8" />
          </g>

          {/* Flor 3 - Pequena */}
          <g transform="translate(75, 100)">
            <ellipse cx="0" cy="-8" rx="6" ry="10" fill="#ffed7d" opacity="0.85" />
            <ellipse cx="6" cy="-4" rx="6" ry="10" fill="#fff4a0" opacity="0.85" transform="rotate(72 0 0)" />
            <ellipse cx="4" cy="6" rx="6" ry="10" fill="#fffabd" opacity="0.85" transform="rotate(144 0 0)" />
            <ellipse cx="-4" cy="6" rx="6" ry="10" fill="#fff4a0" opacity="0.85" transform="rotate(216 0 0)" />
            <ellipse cx="-6" cy="-4" rx="6" ry="10" fill="#ffed7d" opacity="0.85" transform="rotate(288 0 0)" />
            <circle cx="0" cy="0" r="4" fill="#d4af37" />
            <circle cx="0" cy="0" r="2.5" fill="#f0d779" />
          </g>
        </motion.g>

        {/* Detalhes dourados brilhantes */}
        <motion.circle
          cx="60"
          cy="120"
          r="2"
          fill="#d4af37"
          opacity="0.7"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="110"
          cy="140"
          r="1.5"
          fill="#ffd700"
          opacity="0.8"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.circle
          cx="140"
          cy="110"
          r="1.8"
          fill="#d4af37"
          opacity="0.7"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Pequenos pontos dourados decorativos */}
        <circle cx="50" cy="90" r="1" fill="#d4af37" opacity="0.6" />
        <circle cx="90" cy="180" r="1.2" fill="#ffd700" opacity="0.5" />
        <circle cx="135" cy="150" r="0.8" fill="#d4af37" opacity="0.7" />
        <circle cx="70" cy="70" r="1" fill="#ffd700" opacity="0.6" />
      </svg>
    </div>
  );
}