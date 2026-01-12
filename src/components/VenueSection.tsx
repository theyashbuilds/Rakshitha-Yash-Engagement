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
    <section ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Venue details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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

              {/* Contact */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <p className="font-body text-foreground/80">
                  For inquiries, contact the family
                </p>
              </div>

              {/* Directions button */}
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold text-background font-body font-medium hover:bg-gold-dark transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                Get Directions
              </motion.a>

              {/* QR Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 p-4 bg-background rounded-lg inline-block"
              >
                <p className="font-body text-sm text-muted-foreground mb-3 text-center">
                  Scan for directions
                </p>
                <div className="p-3 bg-white rounded-lg">
                  <QRCodeSVG
                    value={mapsUrl}
                    size={120}
                    level="M"
                    fgColor="#1a1a1a"
                    bgColor="#ffffff"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-card/50 gold-border rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[350px]">
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
