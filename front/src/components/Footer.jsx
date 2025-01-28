import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="flex justify-between items-start mb-12">
          <img 
            src="/camara.png" 
            alt="Cámara Valencia Logo" 
            className="h-16 w-auto"
          />
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Escribe tu email" 
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 w-64"
            />
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-white">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex justify-between">
          {/* Left column */}
          <div className="w-1/3 space-y-8">
            <div className="space-y-4">
              <img 
                src="/logo.svg" 
                alt="Brainnova Logo" 
                className="h-6 w-auto"
              />
              <p className="text-gray-300">
                Plataforma Avanzada Valenciana de Innovación,
                <br />
                Economía Digital y Sostenibilidad
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right column - aligned with input */}
          <div className="w-1/3 space-y-12">
            {/* Sede Central */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Sede Central</h3>
              <p className="text-gray-300">C/Poeta Querol 15 – 46002 València</p>
            </div>

            {/* Legal section */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Aviso legal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Política de Cookies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;