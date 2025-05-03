
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

export function TestimonialsSection() {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aziz Karimov",
      position: "Savdo markazi direktori",
      testimonial: "Logistika kompaniyasi bilan ishlaganimizdan juda mamnunmiz. Ular doimo o'z vaqtida va sifatli xizmat ko'rsatishadi. Yuklarimiz doim xavfsiz va o'z vaqtida yetkaziladi.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Nilufar Raximova",
      position: "Internet do'kon egasi",
      testimonial: "Bizning online do'konimiz uchun yetkazib berish xizmati juda muhim. Logistika kompaniyasi bizning ishonchli hamkorimiz. Mijozlarimiz ham yetkazib berish xizmatidan juda mamnun.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Bobur Aliyev",
      position: "Ishlab chiqarish korxonasi",
      testimonial: "Xalqaro yuk tashish xizmatlari bizning korxonamiz uchun juda muhim. Logistika kompaniyasi bizga katta yordam berdi va hamkorligimiz samarali kechmoqda.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      name: "Shaxnoza Usmonova",
      position: "Import-eksport kompaniyasi",
      testimonial: "Biznes yuritishda ishonchli logistika hamkori bo'lishi muhim. Bu kompaniya bilan ishlash bizning operatsion samaradorligimizni sezilarli darajada oshirdi.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 5,
      name: "Jahongir Toshmatov",
      position: "IT kompaniyasi direktori",
      testimonial: "Yuklarimizni o'z vaqtida va xavfsiz yetkazib berish uchun tanlagan kompaniyamiz. Ularning professional xizmatlari bilan to'liq qoniqamiz.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-logistic-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Mijozlarimiz fikrlari" 
          subtitle="Bizning xizmatlarimiz haqida mijozlarimizning qarashlari"
          centered
        />
        
        <div className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
