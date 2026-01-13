import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LotusDecor, FloralCorner, MusicWave, CompassRose } from './SacredSymbols';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex items-center justify-center overflow-hidden py-12 md:py-20">
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

        {/* Divine blessings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-traditional text-lg md:text-xl text-gold tracking-[0.3em] uppercase">
            ॥ श्री ॥
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
            <span className="font-traditional text-sm md:text-base text-muted-foreground italic">
              || Sita Ramam ||
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="font-traditional text-sm md:text-base text-muted-foreground italic">
              || Lord Hanuman ||
            </span>
          </div>
        </motion.div>

        {/* Groom's Parents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-6"
        >
          <p className="font-traditional text-xl md:text-2xl text-foreground/90 leading-relaxed">
            Smt. Gayathri M<br />
            & Sri. Ramesh H B
          </p>
        </motion.div>

        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8"
        >
          <p className="font-traditional text-lg md:text-xl text-gold italic mt-1">
            Cordially invite you to the Engagement
          </p>
          <p className="font-traditional text-lg md:text-xl text-gold italic mt-1">
            Ceremony of our Son
          </p>
        </motion.div>

        {/* Yash Names reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mb-4"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
            <span className="text-gradient-gold block">Yash</span>
          </h1>
        </motion.div>

        {/* & symbol */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-gold font-display text-4xl md:text-5xl mb-4"
        >
          &
        </motion.div>

        {/* Rakshitha Names reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
            <span className="text-gradient-gold block">Rakshitha</span>
          </h1>
        </motion.div>

        {/* Bride's Parents detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="mb-10"
        >
          <p className="font-traditional text-lg md:text-xl text-foreground/90 leading-tight">
            D/o Smt. Mamatha &<br />
            Sri. Anand Madalagere
          </p>
        </motion.div>

        {/* Lotus decoration */}
        <LotusDecor className="w-32 md:w-40 mx-auto mb-8" />

        {/* Closing text */}
        <motion.p
          className="font-traditional text-lg md:text-xl text-foreground/80 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          Request the honour of your presence
        </motion.p>

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          for their joyous commitment.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default HeroSection;
