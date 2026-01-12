import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FloralCorner } from './SacredSymbols';

const FamilyCard = ({ 
  title, 
  parentNames, 
  childName, 
  relation, 
  delay = 0 
}: { 
  title: string; 
  parentNames: string; 
  childName: string; 
  relation: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative bg-card/50 backdrop-blur-sm gold-border rounded-lg p-6 md:p-8 group hover:bg-card/70 transition-colors duration-500">
        {/* Corner decorations */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
        <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />

        {/* Title */}
        <h3 className="font-display text-lg md:text-xl text-gold mb-4 text-center">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-6" />

        {/* Parents */}
        <p className="font-traditional text-base md:text-lg text-foreground/90 text-center leading-relaxed mb-4">
          {parentNames}
        </p>

        {/* Relation text */}
        <p className="font-body text-sm text-muted-foreground text-center mb-2">
          cordially invite you to the engagement ceremony of their
        </p>

        {/* Child name and relation */}
        <p className="font-traditional text-xl md:text-2xl text-foreground text-center">
          {relation}{' '}
          <span className="font-display text-gradient-gold font-medium">
            {childName}
          </span>
        </p>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none" />
      </div>
    </motion.div>
  );
};

const FamilySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Floating lotus decorations */}
      <FloralCorner className="absolute top-10 left-5 w-20 md:w-28 opacity-50 float" />
      <FloralCorner className="absolute bottom-10 right-5 w-20 md:w-28 opacity-50 float-delayed" flip />

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            With the Blessings of the Almighty
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Family cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FamilyCard
            title="Groom's Family"
            parentNames="Smt. Gayathri M & Sri. Ramesh H B"
            childName="Yash"
            relation="Son"
            delay={0.2}
          />
          
          <FamilyCard
            title="Bride's Family"
            parentNames="Smt. Mamatha & Sri. Anand Madalagere"
            childName="Rakshitha"
            relation="Daughter"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
