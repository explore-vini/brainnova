import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = useCallback((newSection) => {
    // Actualizar la URL hash
    window.location.hash = newSection;
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-[#003950] transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <Sidebar 
          isOpen={isSidebarOpen} 
          onNavigate={handleNavigation} 
        />
      </div>

      {/* Main content wrapper */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <Header 
          onMenuClick={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Main content */}
        <main className="min-h-screen">
          <LandingPage onNavigate={handleNavigation} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;