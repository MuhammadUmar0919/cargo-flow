
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTransition from "@/components/animations/PageTransition";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Calculator, Calculator as CalculatorIcon, TruckIcon } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const formSchema = z.object({
  cargoType: z.string().min(1, "Yuk turini tanlang"),
  weight: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Og'irlik musbat son bo'lishi kerak",
  }),
  volume: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Hajm musbat son bo'lishi kerak",
  }),
  fromCity: z.string().min(1, "Qayerdan jo'natilishini tanlang"),
  toCity: z.string().min(1, "Qayerga yetkazilishini tanlang"),
  distance: z.string().optional(),
  deliveryType: z.string().min(1, "Yetkazib berish turini tanlang"),
});

type FormValues = z.infer<typeof formSchema>;

const CalculatorPage = () => {
  const [calculationResult, setCalculationResult] = useState<{
    price: number;
    duration: string;
    distance: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cargoType: "",
      weight: "",
      volume: "",
      fromCity: "",
      toCity: "",
      distance: "",
      deliveryType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate calculation
    const weight = parseFloat(data.weight);
    const volume = parseFloat(data.volume);
    const basePrice = weight * 2000 + volume * 500000;
    
    // Different multipliers based on cargo type
    let typeMultiplier = 1;
    switch (data.cargoType) {
      case "fragile":
        typeMultiplier = 1.5;
        break;
      case "dangerous":
        typeMultiplier = 2;
        break;
      case "perishable":
        typeMultiplier = 1.3;
        break;
      default:
        typeMultiplier = 1;
    }
    
    // Different multipliers based on delivery type
    let deliveryMultiplier = 1;
    let durationDays = "5-7";
    switch (data.deliveryType) {
      case "express":
        deliveryMultiplier = 2;
        durationDays = "1-2";
        break;
      case "standard":
        deliveryMultiplier = 1;
        durationDays = "3-5";
        break;
      case "economy":
        deliveryMultiplier = 0.8;
        durationDays = "7-10";
        break;
    }
    
    // Random distance between cities (in a real app, this would be calculated)
    const distance = Math.floor(Math.random() * 800) + 200;
    
    const finalPrice = basePrice * typeMultiplier * deliveryMultiplier;
    
    setCalculationResult({
      price: Math.round(finalPrice / 1000) * 1000, // Round to nearest thousand
      duration: durationDays,
      distance: distance,
    });
    
    toast.success("Hisoblash muvaffaqiyatli yakunlandi!");
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <section className="bg-gray-50 dark:bg-logistic-950/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Yuk tashish kalkulyatori"
            subtitle="Yuklaringizni tashish narxlari va yetkazib berish vaqtini hisoblang"
            centered
          />

          <div className="max-w-4xl mx-auto bg-white dark:bg-logistic-900/30 shadow-lg rounded-xl p-6 md:p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="cargoType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Yuk turi</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Yuk turini tanlang" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="standard">Standart yuk</SelectItem>
                                  <SelectItem value="fragile">Mo'rt yuk</SelectItem>
                                  <SelectItem value="dangerous">Xavfli yuk</SelectItem>
                                  <SelectItem value="perishable">Tez buziluvchi</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Og'irlik (kg)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Misol: 10"
                                    type="number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="volume"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Hajm (m³)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Misol: 0.5"
                                    type="number"
                                    step="0.01"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="fromCity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Qayerdan</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Shaharni tanlang" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="tashkent">Toshkent</SelectItem>
                                  <SelectItem value="samarkand">Samarqand</SelectItem>
                                  <SelectItem value="bukhara">Buxoro</SelectItem>
                                  <SelectItem value="namangan">Namangan</SelectItem>
                                  <SelectItem value="andijan">Andijon</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="toCity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Qayerga</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Shaharni tanlang" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="tashkent">Toshkent</SelectItem>
                                  <SelectItem value="samarkand">Samarqand</SelectItem>
                                  <SelectItem value="bukhara">Buxoro</SelectItem>
                                  <SelectItem value="namangan">Namangan</SelectItem>
                                  <SelectItem value="andijan">Andijon</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="deliveryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Yetkazib berish turi</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Yetkazib berish turini tanlang" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="express">Ekspress (1-2 kun)</SelectItem>
                                  <SelectItem value="standard">Standart (3-5 kun)</SelectItem>
                                  <SelectItem value="economy">Ekonom (7-10 kun)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button type="submit" className="w-full">
                          <CalculatorIcon className="h-5 w-5 mr-2" /> Hisoblash
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
              </div>

              <div className="flex flex-col">
                {calculationResult ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary-foreground dark:bg-logistic-950/50 rounded-xl p-6 border border-border h-full flex flex-col"
                  >
                    <div className="mb-4 pb-4 border-b border-border">
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <TruckIcon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-2">
                        Hisoblash natijalari
                      </h3>
                    </div>

                    <div className="space-y-6 flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Narx:</span>
                        <span className="text-2xl font-bold">
                          {calculationResult.price.toLocaleString()} so'm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Yetkazib berish vaqti:</span>
                        <span className="font-semibold">{calculationResult.duration} kun</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Masofa:</span>
                        <span className="font-semibold">{calculationResult.distance} km</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border">
                      <Link to="/order">
                        <Button className="w-full">Buyurtma berish</Button>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-primary-foreground dark:bg-logistic-950/50 rounded-xl p-6 border border-border">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <Calculator className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Yuk ma'lumotlarini kiriting</h3>
                      <p className="text-muted-foreground">
                        Yuklaringizni tashish narxi va muddatini hisoblash uchun chap tomondagi formani to'ldiring.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CalculatorPage;
