
import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Package, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const ProfileNotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "notif1",
      type: "success",
      title: "Buyurtma yetkazildi",
      message: "Sizning ORD-2023-001 buyurtmangiz manzilga yetkazildi.",
      date: "2023-06-18T10:30:00",
      read: false
    },
    {
      id: "notif2",
      type: "info",
      title: "Buyurtma yo'lda",
      message: "Sizning ORD-2023-002 buyurtmangiz hozir transportda.",
      date: "2023-07-24T14:15:00",
      read: true
    },
    {
      id: "notif3",
      type: "warning",
      title: "To'lov kutilmoqda",
      message: "ORD-2023-003 buyurtma uchun to'lovni amalga oshiring.",
      date: "2023-08-11T09:45:00",
      read: false
    }
  ]);
  
  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notif => ({ ...notif, read: true }))
    );
  };
  
  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return <Bell className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uz-UZ', { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Bildirishnomalar</h1>
          {unreadCount > 0 && (
            <Badge variant="secondary">{unreadCount} yangi</Badge>
          )}
        </div>
        
        {unreadCount > 0 && (
          <Button variant="outline" onClick={markAllAsRead}>
            Hammasi o'qilgan
          </Button>
        )}
      </div>
      
      {notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border ${notification.read ? 'bg-transparent' : 'bg-muted/50'}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-muted">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{formatDate(notification.date)}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{notification.message}</p>
                </div>
                
                {!notification.read && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => markAsRead(notification.id)}
                  >
                    O'qilgan
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <Bell className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="font-semibold text-xl mb-1">Bildirishnomalar yo'q</h3>
          <p className="text-muted-foreground">
            Sizda hozircha bildirishnomalar mavjud emas
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProfileNotificationsPage;
