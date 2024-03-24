import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 min-h-12 flex justify-between px-8 py-4 border-b">
      <span>WordRef</span>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
