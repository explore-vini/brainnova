import React from 'react';
import { 
  MessageSquare, 
  Home,
  LayoutDashboard,
  Filter,
  Info,
  User
} from 'lucide-react';

const Sidebar = ({ isOpen, onNavigate }) => {
  const scrollToSection = (targetPosition) => {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (section) => {
    // Obtener la posición del segundo componente
    const secondSection = document.querySelector('section:nth-child(2)');
    const secondSectionPosition = secondSection?.offsetTop || 0;

    switch (section) {
      case 'main':
        scrollToSection(0);
        break;
      
      case 'graphs':
      case 'filters':
      case 'chat':
        // Primero actualizamos la vista
        onNavigate(section);
        // Luego hacemos scroll
        setTimeout(() => {
          scrollToSection(secondSectionPosition);
        }, 100);
        break;
      
      case 'about':
        scrollToSection(document.documentElement.scrollHeight);
        break;
      
      default:
        onNavigate(section);
        break;
    }
  };

  const menuItems = [
    { icon: <Home size={24} />, label: 'Inicio', section: 'main' },
    { icon: <LayoutDashboard size={24} />, label: 'Dashboard', section: 'graphs' },
    { icon: <Filter size={24} />, label: 'Filtros', section: 'filters' },
    { icon: <MessageSquare size={24} />, label: 'Chat', section: 'chat' },
    { icon: <User size={24} />, label: 'Usuario', section: 'user' },
    { icon: <Info size={24} />, label: 'Acerca de Brainnova', section: 'about' }
  ];

  if (!isOpen) return null;

  return (
    <div className="h-full pt-16 w-64">
      <div className="px-4 py-6">
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">BRAINNOVA</span>
        </div>
      </div>

      <nav className="px-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.section)}
                className="w-full flex items-center space-x-4 p-3 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                <div className="text-gray-300 min-w-[24px]">
                  {item.icon}
                </div>
                <span className="text-base text-gray-200 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;