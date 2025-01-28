import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className={`w-full bg-[#003950] py-4 transition-all duration-300`}>
      <div className="px-6">
        <nav className="flex justify-end items-center gap-6">
          {/* Menu button */}
          <div className="flex items-center">
            <div className="text-white mr-2">Menu</div>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-[#004d6b] p-2"
              onClick={onMenuClick}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          {/* Divisor */}
          <div className="h-6 w-px bg-gray-400/30"></div>

          {/* Contact button and Logo container */}
          <div className="flex items-center gap-6">
            <Button 
              className="bg-[#008BBF] hover:bg-[#0099cc] text-white border-none rounded-full px-6"
            >
              Contact Us
            </Button>

            {/* Cámara Valencia Logo */}
            <img 
              src="/camara.png" 
              alt="Cámara Valencia Logo" 
              className="h-12 w-auto"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;