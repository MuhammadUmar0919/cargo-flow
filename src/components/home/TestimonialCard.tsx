
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
  delay?: number;
}

export function TestimonialCard({
  name,
  position,
  testimonial,
  rating,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-logistic-950/50 rounded-xl shadow-md p-6 border border-border"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6">{testimonial}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
