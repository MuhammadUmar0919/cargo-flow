
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wrench, Home } from "lucide-react";

interface PageUnderConstructionProps {
  title: string;
  description?: string;
}

export default function PageUnderConstruction({
  title,
  description = "Bu sahifa hozirda ishlab chiqilmoqda. Tez orada yangiliklar bilan qaytamiz!",
}: PageUnderConstructionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Wrench className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link to="/">
          <Button>
            <Home className="mr-2 h-4 w-4" /> Bosh sahifaga qaytish
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
