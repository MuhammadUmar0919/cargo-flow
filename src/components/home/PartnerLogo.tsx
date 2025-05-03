
import { motion } from "framer-motion";

interface PartnerLogoProps {
  src: string;
  alt: string;
  delay?: number;
}

export function PartnerLogo({ src, alt, delay = 0 }: PartnerLogoProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center justify-center p-4"
    >
      <img 
        src={src} 
        alt={alt} 
        className="h-12 max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300" 
      />
    </motion.div>
  );
}
