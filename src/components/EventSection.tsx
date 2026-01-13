import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { LotusDecor, MusicWave } from './SacredSymbols';

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventDetails = [
    {
      icon: Sparkles,
      label: "Ceremony",
      value: "Engagement",
      subtext: "The sacred bond begins"
    },
    {
      icon: Calendar,
      label: "Date",
      value: "Sunday, 25 January 2026",
      subtext: "An auspicious day"
    },
    {
      icon: Clock,
      label: "Time",
      value: "11:00 AM onwards",
      subtext: "Blessed hour"
    }
  ];

  return (
    <section ref={ref} className="relative py-12 md:py-24 px-4 overflow-hidden section-padding">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 compass-lines pointer-events-none" />
      <div className="absolute inset-0 bg-[image:var(--gradient-radial-gold)] opacity-50" />

      {/* Music wave decoration */}
      <motion.div
        className="absolute top-20 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
      >
        <MusicWave className="w-full" />
      </motion.div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-traditional text-gold text-lg mb-3 tracking-widest uppercase">
            Save the Date
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Celebration
          </h2>
          <LotusDecor className="w-28 md:w-36 mx-auto" />
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {eventDetails.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card/40 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center gold-border hover:bg-card/60 transition-all duration-500 group-hover:gold-glow">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-6 h-6 text-gold" />
                </motion.div>

                {/* Label */}
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {item.label}
                </p>

                {/* Value */}
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                  {item.value}
                </h3>

                {/* Subtext */}
                <p className="font-traditional text-sm text-gold/80 italic">
                  {item.subtext}
                </p>

                {/* Decorative dots */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-gold/30" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gold/30" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-gold/30" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-gold/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-traditional text-lg text-foreground/70 italic">
            "A journey of roads and melodies, united by love."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
