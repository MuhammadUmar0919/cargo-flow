import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PartnerLogo } from "@/components/PartnerLogo";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

export function PartnersSection() {
  const [api, setApi] = useState<any>();
  
  // Uzbek company logos - using reliable placeholder images
  const partners: Partner[] = [
    {
      id: 1,
      name: "Uzbekistan Airways",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 2,
      name: "UzAuto Motors",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 3,
      name: "Uzbekneftegaz",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 4,
      name: "Artel",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 5,
      name: "Korzinka",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 6,
      name: "Orient Group",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=100"
    },
    {
      id: 7,
      name: "Ucell",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&v=2"
    },
    {
      id: 8,
      name: "Beeline Uzbekistan",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100&v=2"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto scroll for partners
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeading 
            title="Bizning hamkorlar" 
            subtitle="Biz dunyoning eng yirik kompaniyalari bilan hamkorlik qilamiz"
            centered
          />
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel 
            className="w-full" 
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center p-4 h-24 bg-white rounded-lg shadow-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <PartnerLogo 
                      name={partner.name} 
                      logoUrl={partner.logo}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
