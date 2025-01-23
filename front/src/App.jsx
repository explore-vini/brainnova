import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ChatView from './components/ChatView';
import FiltersView from './components/FiltersView';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import GraphsView from './components/GraphsView';

const App = () => {
  const [currentView, setCurrentView] = useState('main');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false);
  };

  // Función para renderizar la vista actual
  const renderCurrentView = () => {
    switch (currentView) {
      case 'main':
        return <MainContent onChatClick={() => handleNavigation('chat')} onNavigate={handleNavigation} />;
      case 'chat':
        return <ChatView />;
      case 'filters':
        return <FiltersView />;
      case 'graphs':
        return <GraphsView />;
      default:
        return <MainContent onChatClick={() => handleNavigation('chat')} onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onNavigate={handleNavigation}
      />
      {renderCurrentView()}
      <Footer />
    </div>
  );
};

export default App;