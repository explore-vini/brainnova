import React from 'react';
import { 
  MessageSquare, 
  History, 
  FolderClosed, 
  User, 
  Calendar, 
  ListTodo,
  Home,
  LayoutDashboard,
  Filter
} from 'lucide-react';

const Sidebar = ({ isOpen, onNavigate }) => {
  const menuItems = [
    { icon: <Home size={24} />, label: 'Inicio', action: () => onNavigate('main') },
    { icon: <LayoutDashboard size={24} />, label: 'Dashboard', action: () => onNavigate('graphs') },
    { icon: <Filter size={24} />, label: 'Filtros', action: () => onNavigate('filters') },
    { icon: <MessageSquare size={24} />, label: 'Chat', action: () => onNavigate('chat') },
    { icon: <History size={24} />, label: 'Histórico', action: () => onNavigate('history') },
    { icon: <FolderClosed size={24} />, label: 'Documentos', action: () => onNavigate('documents') },
    { icon: <User size={24} />, label: 'Usuario', action: () => onNavigate('user') },
    { icon: <Calendar size={24} />, label: 'Calendario', action: () => onNavigate('calendar') },
    { icon: <ListTodo size={24} />, label: 'Listados', action: () => onNavigate('lists') },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-screen bg-[#003950] text-white w-64 pt-20 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="px-4 mb-8">
        <div className="flex items-center">
          <span className="text-xl font-bold">BRAINNOVA</span>
        </div>
      </div>

      <nav className="px-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={item.action}
                className="w-full flex items-center space-x-4 p-3 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                <div className="text-gray-300">
                  {item.icon}
                </div>
                <span className="text-base text-gray-200">
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