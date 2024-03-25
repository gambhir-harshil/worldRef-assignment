"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthStore from "@/store/AuthStore";
import { toast } from "sonner";

const useAuth = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};

export default useAuth;
