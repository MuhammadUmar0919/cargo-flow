
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User, Package, Bell, Settings, LogOut, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function ProfileSidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems: NavItem[] = [
    {
      href: "/profile",
      label: "Shaxsiy ma'lumotlar",
      icon: <User className="h-5 w-5" />
    },
    {
      href: "/profile/orders",
      label: "Mening buyurtmalarim",
      icon: <Package className="h-5 w-5" />
    },
    {
      href: "/profile/notifications",
      label: "Bildirishnomalar",
      icon: <Bell className="h-5 w-5" />
    },
    {
      href: "/profile/settings",
      label: "Sozlamalar",
      icon: <Settings className="h-5 w-5" />
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full md:w-64 bg-white dark:bg-logistic-950/50 border-r border-border p-4">
      <div className="space-y-4">
        {/* User profile section */}
        <div className="flex flex-col items-center text-center p-4 mb-6 border-b border-border pb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
            <img 
              src={user?.image || "https://randomuser.me/api/portraits/men/41.jpg"} 
              alt={user?.name || "User"} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg">{user?.displayName || user?.name || "Foydalanuvchi"}</h3>
          <p className="text-muted-foreground text-sm mb-2">{user?.email || "example@mail.com"}</p>
          
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Phone</span>
            </Button>
          </div>

          <Badge variant="outline" className="mt-3">Premium mijoz</Badge>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Mening profilim</h2>
          <p className="text-sm text-muted-foreground">Shaxsiy ma'lumotlarni boshqarish</p>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pt-6 mt-6 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Chiqish
          </Button>
        </div>
      </div>
    </div>
  );
}
