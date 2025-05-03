
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

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

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Logistika sohasida zamonaviy texnologiyalar",
      slug: "logistika-zamonaviy-texnologiyalar",
      excerpt: "Zamonaviy texnologiyalar logistika sohasiga qanday ta'sir ko'rsatmoqda va ularning foydali tomonlari haqida.",
      date: "2023-06-15",
      author: "Aziz Karimov",
      image: "https://images.unsplash.com/photo-1518544648533-94c5d37f9b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1623539341961-1d3d0438101e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1607465151935-8f868605cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Qadoqlash"
    }
  ];

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date function
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

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
              {filteredPosts.map((post, index) => (
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

          {/* Pagination (simplified, without actual functionality) */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Oldingi</Button>
              <Button size="sm" className="bg-primary">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Keyingi</Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPage;
