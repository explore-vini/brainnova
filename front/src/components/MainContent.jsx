import React from 'react';
import Card from './Card';

const MainContent = ({ onChatClick, onNavigate }) => {
  const cards = [
    {
      title: "GRÁFICAS",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Activo",
      onClick: () => onNavigate('graphs')
    },
    {
      title: "FILTROS",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Selecciona",
      onClick: () => onNavigate('filters')
    },
    {
      title: "CHATEA",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Selecciona",
      onClick: onChatClick
    }
  ];

  return (
    <main className="min-h-screen bg-[#003950] px-6 pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-white">
            BRAINNOVA
          </h1>
          <p className="text-xl text-gray-300">
            Plataforma Avanzada Valenciana de Innovación,<br />
            Economía Digital y Sostenibilidad
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          ELIGE COMO QUIERES VISUALIZAR TU INFORMACIÓN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              status={card.status}
              onClick={card.onClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;