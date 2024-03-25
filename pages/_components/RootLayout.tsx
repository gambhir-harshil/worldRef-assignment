import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import Navbar from "./navbar";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster position="bottom-right" />
      <Navbar />
      <div className="h-[calc(100vh-5rem)] overflow-y-scroll p-8">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
