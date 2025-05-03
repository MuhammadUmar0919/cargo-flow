
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Moon, Sun, Bell, Globe, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProfileSettingsPage = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const [settings, setSettings] = useState({
    darkMode: true,
    emailNotifications: true,
    smsNotifications: false,
    language: "uz",
    // Security
    twoFactorAuth: false,
  });
  
  const handleToggleChange = (field: string) => {
    setSettings({ ...settings, [field]: !settings[field as keyof typeof settings] });
  };
  
  const handleSave = () => {
    toast({
      title: "Sozlamalar saqlandi",
      description: "Sozlamalarni o'zgartirish muvaffaqiyatli amalga oshirildi.",
    });
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sozlamalar</h1>
        <Button onClick={handleSave}>Saqlash</Button>
      </div>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-4">Interfeys</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <Label htmlFor="dark-mode">Tungi rejim</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Interfeys ranglarini tungi rejimga o'zgartirish
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={settings.darkMode}
                onCheckedChange={() => handleToggleChange("darkMode")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <Label>Til</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Interfeys tilini tanlash
                </p>
              </div>
              <select 
                className="p-2 border rounded-md bg-background"
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              >
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold mb-4">Bildirishnomalar</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif">Email orqali xabarlar</Label>
                <p className="text-sm text-muted-foreground">
                  Muhim xabarlarni email orqali olish
                </p>
              </div>
              <Switch
                id="email-notif"
                checked={settings.emailNotifications}
                onCheckedChange={() => handleToggleChange("emailNotifications")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-notif">SMS xabarlar</Label>
                <p className="text-sm text-muted-foreground">
                  Buyurtmalar holati haqida SMS xabarlarni olish
                </p>
              </div>
              <Switch
                id="sms-notif"
                checked={settings.smsNotifications}
                onCheckedChange={() => handleToggleChange("smsNotifications")}
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold mb-4">Xavfsizlik</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="current-password">Joriy parol</Label>
              <div className="flex mt-1 relative">
                <Input
                  id="current-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="new-password">Yangi parol</Label>
              <div className="flex mt-1 relative">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="pr-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="confirm-password">Parolni tasdiqlash</Label>
              <div className="flex mt-1 relative">
                <Input
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="pr-10"
                />
              </div>
            </div>
            
            <Button className="mt-2">Parolni o'zgartirish</Button>
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <Label htmlFor="2fa">Ikki faktorli autentifikatsiya</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Qo'shimcha xavfsizlik uchun ikki faktorli autentifikatsiyani yoqing
              </p>
            </div>
            <Switch
              id="2fa"
              checked={settings.twoFactorAuth}
              onCheckedChange={() => handleToggleChange("twoFactorAuth")}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProfileSettingsPage;
