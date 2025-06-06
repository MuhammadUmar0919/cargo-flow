
import { Link } from "react-router-dom";
import { AuthForm } from "@/components/auth/AuthForm";
import PageTransition from "@/components/animations/PageTransition";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Tizimga kirish
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground mt-2"
            >
              Hisobingizga kirish uchun ma'lumotlaringizni kiriting
            </motion.p>
          </div>
          
          <div className="bg-white dark:bg-logistic-950/50 p-6 md:p-8 rounded-xl shadow-md border border-border">
            <AuthForm type="login" />
            
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Hisobingiz yo'qmi?{" "}
                <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                  Ro'yxatdan o'ting
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LoginPage;
