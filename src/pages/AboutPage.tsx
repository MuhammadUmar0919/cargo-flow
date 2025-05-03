
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Building, Users, Award, Target, TrendingUp } from "lucide-react";
import CountUp from "@/components/animations/CountUp";
import { TeamSection } from "@/components/home/TeamSection";

const AboutPage = () => {
  // Company History Timeline Data
  const timelineData = [
    {
      year: "2005",
      title: "Kompaniya tashkil etildi",
      description: "Logistika kompaniyamiz kichik bir jamoa bilan o'z faoliyatini boshladi"
    },
    {
      year: "2008",
      title: "Xalqaro yetkazib berish",
      description: "Qo'shni davlatlarga yetkazib berish xizmatlarini yo'lga qo'ydik"
    },
    {
      year: "2012",
      title: "Ombor majmuasi qurilishi",
      description: "Zamonaviy logistika markazi va ombor kompleksini ishga tushirdik"
    },
    {
      year: "2015",
      title: "Yangi yo'nalishlar",
      description: "Yevropa va Osiyo davlatlariga yetkazib berish xizmatlarini yo'lga qo'ydik"
    },
    {
      year: "2020",
      title: "Raqamli transformatsiya",
      description: "To'liq avtomatlashtirilgan buyurtma tizimini ishga tushirdik"
    },
    {
      year: "2023",
      title: "Kengayish va rivojlanish",
      description: "10+ davlatlarda vakolatxonalarimizni ochdik va xizmat ko'rsatish geografiyasini kengaytirdik"
    }
  ];

  // Team data
  const teamData = [
    {
      name: "Aziz Karimov",
      position: "Bosh direktor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Logistika sohasida 15 yillik tajribaga ega mutaxassis"
    },
    {
      name: "Nilufar Raximova",
      position: "Moliya direktori",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Xalqaro moliya loyihalarida 10 yillik tajriba"
    },
    {
      name: "Jahongir Aliyev",
      position: "Operatsiyalar bo'yicha direktor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Xalqaro logistika zanjirlarini boshqarishda katta tajriba"
    },
    {
      name: "Sevinch Usmanova",
      position: "Marketing direktori",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Xalqaro brend strategiyalari va marketing kampaniyalari bo'yicha ekspert"
    }
  ];

  // Stats data
  const statsData = [
    { value: 15, label: "Yillik tajriba", suffix: "+" },
    { value: 10000, label: "Muvaffaqiyatli yetkazilmalar", suffix: "+" },
    { value: 500, label: "Doimiy mijozlar", suffix: "+" },
    { value: 50, label: "Davlatlar bilan hamkorlik", suffix: "+" }
  ];

  return (
    <PageTransition>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-logistic-900 via-logistic-800 to-logistic-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Biz haqimizda
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Logistika kompaniyamiz 2005 yildan buyon mijozlarimizga ishonchli va samarali logistika xizmatlarini taqdim etib kelmoqda. Bizning maqsadimiz – sizning yuklaringizni xavfsiz va tez yetkazib berish.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission and Values section */}
      <section className="py-20 bg-gray-50 dark:bg-logistic-950/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Bizning maqsadimiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Biz mijozlarimizga eng samarali va ishonchli logistika yechimlarini taqdim etishga intilamiz, ularning biznesini rivojlantirishga va muvaffaqiyatga erishishiga yordam beramiz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Bizning ko'rsatkichlarimiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Har yili minglab buyurtmalarni muvaffaqiyatli bajarib, mijozlarimizning ishonchli hamkoriga aylanishga erishdik. Bizning jamoamiz tinimsiz ishlaydi va xizmat sifatini oshirishga intiladi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Bizning qadriyatlarimiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sifat, ishonchlilik, ochiqlik va mijozlarga yo'naltirilganlik - bizning asosiy qadriyatlarimiz. Biz har doim o'z va'dalarimizni bajaramiz va mijozlarimiz bilan uzoq muddatli munosabatlarni qadrlaimiz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-white dark:bg-logistic-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={3} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="py-20 bg-gray-50 dark:bg-logistic-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Kompaniya tarixi
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              2005 yildan buyon samarali xizmat ko'rsatib kelmoqdamiz
            </motion.p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2"></div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md">
                    <Building className="h-5 w-5" />
                  </div>
                  <div className="w-1/2">
                    <Card className={`max-w-md ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                      <CardHeader>
                        <div className="flex items-baseline justify-between">
                          <CardTitle>{item.title}</CardTitle>
                          <span className="text-lg font-bold text-primary">{item.year}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <TeamSection />
    </PageTransition>
  );
};

export default AboutPage;
