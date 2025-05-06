
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Define blog post type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

 // Sample blog posts data
 const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Logistika sohasida zamonaviy texnologiyalar",
    slug: "logistika-zamonaviy-texnologiyalar",
    excerpt: "Zamonaviy texnologiyalar logistika sohasiga qanday ta'sir ko'rsatmoqda va ularning foydali tomonlari haqida.",
    date: "2023-06-15",
    author: "Aziz Karimov",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Texnologiya"
  },
  {
    id: "2",
    title: "Xalqaro tashish: qoidalar va talablar",
    slug: "xalqaro-tashish-qoidalar",
    excerpt: "Xalqaro yuk tashishda qanday qoidalar mavjud va qanday talablar qo'yiladi? Barcha ma'lumotlar bir joyda.",
    date: "2023-05-22",
    author: "Nodira Karimova",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Xalqaro"
  },
  {
    id: "3",
    title: "Yuk tashishda ekologik yechimlar",
    slug: "ekologik-yechimlar",
    excerpt: "Atrof-muhitni muhofaza qilish va barqaror rivojlanish: logistikada qanday ekologik yechimlar mavjud?",
    date: "2023-04-10",
    author: "Shoxruh Qosimov",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Ekologiya"
  },
  {
    id: "4",
    title: "Avtomobil tashishni optimallashtirish",
    slug: "avtomobil-tashishni-optimallashtirish",
    excerpt: "Avtomobil tashishning samaradorligini oshirish va xarajatlarni kamaytirish usullari haqida.",
    date: "2023-03-18",
    author: "Kamola Usmonova",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Avtomobil tashish"
  },
  {
    id: "5",
    title: "Logistikada xavfsizlik masalalari",
    slug: "logistikada-xavfsizlik",
    excerpt: "Yuk tashishda xavfsizlikni ta'minlash va risklarni kamaytirish usullari haqida batafsil ma'lumot.",
    date: "2023-02-05",
    author: "Jahongir Toshmatov",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Xavfsizlik"
  },
  {
    id: "6",
    title: "Yuklarni qadoqlashning zamonaviy usullari",
    slug: "yuklarni-qadoqlash",
    excerpt: "Yuklarni xavfsiz va samarali qadoqlash usullari, yangi materiallar va texnologiyalar haqida.",
    date: "2023-01-12",
    author: "Sevara Akbarova",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Qadoqlash"
  },
  {
    id: "7",
    title: "Logistik tizimlarni raqamlashtirish",
    slug: "logistik-tizimlarni-raqamlashtirish",
    excerpt: "Raqamli texnologiyalar logistika tizimlarining samaradorligini qanday oshirishi mumkin.",
    date: "2023-07-05",
    author: "Laziz Raximov",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Texnologiya"
  },
  {
    id: "8",
    title: "Omborxona boshqaruvi samaradorligini oshirish",
    slug: "omborxona-boshqaruvi",
    excerpt: "Zamonaviy omborxonada samaradorlikni oshirish uchun eng yaxshi amaliyotlar va texnologiyalar.",
    date: "2023-08-18",
    author: "Alisher Qodirov",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Boshqaruv"
  },
  {
    id: "9",
    title: "Logistika sohasida sun'iy intellekt",
    slug: "logistika-suniy-intellekt",
    excerpt: "Sun'iy intellekt logistika jarayonlarini qanday o'zgartirmoqda va optimallashtirayotgani haqida.",
    date: "2023-09-25",
    author: "Feruza Yusupova",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Innovatsiya"
  },
  {
    id: "10",
    title: "Temir yo'l logistikasi: imkoniyatlar va muammolar",
    slug: "temir-yol-logistikasi",
    excerpt: "Temir yo'l orqali yuk tashishning afzalliklari va kamchiliklari haqida batafsil ma'lumot.",
    date: "2023-10-12",
    author: "Bobur Toshpulatov",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Transport"
  },
  {
    id: "11",
    title: "Xalqaro savdo va logistika munosabatlari",
    slug: "xalqaro-savdo-logistika",
    excerpt: "Xalqaro savdo va logistika sohasidagi o'zgarishlar va yangi imkoniyatlar.",
    date: "2023-11-07",
    author: "Malika Azimova",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Xalqaro"
  },
  {
    id: "12",
    title: "Logistika kompaniyalarida moliyaviy rejalashtirish",
    slug: "moliyaviy-rejalashtirish",
    excerpt: "Logistika biznesida moliyaviy rejalashtirish va budjetlashtirish strategiyalari.",
    date: "2023-12-19",
    author: "Rustam Madaliyev",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Moliya"
  },
  {
    id: "13",
    title: "IoT texnologiyalarining logistikadagi o'rni",
    slug: "iot-logistikada",
    excerpt: "Internet of Things (IoT) texnologiyalari logistika jarayonlarini qanday yaxshilashi mumkin?",
    date: "2024-01-08",
    author: "Lola Shodmonova",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Texnologiya"
  },
  {
    id: "14",
    title: "Logistika bozorida raqobat strategiyalari",
    slug: "raqobat-strategiyalari",
    excerpt: "Logistika sohasida raqobatbardoshlikni oshirish va strategik ustunlikka erishish usullari.",
    date: "2024-02-14",
    author: "Mansur Hasanov",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Biznes"
  },
  {
    id: "15",
    title: "Qishloq xo'jaligi mahsulotlarini tashish xususiyatlari",
    slug: "qishloq-xojaligi-mahsulotlari",
    excerpt: "Qishloq xo'jaligi mahsulotlarini saqlash va tashish jarayonidagi asosiy qoidalar va amaliyotlar.",
    date: "2024-03-20",
    author: "Dilshod Umarov",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Qishloq xo'jaligi"
  },
  {
    id: "16",
    title: "Logistikada mijozlar bilan munosabatlarni boshqarish",
    slug: "mijozlar-munosabatlari",
    excerpt: "Mijozlar bilan samarali munosabatlarni o'rnatish va rivojlantirish strategiyalari.",
    date: "2024-04-05",
    author: "Ozoda Najmiddinova",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Menejment"
  },
  {
    id: "17",
    title: "Elektron transport hujjatlari tizimi",
    slug: "elektron-hujjatlar",
    excerpt: "Elektron transport hujjatlari tizimiga o'tish: afzalliklari va qiyinchiliklari.",
    date: "2024-04-28",
    author: "Zafar Po'latov",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Texnologiya"
  },
  {
    id: "18",
    title: "Logistika sohasidagi kadrlar tayyorlash",
    slug: "kadrlar-tayyorlash",
    excerpt: "Logistika sohasida malakali kadrlar tayyorlash va ularni rivojlantirish yo'llari.",
    date: "2024-05-10",
    author: "Gulnora Saidova",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Ta'lim"
  },
];

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Format date function
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-logistic-900 via-logistic-800 to-logistic-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog va Yangiliklar
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Logistika sohasidagi eng so'nggi yangiliklar, foydali maqolalar va maslahatlar
            </motion.p>
            
            <motion.div 
              className="max-w-md w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Qidirish..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Qidiruv bo'yicha hech narsa topilmadi</h2>
              <p className="text-muted-foreground mb-6">Boshqa kalit so'zlar bilan qayta urinib ko'ring</p>
              <Button onClick={() => setSearchTerm("")}>
                Barcha maqolalarni ko'rish
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <div className="bg-white dark:bg-logistic-950/40 rounded-lg shadow-md overflow-hidden h-full border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary">
                            Batafsil <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

        {/* Pagination - only show if we have more than 1 page */}
        {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => paginate(currentPage - 1)} 
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    // For better UX, only show a limited range of page numbers
                    const pageNum = i + 1;
                    // Always show first, last, current and pages close to current
                    if (
                      pageNum === 1 || 
                      pageNum === totalPages || 
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={i}>
                          <PaginationLink 
                            isActive={currentPage === pageNum}
                            onClick={() => paginate(pageNum)}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    // Show ellipsis for page breaks
                    if (
                      (pageNum === 2 && currentPage > 3) ||
                      (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <PaginationEllipsis key={i} />;
                    }
                    return null;
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => paginate(currentPage + 1)} 
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPage;
