"use client";
import Loader from "@/components/loader";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {

  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);


  if (!isAuthenticated) {
    return <Loader />;
  }

  return <div>{children}</div>;
};


export default AppLayout;




