import React, { useState } from 'react';
import MainContent from './MainContent';
import FiltersView from './FiltersView';
import ChatView from './ChatView';
import GraphsView from './GraphsView';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';

const LandingPage = ({ onNavigate }) => {
  const [selectedSection, setSelectedSection] = useState('filters');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const renderSecondSection = () => {
    switch (selectedSection) {
      case 'graphs':
        return <GraphsView />;
      case 'chat':
        return <ChatView />;
      case 'filters':
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