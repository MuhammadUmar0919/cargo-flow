
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, TruckIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Order {
  id: string;
  date: string;
  type: string;
  destination: string;
  status: "processing" | "shipping" | "delivered" | "cancelled";
  trackingId: string;
  amount: number;
}

const ProfileOrdersPage = () => {
  // Sample orders data
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-2023-001",
      date: "2023-06-15",
      type: "Xalqaro yuk",
      destination: "Toshkent - Istanbul",
      status: "delivered",
      trackingId: "TRK12345",
      amount: 1200000
    },
    {
      id: "ORD-2023-002",
      date: "2023-07-22",
      type: "Mahalliy yuk",
      destination: "Toshkent - Samarqand",
      status: "shipping",
      trackingId: "TRK12346",
      amount: 450000
    },
    {
      id: "ORD-2023-003",
      date: "2023-08-10",
      type: "Ekspress yetkazish",
      destination: "Toshkent - Andijon",
      status: "processing",
      trackingId: "TRK12347",
      amount: 250000
    }
  ]);

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Jarayonda</Badge>;
      case "shipping":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Yo'lda</Badge>;
      case "delivered":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Yetkazildi</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">Bekor qilindi</Badge>;
      default:
        return <Badge variant="outline">Noma'lum</Badge>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mening buyurtmalarim</h1>
      </div>

      {orders.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Buyurtma ID</TableHead>
                <TableHead>Sana</TableHead>
                <TableHead>Yuk turi</TableHead>
                <TableHead>Manzil</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Harakat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString('uz-UZ')}</TableCell>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>{order.destination}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" /> Ko'rish
                      </Button>
                      <Button variant="outline" size="sm">
                        <TruckIcon className="h-4 w-4 mr-1" /> Kuzatish
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <Package className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="font-semibold text-xl mb-1">Buyurtmalar yo'q</h3>
          <p className="text-muted-foreground mb-6">Siz hali birorta buyurtma bermadingiz</p>
          <Button>
            Buyurtma berish
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default ProfileOrdersPage;
