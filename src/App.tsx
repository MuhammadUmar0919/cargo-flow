
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";
import { AuthProvider } from "@/lib/auth";

// Import page components
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetail from "@/pages/ServiceDetail";
import CalculatorPage from "@/pages/CalculatorPage";
import OrderPage from "@/pages/OrderPage";
import ContactPage from "@/pages/ContactPage";
import FaqPage from "@/pages/FaqPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ProfilePage from "@/pages/auth/ProfilePage";
import ProfileInfoPage from "@/pages/auth/ProfileInfoPage";
import ProfileOrdersPage from "@/pages/auth/ProfileOrdersPage";
import ProfileNotificationsPage from "@/pages/auth/ProfileNotificationsPage";
import ProfileSettingsPage from "@/pages/auth/ProfileSettingsPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="logistic-theme">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Profile routes with nested routes */}
              <Route path="/profile" element={<ProfilePage />}>
                <Route index element={<ProfileInfoPage />} />
                <Route path="orders" element={<ProfileOrdersPage />} />
                <Route path="notifications" element={<ProfileNotificationsPage />} />
                <Route path="settings" element={<ProfileSettingsPage />} />
              </Route>
              
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
