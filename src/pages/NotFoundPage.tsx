
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animations/PageTransition";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            404 - Sahifa topilmadi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Siz qidirayotgan sahifa mavjud emas. U o'chirilgan yoki manzili
            o'zgartirilgan bo'lishi mumkin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/">
              <Button>
                Bosh sahifaga qaytish
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
