import { ModeToggle } from "@/components/mode-toggle";
import useAuthStore from "@/store/AuthStore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "sonner";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = () => {
    toast("Logged out succesfully!");
    logout();
  };

  return (
    <nav className="sticky top-0 h-20 flex justify-between items-center px-8 py-4 border-b">
      <span className="text-2xl font-semibold">WorldRef</span>
      <div className="flex gap-4 items-center">
        {!isAuthenticated ? (
          <span
            onClick={() => router.push("/login")}
            className="bg-primary text-secondary px-3 py-1 rounded-md font-semibold cursor-pointer"
          >
            Login
          </span>
        ) : (
          <span
            onClick={handleLogout}
            className="bg-primary text-secondary px-3 py-1 rounded-md font-semibold cursor-pointer"
          >
            Logout
          </span>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
