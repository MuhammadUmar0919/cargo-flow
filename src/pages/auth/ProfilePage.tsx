
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PageTransition from "@/components/animations/PageTransition";
import { ProfileSidebar } from "@/components/profile/ProfileSidebar";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Yuklanmoqda...</div>;
  }

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <PageTransition>
      <div className="bg-gray-50 dark:bg-logistic-950/30 pt-20 pb-12 sticky">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sticky sidebar */}
            <div className="md:sticky md:top-20 md:self-start rounded-lg">
              <ProfileSidebar />
            </div>
            
            {/* Scrollable content area */}
            <div className="flex-1 overflow-auto bg-white dark:bg-logistic-950/50 rounded-lg border border-border p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;
