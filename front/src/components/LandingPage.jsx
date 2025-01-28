import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import FiltersView from './FiltersView';
import ChatView from './ChatView';
import GraphsView from './GraphsView';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';

const LandingPage = ({ onNavigate }) => {
  const [selectedSection, setSelectedSection] = useState('filters');

  // Esta función se llama tanto desde MainContent como desde el Sidebar
  const handleSectionChange = (section) => {
    // Actualizamos el estado con la nueva sección
    setSelectedSection(section);
  };

  // Exponer la función de cambio de sección al componente padre
  useEffect(() => {
    if (typeof onNavigate === 'function') {
      onNavigate(handleSectionChange);
    }
  }, [onNavigate]);

  const renderSecondSection = () => {
    switch (selectedSection) {
      case 'graphs':
        return <GraphsView />;
      case 'chat':
        return <ChatView />;
      case 'filters':
        return <FiltersView />;
      default:
        return <FiltersView />;
    }
  };

  return (
    <div>
      {/* MainContent section */}
      <section>
        <MainContent onSectionChange={handleSectionChange} />
      </section>
      
      {/* Dynamic second section */}
      <section>
        {renderSecondSection()}
      </section>

      {/* About section - static */}
      <section>
        <AboutSection />
      </section>

      {/* Features section - static */}
      <section>
        <FeaturesSection />
      </section>
    </div>
  );
};

export default LandingPage;