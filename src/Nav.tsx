import { Menu } from "lucide-react";
import Button from "./components/Button";

const Nav = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0A0A1A]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="https://forcythe.com/images/forcythe%20logo.svg"
          alt=""
          className=""
        />
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-white hover:text-white">
            About
          </a>
          <a href="#services" className="text-white hover:text-white">
            Services
          </a>
          <a href="#portfolio" className="text-white hover:text-white">
            Portfolio
          </a>
          <a href="#foundation" className="text-white hover:text-white">
            Foundation
          </a>
        </div>
        <div className="md:block hidden">
          <Button showIcon={false} />
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
