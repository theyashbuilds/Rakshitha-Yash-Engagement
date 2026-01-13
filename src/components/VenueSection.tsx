import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { FloralCorner, LotusDecor } from './SacredSymbols';

const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const venueAddress = "Nammoora Tindi Banquet Hall";
  const fullAddress = "Nammoora Tindi Banquet Hall, Bangalore, Karnataka, India";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <section ref={ref} className="relative py-12 md:py-24 px-4 overflow-hidden section-padding">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Decorative corners */}
      <FloralCorner className="absolute top-5 left-5 w-24 md:w-32 opacity-40 float-slow" />
      <FloralCorner className="absolute top-5 right-5 w-24 md:w-32 opacity-40 float" flip />

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-traditional text-gold text-lg mb-3 tracking-widest uppercase">
            Join Us At
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Venue
          </h2>
          <LotusDecor className="w-28 md:w-36 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Venue details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card/50 backdrop-blur-sm gold-border rounded-lg p-6 md:p-8 h-full">
              {/* Venue name */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                    {venueAddress}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6" />

              {/* Contact Button */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <p className="font-body text-foreground/80 mb-2">
                  For inquiries, contact the family
                </p>
                <motion.a
                  href="tel:7204735566"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-foreground font-body font-medium gold-border hover:bg-secondary/80 transition-all duration-300 w-full justify-center md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5 text-gold" />
                  Call Akash Gowda
                </motion.a>
              </div>

              <div className="flex justify-center mb-8">
                <motion.a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-background font-body font-medium hover:bg-gold-dark transition-all duration-300 group w-full justify-center md:w-auto shadow-gold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  Get Directions
                </motion.a>
              </div>

              {/* QR Code Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Scan for directions
                </p>
                <div className="relative inline-block p-2 bg-white rounded-xl shadow-lg border-4 border-gold/20 overflow-hidden">
                  <img
                    src="/QRCODE.jpg"
                    alt="Location QR Code"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                  {/* Decorative corners for QR */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gold" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-gold" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-gold" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gold" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-card/50 gold-border rounded-lg overflow-hidden aspect-video md:h-[450px]">
              {/* Map iframe */}
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(fullAddress)}&zoom=15`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />

              {/* Overlay border */}
              <div className="absolute inset-0 border-4 border-gold/10 rounded-lg pointer-events-none" />

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold/50 rounded-tl pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold/50 rounded-tr pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gold/50 rounded-bl pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gold/50 rounded-br pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
