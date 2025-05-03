import { useState } from "react";
import { cn } from "@/lib/utils";

interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  className?: string;
}

export function PartnerLogo({ name, logoUrl, className }: PartnerLogoProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Get initials from the partner name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className={cn(
      "flex items-center justify-center h-full w-full bg-white rounded-lg", 
      className
    )}>
      {!imageError ? (
        <img
          src={logoUrl}
          alt={name}
          className="h-12 max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-md"
          onError={handleImageError}
        />
      ) : (
        <div className="h-12 max-w-[150px] flex items-center justify-center bg-primary/10 rounded-md px-4">
          <span className="text-primary font-bold text-lg">{getInitials(name)}</span>
        </div>
      )}
    </div>
  );
}
