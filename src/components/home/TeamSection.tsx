
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamSlider } from "@/components/home/TeamSlider";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export function TeamSection() {
  // Sample team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Aziz Rahimov",
      position: "Direktor",
      bio: "10 yillik tajribaga ega logistika sohasidagi professional. Xalqaro darajada yuklarni tashish bo'yicha mutaxassis.",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 2,
      name: "Madina Karimova",
      position: "Operatsion menejeri",
      bio: "Barcha ichki operatsiyalarni yuqori darajada boshqaradi. Mijozlar bilan aloqalar va buyurtmalarni kuzatib boradi.",
      image: "https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
      id: 3,
      name: "Bobur Alimov",
      position: "Xalqaro aloqalar bo'limi",
      bio: "Yevropa va Osiyo davlatlari bilan ishlashda katta tajribaga ega. 15 ta tilni erkin biladi.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      name: "Lola Ahmedova",
      position: "Moliya bo'limi boshlig'i",
      bio: "Moliyaviy operatsiyalar va audit sohasida 8 yillik tajribaga ega mutaxassis.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 5,
      name: "Jahongir Qodirov",
      position: "IT bo'limi rahbari",
      bio: "Kompaniya logistika tizimlarini raqamlashtirgan va zamonaviy texnologiyalarni joriy qilgan mutaxassis.",
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 6,
      name: "Dilnoza Rahmanova",
      position: "Marketing bo'limi",
      bio: "Kompaniyaning marketing va brending strategiyasini rivojlantirish bo'yicha mutaxassis.",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-logistic-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Bizning jamoa" 
          subtitle="Sizning yuklaringiz va yetkazib berishlaringiz bilan ishlayotgan professional mutaxassislar"
          centered
        />
        
        <div className="mt-12">
          <TeamSlider teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
}
