"use client";
import { useAuth } from "@/contexts/auth";
import auth from "@/http/auth";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loadUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};


interface UserProviderProps {
  children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setIsAuthenticated } = useAuth();


  const router = useRouter();

  const loadUser = useCallback(async () => {
    try {
      const user = await auth.me();
      setUser(user);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      router.push("/login");
      console.error("Error loading user:", error);
    }

  }, [setIsAuthenticated, router]);


  const isUserLoaded = useRef(false);

  useEffect(() => {
    if (isUserLoaded.current) return;
    isUserLoaded.current = true;
    loadUser();
  }, [loadUser]);


  const contextValue = useMemo(
    () => ({ user, setUser, loadUser }),
    [user, setUser, loadUser],
  );

  return (
    <UserContext.Provider value={contextValue} > {children} </UserContext.Provider>
  );
};