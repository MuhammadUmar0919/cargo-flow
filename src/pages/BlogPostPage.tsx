
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  Clock, 
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  MessageSquare,
  ThumbsUp
} from "lucide-react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";

// Define blog post type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage: string;
  image: string;
  category: string;
  readTime: string;
  tags: string[];
  relatedPosts: RelatedPost[];
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the post data based on the slug
  // For now, we'll use mock data
  const post: BlogPost = {
    id: "1",
    title: "Logistika sohasida zamonaviy texnologiyalar",
    slug: "logistika-zamonaviy-texnologiyalar",
    excerpt: "Zamonaviy texnologiyalar logistika sohasiga qanday ta'sir ko'rsatmoqda va ularning foydali tomonlari haqida.",
    content: `
      <p>Logistika sanoati so'nggi yillarda texnologik inqilob tufayli jiddiy o'zgarishlarga duch kelmoqda. Zamonaviy texnologiyalar tufayli kompaniyalar o'z operatsiyalarini optimallashtirishi va yuk tashish hamda yetkazib berish jarayonlarini yanada samarali boshqarishi mumkin.</p>

      <h2>Sun'iy intellekt va mashinalar o'rganishi</h2>
      <p>Sun'iy intellekt va mashinalar o'rganishi logistika sohasida keng qo'llanilmoqda. Bu texnologiyalar yuk oqimlarini bashorat qilish, transport marshrutlarini optimallashtirish va mijozlar bilan muloqotni avtomatlashtirish imkonini beradi.</p>
      <p>Masalan, AI algoritmlari yordamida kompaniyalar mijozlar talabini aniqroq bashorat qilishi, transport vositalarini samaraliroq taqsimlashi va yetkazib berish vaqtini qisqartirishi mumkin.</p>

      <h2>Blokcheyn texnologiyasi</h2>
      <p>Blokcheyn texnologiyasi logistika zanjirida shaffoflikni oshirish, xavfsizlikni ta'minlash va hujjatlar aylanishini soddalashtirish uchun katta imkoniyatlar yaratmoqda.</p>
      <p>Bu texnologiya yordamida barcha tomonlar yuk harakatini real vaqt rejimida kuzatishi, kerakli hujjatlarni tezkor va xavfsiz almashishi va shartnomalarga rioya qilishni ta'minlashi mumkin.</p>

      <h2>Internet of Things (IoT)</h2>
      <p>IoT qurilmalari - bu sensorlar, GPS-trekerlar va boshqa monitoring qurilmalari logistikada muhim rol o'ynaydi. Ular yuklarni kuzatish, harorat va namlikni nazorat qilish, transport vositalarining holatini monitoring qilish imkonini beradi.</p>
      <p>IoT yordamida kompaniyalar o'z aktivlarini samaraliroq boshqarishi, yuklar xavfsizligini ta'minlashi va operatsion samaradorlikni oshirishi mumkin.</p>

      <h2>Robototexnika va avtomatlashtirish</h2>
      <p>Omborlarda va logistika markazlarida robototexnika va avtomatlashtirish tizimlarini joriy etish mehnat unumdorligini sezilarli darajada oshiradi. Avtomatlashtirilgan transport vositalari (AGV), robotlar va konveyer tizimlari yuklarni saralash, joylash va tashish jarayonlarini tezlashtiradi.</p>
      <p>Bunday tizimlar insoniy xatolarni kamaytirish, operatsion xarajatlarni qisqartirish va ish jarayonlarini tezlashtirish imkonini beradi.</p>

      <h2>Kengaytirilgan va virtual reallik</h2>
      <p>AR va VR texnologiyalari logistikada ham qo'llanilmoqda. AR ko'zoynaklar omborda mahsulotlarni tezroq topish va saralashda yordam beradi, VR esa xodimlarni o'qitish va tayyorlash uchun ishlatilmoqda.</p>
      <p>Bu texnologiyalar logistika jarayonlarini vizualizatsiya qilish, xodimlarni samaraliroq o'qitish va texnik xizmat ko'rsatish jarayonlarini takomillashtirish imkonini beradi.</p>

      <h2>Big Data va analitika</h2>
      <p>Katta hajmdagi ma'lumotlarni tahlil qilish orqali logistika kompaniyalari aniqroq bashoratlar qilishi, xarajatlarni optimallashtirishi va mijozlar uchun xizmat sifatini yaxshilashi mumkin.</p>
      <p>Ma'lumotlarni tahlil qilish transport marshrutlarini optimallashtirish, omborlarni samarali boshqarish va logistika tarmoqlarini strategik rejalashtirish imkonini beradi.</p>

      <h2>Xulosa</h2>
      <p>Zamonaviy texnologiyalar logistika sohasini tubdan o'zgartirib, jarayonlarni samaraliroq, tezroq va xavfsizroq qilmoqda. Kompaniyalar raqobatbardoshlikni saqlash uchun bu texnologiyalarni o'z bizneslariga integratsiya qilishi muhim. Kelajakda esa sun'iy intellekt, robototexnika va boshqa innovatsion texnologiyalarning yanada keng qo'llanilishi kutilmoqda.</p>
    `,
    date: "2023-06-15",
    author: "Aziz Karimov",
    authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Texnologiya",
    readTime: "8 daqiqa",
    tags: ["Texnologiya", "AI", "IoT", "Blokcheyn", "Logistika innovatsiyalari"],
    relatedPosts: [
      {
        id: "2",
        title: "Xalqaro tashish: qoidalar va talablar",
        slug: "xalqaro-tashish-qoidalar",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "3",
        title: "Yuk tashishda ekologik yechimlar",
        slug: "ekologik-yechimlar",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "4",
        title: "Avtomobil tashishni optimallashtirish",
        slug: "avtomobil-tashishni-optimallashtirish",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };

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
      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-6">
            <Link to="/blog">
              <Button variant="ghost" className="pl-0">
                <ChevronLeft className="mr-1 h-4 w-4" /> Orqaga
              </Button>
            </Link>
          </div>

          {/* Hero section */}
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime} o'qish
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
              </div>
            </motion.div>

            {/* Featured image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10 vh-[15%] "
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full vh-[200px] object-cover rounded-xl shadow-md"
              />
            </motion.div>

            {/* Post content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none dark:prose-invert mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="border-t border-border pt-6 mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-secondary/20">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Ulashish:</span>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Author bio */}
            <Card className="mb-16">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Senior logistika mutaxassisi</p>
                    <p className="text-sm">Logistika va yuk tashish sohasida 10 yildan ortiq tajribaga ega mutaxassis. Xalqaro transport va zamonaviy logistika bo'yicha ekspert.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactions */}
            <div className="flex justify-center gap-4 mb-16">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="h-4 w-4" /> Foydali (23)
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" /> Izoh qoldirish
              </Button>
            </div>

            {/* Related posts */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">O'xshash maqolalar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogPostPage;
