
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Check, Phone } from "lucide-react";
import PageUnderConstruction from "@/components/shared/PageUnderConstruction";

// Sample service data - in a real app, this would come from an API or database
const services = {
  local: {
    title: "Mahalliy Yuk Tashish",
    description: "O'zbekiston bo'ylab yuklaringizni xavfsiz va tez yetkazib berish xizmati.",
    fullDescription: `Logistika kompaniyasi O'zbekistonning barcha hududlariga yuklarni tashish xizmatlarini taqdim etadi. Bizning professional jamoamiz va zamonaviy transport vositalarimiz bilan sizning yuklaringiz tez va xavfsiz yetkaziladi.

Biz har qanday hajm va vaznli yuklarni tashiy olamiz - kichik paketlardan to katta hajmdagi yuklargacha. Bizning xizmatimiz orqali siz quyidagi afzalliklarga ega bo'lasiz:

- Transport vositalarining keng assortimenti
- Malakali haydovchilar jamoasi
- Yuklarni kuzatish tizimi
- Yuk sug'urtasi
- Individual yondashuv`,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Barcha viloyatlarga yetkazib berish",
      "Tezkor va ishonchli",
      "Yuk kuzatuvi",
      "Junatma sug'urtasi",
      "24/7 mijozlarni qo'llab-quvvatlash",
      "Maxsus yuklarni tashish",
    ],
    existingClient: "Avtomobillar bo'yicha mahalliy dillerlar",
  },
  international: {
    title: "Xalqaro Yuk Tashish",
    description: "Dunyoning barcha mamlakatlariga yuklarni yetkazib berish xizmati.",
    fullDescription: `Logistika kompaniyasi xalqaro yuk tashish bo'yicha keng qamrovli xizmatlarni taklif qiladi. Biz dunyoning barcha qit'alarida yuklarni yetkazib berish uchun global hamkorlar tarmog'iga egamiz.

Bizning xalqaro logistika xizmatlarimiz quyidagilarni o'z ichiga oladi:

- Havo orqali yuk tashish
- Dengiz orqali yuk tashish
- Temir yo'l orqali yuk tashish
- Avtomobil transporti orqali yuk tashish
- Multimodal tashish

Biz bojxona rasmiylashtiruv jarayonlarida to'liq yordam ko'rsatamiz va sizning yuklaringiz barcha xalqaro standartlarga muvofiq tashilishini ta'minlaymiz.`,
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Global yetkazib berish tarmog'i",
      "Bojxona rasmiylashtiruvi yordami",
      "Xalqaro standartlar",
      "Yuk kuzatuvi va monitoringi",
      "Ko'p tilli mijoz xizmati",
      "Xalqaro hujjatlashtirish",
    ],
    existingClient: "Elektron tijorat kompaniyalari",
  },
  express: {
    title: "Ekspress Yetkazish",
    description: "Shoshilinch yuklar uchun ekspress yetkazib berish xizmati.",
    fullDescription: `Vaqt muhim bo'lganda, bizning Ekspress yetkazib berish xizmatlarimiz eng tezkor yechimlari taqdim etadi. Biz yuklaringizni eng qisqa muddatlarda manzilga yetkazib beramiz va bu jarayonni kuzatib borish imkonini taqdim etamiz.

Ekspress yetkazib berish xizmatimiz quyidagi afzalliklarga ega:

- Tezkor yig'ib olish va yetkazib berish
- Ustuvor jo'natish
- Real vaqt rejimida kuzatish
- Kafolatlangan yetkazib berish vaqti
- 24/7 qo'llab-quvvatlash`,
    image: "https://images.unsplash.com/photo-1616023096711-1350451290ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    features: [
      "24 soat ichida yetkazib berish",
      "Ustuvor jo'natish",
      "Maxsus muddatli yetkazib berish",
      "Shaxsiy kuryer xizmati",
      "GPS kuzatuv",
      "24/7 mijozlarni qo'llab-quvvatlash",
    ],
    existingClient: "Onlayn do'konlar va e-tijorat",
  },
  storage: {
    title: "Ombor Saqlash",
    description: "Turli xil yuklarni saqlash uchun zamonaviy ombor xizmatlari.",
    fullDescription: `Logistika kompaniyasi turli xil tovarlarni saqlash uchun zamonaviy va xavfsiz ombor maydonlarini taqdim etadi. Bizning omborlarimiz xalqaro standartlarga javob beradi va har qanday turdagi yuklarni saqlash uchun optimal sharoitlarga ega.

Bizning ombor xizmatlarimiz:

- Qisqa muddatli va uzoq muddatli saqlash
- Haroratni nazorat qilish
- 24/7 xavfsizlik nazorati
- Maxsus yuklarni saqlash
- Inventarizatsiya boshqaruvi
- Qadoqlash va qayta qadoqlash
- Yuklarni komplektlash va jo'natish`,
    image: "https://images.unsplash.com/photo-1586528116193-c793db1d8cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Zamonaviy ombor binolari",
      "24/7 xavfsizlik nazorati",
      "Harorat nazorati",
      "Inventarizatsiya boshqaruvi",
      "Maxsus toifadagi yuklarni saqlash",
      "Yuklarni jo'natish va qabul qilish xizmati",
    ],
    existingClient: "Ishlab chiqarish korxonalari",
  },
  insurance: {
    title: "Yuk Sug'urtasi",
    description: "Yuklaringizni har qanday kutilmagan holatlardan himoya qilish uchun sug'urta xizmatlari.",
    fullDescription: `Bizning yuk sug'urtasi xizmatimiz yuklaringizni tashish va saqlash jarayonida har qanday kutilmagan vaziyatlardan himoya qilish uchun mo'ljallangan. Biz yuklaringizni yo'qotish, shikastlanish, o'g'irlash va boshqa risklardan himoya qiladigan turli xil sug'urta paketlarini taklif etamiz.

Bizning sug'urta xizmatlarimizning afzalliklari:

- Turli xil yuklarni qoplash
- Moslashuvchan sug'urta shartlari
- Tez va samarali da'volarni ko'rib chiqish
- Global qoplama
- To'liq hujjatlashtirish yordami`,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "To'liq sug'urta qoplami",
      "Tez da'volarni ko'rib chiqish",
      "Turli xil sug'urta paketlari",
      "Moslashuvchan sug'urta shartlari",
      "Xalqaro va mahalliy yo'nalishlar",
      "Maxsus yuklarni sug'urtalash",
    ],
    existingClient: "Import-eksport kompaniyalari",
  },
};

type ServiceKey = keyof typeof services;

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceKey = slug as ServiceKey;

  if (!serviceKey || !services[serviceKey]) {
    return <PageUnderConstruction title="Xizmat ma'lumotlari topilmadi" />;
  }

  const service = services[serviceKey];

  return (
    <PageTransition>
      {/* Hero section */}
      <section className="relative">
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-logistic-900/60 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl text-white"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Barcha xizmatlar
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-white/90">{service.description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Xizmat haqida</h2>
                <div className="prose dark:prose-invert max-w-none mb-8">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Bu xizmatdan foydalanayotgan mijozlar
                </h3>
                <p className="text-muted-foreground mb-8">
                  {service.existingClient}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/calculator">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      <Calculator className="mr-2 h-4 w-4" /> Narxlarni hisoblash
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">
                      <Phone className="mr-2 h-4 w-4" /> Bog'lanish
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 dark:bg-logistic-950/40 rounded-xl p-6 border border-border sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-6">Xizmat xususiyatlari</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services CTA */}
      <section className="bg-gray-50 dark:bg-logistic-950/30 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Boshqa xizmatlarimiz bilan tanishing
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Logistika ehtiyojlaringiz uchun kompleks yechimlar taklif qilamiz
            </p>
            <Link to="/services">
              <Button size="lg">
                Barcha xizmatlarni ko'rish
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServiceDetail;
