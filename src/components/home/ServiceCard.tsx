
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, slug, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-logistic-950/50 rounded-xl shadow-md p-6 card-hover border border-border"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={`/services/${slug}`}
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        Batafsil <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </motion.div>
  );
}
