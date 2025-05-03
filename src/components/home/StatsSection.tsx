
import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import { Building, Package, Users, Globe } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatsSection() {
  const stats: StatItem[] = [
    {
      icon: <Building className="h-6 w-6" />,
      value: 15,
      suffix: "+",
      label: "Yillik tajriba"
    },
    {
      icon: <Package className="h-6 w-6" />,
      value: 10000,
      suffix: "+",
      label: "Muvaffaqiyatli yetkazilgan yuklar"
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: 500,
      suffix: "+",
      label: "Doimiy mijozlar"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: 50,
      suffix: "+",
      label: "Davlatlar bilan hamkorlik"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-logistic-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-logistic-950/50 border border-border p-6 rounded-lg text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  delay={0.2 * index}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
