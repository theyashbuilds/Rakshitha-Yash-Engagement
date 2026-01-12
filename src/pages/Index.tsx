import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FamilySection from '@/components/FamilySection';
import EventSection from '@/components/EventSection';
import VenueSection from '@/components/VenueSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <motion.main 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Metadata for SEO */}
      <header className="sr-only">
        <h1>Yash & Rakshitha Engagement Ceremony - 25 January 2026</h1>
        <p>You are cordially invited to celebrate the engagement of Yash and Rakshitha</p>
      </header>

      <HeroSection />
      <FamilySection />
      <EventSection />
      <VenueSection />
      <FooterSection />
    </motion.main>
  );
};

export default Index;
