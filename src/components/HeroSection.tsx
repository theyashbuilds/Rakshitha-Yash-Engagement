import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { OmSymbol, SwastikSymbol, LotusDecor, FloralCorner, MusicWave, CompassRose } from './SacredSymbols';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      <div className="absolute inset-0 mandala-pattern pointer-events-none" />
      
      {/* Radial gold glow */}
      <motion.div 
        className="absolute inset-0 bg-[image:var(--gradient-radial-gold)]"
        style={{ opacity }}
      />

      {/* Floating decorative elements */}
      <FloralCorner className="absolute top-4 left-4 w-24 md:w-32 lg:w-40 float" />
      <FloralCorner className="absolute top-4 right-4 w-24 md:w-32 lg:w-40 float-delayed" flip />
      <FloralCorner className="absolute bottom-4 left-4 w-24 md:w-32 lg:w-40 rotate-180 float-slow" flip />
      <FloralCorner className="absolute bottom-4 right-4 w-24 md:w-32 lg:w-40 rotate-180 float" />

      {/* Subtle compass (adventure element) */}
      <CompassRose className="absolute bottom-20 right-10 w-32 md:w-48 opacity-10" />

      {/* Music wave pattern (Rakshitha's element) */}
      <motion.div 
        className="absolute top-1/4 left-0 right-0"
        style={{ y }}
      >
        <MusicWave className="w-full opacity-30" />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Sacred symbols */}
        <motion.div 
          className="flex items-center justify-center gap-8 md:gap-12 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SwastikSymbol className="w-10 h-10 md:w-14 md:h-14 sacred-glow" />
          <OmSymbol className="w-12 h-12 md:w-16 md:h-16 sacred-glow" />
          <SwastikSymbol className="w-10 h-10 md:w-14 md:h-14 sacred-glow" />
        </motion.div>

        {/* Divine blessings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mb-8"
        >
          <p className="font-traditional text-lg md:text-xl text-gold tracking-[0.3em] uppercase">
            ॥ श्री ॥
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
            <span className="font-traditional text-sm md:text-base text-muted-foreground italic">
              Sitha Rama
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="font-traditional text-sm md:text-base text-muted-foreground italic">
              Lord Hanuman
            </span>
          </div>
        </motion.div>

        {/* Couple names reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mb-6"
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-gradient-gold">Yash</span>
            <motion.span 
              className="inline-block mx-3 md:mx-6 text-gold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              &
            </motion.span>
            <span className="text-gradient-gold">Rakshitha</span>
          </motion.h1>
        </motion.div>

        {/* Lotus decoration */}
        <LotusDecor className="w-32 md:w-40 mx-auto mb-8" />

        {/* Invitation text */}
        <motion.p
          className="font-traditional text-lg md:text-xl text-foreground/80 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Request the honour of your presence
        </motion.p>

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          at their Engagement Ceremony
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1.5 h-3 bg-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
