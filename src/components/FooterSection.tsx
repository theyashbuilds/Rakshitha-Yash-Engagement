import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';
import { LotusDecor, MusicWave } from './SacredSymbols';

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-12 md:py-20 px-4 overflow-hidden section-padding">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[image:var(--gradient-radial-gold)] opacity-30" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Music wave at top */}
      <motion.div
        className="absolute top-0 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.15 } : {}}
        transition={{ duration: 1 }}
      >
        <MusicWave className="w-full" />
      </motion.div>

      <div className="container relative z-10 max-w-3xl mx-auto text-center">

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            We look forward to celebrating with you
          </h3>

          <LotusDecor className="w-24 md:w-32 mx-auto mb-6" />

          <p className="font-traditional text-lg md:text-xl text-foreground/70 italic mb-8">
            "May our journey together be blessed with love, joy, and eternal happiness"
          </p>
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="font-display text-xl md:text-2xl text-gradient-gold">
            Yash
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-5 h-5 text-rose fill-rose" />
          </motion.div>
          <span className="font-display text-xl md:text-2xl text-gradient-gold">
            Rakshitha
          </span>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-6" />

        {/* Copyright / credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-sm text-muted-foreground"
        >
          Made with love for Y & R • January 2026
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
