
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap() || 0);
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 }
    }
  };

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id}>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                className="bg-white dark:bg-logistic-950/50 rounded-xl shadow-md p-8 border border-border mx-4"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <motion.blockquote
                      variants={quoteVariants}
                      className="text-lg italic mb-4 relative"
                    >
                      <span className="text-4xl text-primary opacity-20 absolute -top-4 -left-2">"</span>
                      {testimonial.testimonial}
                      <span className="text-4xl text-primary opacity-20 absolute -bottom-8 right-0">"</span>
                    </motion.blockquote>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.position}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:flex mt-8 justify-center">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`mx-1 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary w-6" : "bg-gray-300 dark:bg-gray-600 w-2"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="left-0 lg:-left-12" />
        <CarouselNext className="right-0 lg:-right-12" />
      </Carousel>
    </div>
  );
}
