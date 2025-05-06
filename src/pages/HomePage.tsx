
import { Link } from "react-router-dom";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/home/ServiceCard";
import { TestimonialsSection } from "@/components/home/TestimonialsSection"; 
import { StatsSection } from "@/components/home/StatsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TeamSection } from "@/components/home/TeamSection";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Package, 
  Globe, 
  Clock, 
  Warehouse, 
  Shield, 
  Calculator,
  Truck,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  // Sample services data
  const services = [
    {
      title: "Mahalliy Tashish",
      description: "O'zbekiston bo'ylab tezkor va ishonchli yuk tashish xizmatlari",
      icon: <Truck className="h-6 w-6 text-primary" />,
      slug: "local"
    },
    {
      title: "Xalqaro Tashish",
      description: "Dunyoning barcha mamlakatlariga yuklaringizni xavfsiz yetkazib berish",
      icon: <Globe className="h-6 w-6 text-primary" />,
      slug: "international"
    },
    {
      title: "Ekspress Yetkazish",
      description: "Shoshilinch yuklar uchun tezkor yetkazib berish xizmati",
      icon: <Clock className="h-6 w-6 text-primary" />,
      slug: "express"
    },
    {
      title: "Ombor Saqlash",
      description: "Zamonaviy omborlarimizda sizning yuklaringiz xavfsiz saqlanadi",
      icon: <Warehouse className="h-6 w-6 text-primary" />,
      slug: "storage"
    },
    {
      title: "Yuk Sug'urtasi",
      description: "Tovarlaringizni to'liq himoyalash uchun sug'urta xizmatlari",
      icon: <Shield className="h-6 w-6 text-primary" />,
      slug: "insurance"
    }
  ];

  return (
    <PageTransition>
      {/* Hero section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Ishonchli va tezkor logistika xizmatlari
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 mb-8"
              >
                Bizning professional jamoamiz sizning yuklaringizni dunyoning istalgan
                nuqtasiga xavfsiz va tez yetkazib berishga tayyor.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/calculator">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Calculator className="mr-2 h-5 w-5" /> Yuk Kalkulyatori
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" /> Bog'lanish
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative lg:pl-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Logistics" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="bg-white dark:bg-logistic-900 rounded-lg shadow-lg p-6 max-w-xs">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Yuklaringiz xavfsiz</p>
                      <p className="text-sm text-muted-foreground">24/7 monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20 bg-gray-50 dark:bg-logistic-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Bizning xizmatlar" 
            subtitle="Biz taqdim etadigan xizmatlarning to'liq ro'yxati bilan tanishing"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                Barcha xizmatlar
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Calculator CTA section */}
      <section className="py-20 bg-white dark:bg-logistic-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Yuk narxini hisoblang
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bizning onlayn kalkulyatorimiz orqali yuklaringizni tashish narxini tezda
                hisoblashingiz mumkin. Shunchaki ma'lumotlarni kiriting va natijani ko'ring.
              </p>
              <Link to="/calculator">
                <Button size="lg">
                  <Calculator className="mr-2 h-5 w-5" /> Kalkulyatorni ochish
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Logistics Calculator" 
                className="rounded-lg shadow-lg max-w-full h-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <StatsSection />

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Partners section */}
      <PartnersSection />

      {/* Final CTA section */}
      <section className="py-20 bg-logistic-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
          >
            Hoziroq buyurtma bering!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Logistika xizmatlarimizdan foydalanish uchun hoziroq so'rov yuborish orqali
            boshlang. Bizning mutaxassislar siz bilan bog'lanishadi.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/order">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Buyurtma berish
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
