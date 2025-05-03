
import PageTransition from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FaqPage = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      id: "general",
      title: "Umumiy savollar",
      questions: [
        {
          question: "Logistika kompaniyasi qanday xizmatlarni ko'rsatadi?",
          answer:
            "Bizning kompaniyamiz mahalliy va xalqaro yuk tashish, ekspress yetkazish, ombor saqlash va yuk sug'urtasi xizmatlarini ko'rsatadi. Bizning maqsadimiz mijozlarimizning barcha logistika ehtiyojlarini qondirish hisoblanadi.",
        },
        {
          question: "Buyurtmani qanday berish mumkin?",
          answer:
            "Siz buyurtmani bir necha usulda berishingiz mumkin: veb-saytimizda buyurtma sahifasi orqali, bizning ofisimizga tashrif buyurib yoki telefon orqali bog'lanib. Har qanday usul orqali buyurtma berishingiz mumkin va bizning operatorlarimiz sizga yordam berishadi.",
        },
        {
          question: "Hisob-kitob qilish uchun qanday to'lov usullari mavjud?",
          answer:
            "Biz naqd pul, bank o'tkazmasi, VISA, Mastercard, PayMe va Click kabi to'lov usullarini qabul qilamiz. Siz o'zingizga qulay bo'lgan to'lov usulini tanlashingiz mumkin.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Yuk tashish",
      questions: [
        {
          question: "Yuk tashish narxi qanday hisoblanadi?",
          answer:
            "Yuk tashish narxi bir necha omillarga bog'liq: yukningog'irligi, hajmi, masofa, yetkazish muddati va yuk turi. Aniq narxni bilish uchun bizning onlayn kalkulyatorimizdan foydalanishingiz yoki operatorlarimizga murojaat qilishingiz mumkin.",
        },
        {
          question: "Yetkazib berish muddati qancha?",
          answer:
            "Yetkazib berish muddati manzilga va tanlagan xizmat turiga bog'liq. Mahalliy tashish uchun bu odatda 1-3 kun, xalqaro tashish uchun esa 3-14 kun bo'lishi mumkin. Ekspress yetkazish xizmati orqali yuklaringiz 24 soat ichida yetkazib berilishi mumkin.",
        },
        {
          question: "Qanday yuklarni tashishni rad etishingiz mumkin?",
          answer:
            "Biz xavfli moddalar, qonun bilan taqiqlangan mahsulotlar, tez buziladigan oziq-ovqat mahsulotlari va maxsus sharoitlar talab qilinadigan boshqa yuklarni tashishni rad etishimiz mumkin. To'liq ro'yxat uchun bizning siyosatimizni tekshirishingiz yoki operatorlarimiz bilan bog'lanishingiz mumkin.",
        },
      ],
    },
    {
      id: "international",
      title: "Xalqaro tashish",
      questions: [
        {
          question: "Xalqaro yuk tashish uchun qanday hujjatlar kerak?",
          answer:
            "Xalqaro yuk tashish uchun quyidagi hujjatlar kerak bo'ladi: transport yuk xati (CMR, AWB, B/L), hisobvaraq-faktura, kelip chiqish sertifikati, yukni tavsiflash varaqasi va boshqa hujjatlar. Bizning mutaxassislarimiz barcha zaruriy hujjatlarni to'g'ri tayyorlashda yordam berishadi.",
        },
        {
          question: "Bojxona rasmiylashtiruvi xizmatlarini ko'rsatasizmi?",
          answer:
            "Ha, biz bojxona rasmiylashtiruvi bo'yicha to'liq xizmatlar ko'rsatamiz. Bizning bojxona brokerlari barcha zaruriy hujjatlarni to'g'ri tayyorlashda va bojxonadan o'tkazishda yordam berishadi.",
        },
        {
          question: "Xalqaro tashish vaqtida yukni kuzatish mumkinmi?",
          answer:
            "Ha, barcha xalqaro tashiladigan yuklarni bizning onlayn tizimimiz orqali kuzatish mumkin. Sizga tashish jarayoning har bir bosqichida bildirishnomalar yuboriladi va istalgan vaqtda yuklaringiz holatini tekshirishingiz mumkin.",
        },
      ],
    },
    {
      id: "storage",
      title: "Ombor saqlash",
      questions: [
        {
          question: "Qancha muddatga omborga yuklarni qo'yish mumkin?",
          answer:
            "Bizning omborlarda yuklaringizni qisqa muddatga (bir necha kun yoki hafta) yoki uzoq muddatga (oylar va yillar) saqlashingiz mumkin. Siz o'zingizning ehtiyojlaringizga qarab muddat tanlashingiz mumkin.",
        },
        {
          question: "Omborda maxsus sharoitli yuklar uchun imkoniyatlar bormi?",
          answer:
            "Ha, bizning omborlarimizda harorat va namlikni nazorat qilinadigan maxsus xonalar mavjud. Bu oziq-ovqat mahsulotlari, farmatsevtika mahsulotlari va boshqa maxsus sharoitlar talab qilinadigan yuklarni saqlash uchun ideal.",
        },
      ],
    },
    {
      id: "insurance",
      title: "Sug'urta",
      questions: [
        {
          question: "Yuk sug'urtasini qanday qilish mumkin?",
          answer:
            "Yuklaringizni sug'urta qilish uchun buyurtma berishdan oldin yoki buyurtma berish jarayonida sug'urta opsiyasini tanlashingiz kerak. Biz yukingiz qiymatiga qarab sug'urta summasini hisoblaymiz.",
        },
        {
          question: "Sug'urta qanday holatlarni qoplaydi?",
          answer:
            "Bizning sug'urta xizmatimiz yo'qotish, shikastlanish, o'g'irlash, tabiiy ofatlar va boshqa ko'plab hodisalarni qoplaydi. To'liq qamrov haqida ma'lumot olish uchun bizning sug'urta shartlarimiz bilan tanishishingiz mumkin.",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      {/* Hero section */}
      <section className="bg-logistic-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Tez-tez so'raladigan savollar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200"
            >
              Bizning xizmatlarimiz haqida eng ko'p beriladigan savollarga
              javoblar
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            {faqCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-16 p-8 bg-gray-50 dark:bg-logistic-950/40 rounded-lg border border-border text-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                Savolingizga javob topmadingizmi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Bizga bog'laning va bizning mutaxassislarimiz sizning barcha
                savollaringizga javob berishadi
              </p>
              <Link to="/contact">
                <Button size="lg">Bizga bog'lanish</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FaqPage;
