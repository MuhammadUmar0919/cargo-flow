
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}
