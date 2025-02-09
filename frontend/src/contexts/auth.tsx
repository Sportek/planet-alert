"use client";
import auth from "@/http/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const isUserLoggedIn = async () => {
    return !!(await auth.me())
  }

  const checkAuthStatus = async () => {
    setIsAuthenticated(await isUserLoggedIn());
    setIsLoading(false);
  };

  const logout = async () => {
    if (isLoggingOut) return;

    try {
      setIsLoggingOut(true);
      await auth.logout();
      setIsAuthenticated(false);
      router.push("/");
    } finally {
      setIsLoggingOut(false);
    }
  }

  const login = async (email: string, password: string) => {
    await auth.login(email, password);
    setIsAuthenticated(true);
    router.push("/");
  }

  const register = async (email: string, password: string, fullName: string) => {
    await auth.register(email, password, fullName);
    setIsAuthenticated(true);
    router.push("/");
  }

  useEffect(() => {
    checkAuthStatus();
    const interval = setInterval(checkAuthStatus, 1000 * 60 * 5); // 5 minutes
    return () => {
      clearInterval(interval);
      setIsAuthenticated(false);
      setIsLoading(true);
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      setIsAuthenticated,
      logout,
      login,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }
  return context;
} 