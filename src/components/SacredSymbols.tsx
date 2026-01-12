import { motion } from 'framer-motion';

export const OmSymbol = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <text
      x="50"
      y="70"
      textAnchor="middle"
      className="fill-gold font-traditional text-6xl"
      style={{ fontSize: '60px' }}
    >
      ॐ
    </text>
  </motion.svg>
);

export const SwastikSymbol = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0, rotate: -90 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <g className="stroke-gold fill-none" strokeWidth="3" strokeLinecap="round">
      {/* Main cross */}
      <line x1="50" y1="20" x2="50" y2="80" />
      <line x1="20" y1="50" x2="80" y2="50" />
      {/* Arms */}
      <line x1="50" y1="20" x2="65" y2="20" />
      <line x1="80" y1="50" x2="80" y2="35" />
      <line x1="50" y1="80" x2="35" y2="80" />
      <line x1="20" y1="50" x2="20" y2="65" />
    </g>
  </motion.svg>
);

export const LotusDecor = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 120 60"
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <g className="fill-gold/30 stroke-gold/60" strokeWidth="0.5">
      {/* Center petal */}
      <ellipse cx="60" cy="40" rx="8" ry="20" />
      {/* Left petals */}
      <ellipse cx="45" cy="42" rx="7" ry="18" transform="rotate(-20 45 42)" />
      <ellipse cx="32" cy="46" rx="6" ry="15" transform="rotate(-40 32 46)" />
      {/* Right petals */}
      <ellipse cx="75" cy="42" rx="7" ry="18" transform="rotate(20 75 42)" />
      <ellipse cx="88" cy="46" rx="6" ry="15" transform="rotate(40 88 46)" />
    </g>
  </motion.svg>
);

export const FloralCorner = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <motion.svg
    viewBox="0 0 150 150"
    className={className}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(42 85% 55%)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(38 70% 45%)" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#goldGrad)" strokeWidth="1">
      {/* Decorative curves */}
      <path d="M 10 10 Q 40 10 60 30 Q 80 50 80 80" />
      <path d="M 10 25 Q 35 25 50 40 Q 65 55 65 80" />
      <path d="M 25 10 Q 25 35 40 50 Q 55 65 80 65" />
      {/* Small dots */}
      <circle cx="20" cy="20" r="2" className="fill-gold/40" />
      <circle cx="35" cy="35" r="1.5" className="fill-gold/30" />
      <circle cx="50" cy="50" r="1.5" className="fill-gold/30" />
    </g>
  </motion.svg>
);

export const MusicWave = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 200 40"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(42 85% 55%)" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(42 85% 55%)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(42 85% 55%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 0 20 Q 25 10 50 20 Q 75 30 100 20 Q 125 10 150 20 Q 175 30 200 20"
      fill="none"
      stroke="url(#waveGrad)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>
);

export const CompassRose = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0, rotate: -180 }}
    animate={{ opacity: 0.15, rotate: 0 }}
    transition={{ duration: 2, ease: "easeOut" }}
  >
    <g className="stroke-gold fill-none" strokeWidth="0.5">
      <circle cx="50" cy="50" r="45" />
      <circle cx="50" cy="50" r="35" />
      <circle cx="50" cy="50" r="25" />
      {/* Direction lines */}
      <line x1="50" y1="5" x2="50" y2="95" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="15" y1="15" x2="85" y2="85" />
      <line x1="85" y1="15" x2="15" y2="85" />
      {/* Arrow points */}
      <polygon points="50,8 47,18 53,18" className="fill-gold/30" />
    </g>
  </motion.svg>
);
