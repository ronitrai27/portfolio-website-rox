import { AnimatedThemeTogglerDemo } from "./Theme";
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-6 left-10 
        z-50  
        w-fit bg-gray-300 dark:bg-white/20 backdrop-blur-xl
        rounded-full py-1 px-8 flex items-center justify-between gap-5
        border border-white/20 dark:border-white/10
        shadow-lg shadow-black/10
      "
    >
      {/* Logo */}
      <h1 className="text-[22px] font-bold font-sora tracking-wide">ROX</h1>

      {/* Icons */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          <Github size={24} />
        </a>

        <AnimatedThemeTogglerDemo />
      </div>
    </nav>
  );
};

export default Navbar;
