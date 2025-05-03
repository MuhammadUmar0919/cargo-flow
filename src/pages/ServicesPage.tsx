
import PageTransition from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Globe, Clock, Warehouse, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Mahalliy Yuk Tashish",
    slug: "local",
    description:
      "O'zbekiston bo'ylab yuklaringizni xavfsiz va tez yetkazib berish xizmati. Bizning professionallar jamoasi va zamonaviy transport vositalari bilan sizning yuklaringiz istalgan nuqtaga o'z vaqtida yetib boradi.",
    icon: <Truck className="h-8 w-8" />,
    features: [
      "Barcha viloyatlarga yetkazib berish",
      "Tezkor va ishonchli",
      "Yuk kuzatuvi",
      "Junatma sug'urtasi",
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Xalqaro Yuk Tashish",
    slug: "international",
    description:
      "Dunyoning barcha mamlakatlariga yuklarni yetkazib berish xizmati. Biz xalqaro logistika tajribasi va global hamkorlar tarmog'i orqali har qanday masofaga yuklarni yetkazib berishga tayyormiz.",
    icon: <Globe className="h-8 w-8" />,
    features: [
      "Global yetkazib berish tarmog'i",
      "Bojxona rasmiylashtiruvi yordami",
      "Xalqaro standartlar",
      "Yuk kuzatuvi va monitoringi",
    ],
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Ekspress Yetkazish",
    slug: "express",
    description:
      "Shoshilinch yuklar uchun ekspress yetkazib berish xizmati. Vaqt muhim bo'lgan vaziyatlarda, biz yuklaringizni eng qisqa muddatlarda manzilga yetkazib beramiz.",
    icon: <Clock className="h-8 w-8" />,
    features: [
      "24 soat ichida yetkazib berish",
      "Ustuvor jo'natish",
      "Maxsus muddatli yetkazib berish",
      "Shaxsiy kuryer xizmati",
    ],
    image: "https://images.unsplash.com/photo-1616023096711-1350451290ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 4,
    title: "Ombor Saqlash",
    slug: "storage",
    description:
      "Turli xil yuklarni saqlash uchun zamonaviy ombor xizmatlari. Yuklaringizni xavfsiz va optimal sharoitlarda saqlash uchun keng hajmli ombor maydonlarini taqdim etamiz.",
    icon: <Warehouse className="h-8 w-8" />,
    features: [
      "Zamonaviy ombor binolari",
      "24/7 xavfsizlik nazorati",
      "Harorat nazorati",
      "Inventarizatsiya boshqaruvi",
    ],
    image: "https://images.unsplash.com/photo-1586528116193-c793db1d8cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    title: "Yuk Sug'urtasi",
    slug: "insurance",
    description:
      "Yuklaringizni har qanday kutilmagan holatlardan himoya qilish uchun sug'urta xizmatlari. Biz yuklaringizning xavfsiz yetkazib berilishini ta'minlaymiz va kutilmagan vaziyatlarda to'liq qoplamani kafolatlaymiz.",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "To'liq sug'urta qoplami",
      "Tez da'volarni ko'rib chiqish",
      "Turli xil sug'urta paketlari",
      "Moslashuvchan sug'urta shartlari",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const ServicesPage = () => {
  return (
    <PageTransition>
      {/* Hero section */}
      <section className="bg-logistic-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Bizning Xizmatlar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300"
            >
              Logistika ehtiyojlaringiz uchun kompleks yechimlar. Bizning
              professional jamoamiz sizning biznesingiz uchun eng samarali
              logistika yechimlarini taqdim etadi.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services list section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Biz taklif qiladigan xizmatlar"
            subtitle="Bizning xizmatlar orqali yuklaringizni xavfsiz, ishonchli va tez yetkazib beramiz"
            centered
            className="mb-16"
          />

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/services/${service.slug}`}>
                    <Button>
                      Batafsil <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg object-cover w-full h-[300px]"
                  />
                </div>
                {index < services.length - 1 && (
                  <div className="col-span-1 md:col-span-2">
                    <Separator className="my-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gray-50 dark:bg-logistic-950/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Logistika hamkorni qidiryapsizmi?"
              subtitle="Biz sizning ehtiyojlaringizga moslashtirilgan logistika yechimlarini taklif qilamiz"
              centered
            />
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/calculator">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Clock className="mr-2 h-5 w-5" /> Narxlarni hisoblash
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Bog'lanish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;
