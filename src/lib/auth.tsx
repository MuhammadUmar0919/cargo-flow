
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  displayName?: string;
  phoneNumber?: string;
  address?: string;
  image?: string; // Add image property
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if we have a user saved in localStorage
    const storedUser = localStorage.getItem("logistika-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to authenticate
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API delay
      
      // For demo purposes, accept any email/password with simple validation
      if (email && password && password.length >= 6) {
        const mockUser = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name: email.split("@")[0],
          displayName: email.split("@")[0],
          email,
          phoneNumber: "",
          address: "",
          image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 60) + 1}.jpg`,
        };
        localStorage.setItem("logistika-user", JSON.stringify(mockUser));
        setUser(mockUser);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to register
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API delay
      
      // For demo purposes, accept any valid data
      if (name && email && password && password.length >= 6) {
        const mockUser = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name,
          displayName: name,
          email,
          phoneNumber: "",
          address: "",
          image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 60) + 1}.jpg`,
        };
        localStorage.setItem("logistika-user", JSON.stringify(mockUser));
        setUser(mockUser);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Register error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("logistika-user");
    setUser(null);
  };

  // Include isAuthenticated in the context value
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
