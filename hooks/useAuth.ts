import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthStore from "@/store/AuthStore";

const useAuth = () => {
  const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};

export default useAuth;
