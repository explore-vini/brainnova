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
  const footerLinks = {
    support: {
      title: 'Support',
      links: ['Documentation', 'Contact']
    },
    company: {
      title: 'Company',
      links: ['About Us', 'Blog', 'Services']
    },
    legal: {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Partners']
    }
  };

  return (
    <footer className="bg-[#003950] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Email subscription */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex-1 max-w-md">
            <h2 className="text-lg font-semibold mb-2">BRAINNOVA</h2>
            <p className="text-gray-300">
              Embrace the transformative power of cryptocurrency
            </p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Input 
              type="email" 
              placeholder="Escribe tu email" 
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 w-full md:w-64"
            />
            <Button className="bg-[#008BBF] hover:bg-[#0099cc] whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            {/* Espacio reservado para logos */}
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media */}
        <div className="flex justify-start space-x-4">
          <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          <Youtube className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;