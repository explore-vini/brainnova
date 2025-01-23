import React from 'react';
import Card from './Card';

const MainContent = ({ onSectionChange }) => {
  const cards = [
    {
      title: "GRÁFICAS",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Activo",
      onClick: () => onSectionChange('graphs')
    },
    {
      title: "FILTROS",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Selecciona",
      onClick: () => onSectionChange('filters')
    },
    {
      title: "CHATEA",
      description: "Explore the transformative power of blockchain, forging trust and integrity in transactions across diverse industriescommerce",
      status: "Selecciona",
      onClick: () => onSectionChange('chat')
    }
  ];

  return (
    <div className="bg-[#003950] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Quantico:wght@700&family=Poppins:wght@200;300&display=swap');
          `}
        </style>
        <div className="mb-16">
          <h1 className="text-8xl font-bold text-white tracking-[-0.55px] uppercase font-quantico leading-tight text-left">
            BRAINNOVA
          </h1>
          <p className="text-[40px] font-poppins font-extralight text-white leading-[45px] tracking-[-0.06px] capitalize max-w-[1021px] text-left mt-8">
            Plataforma Avanzada Valenciana de Innovación, Economía Digital y Sostenibilidad
          </p>
        </div>

        <div className="max-w-[963px] mx-auto">
          <h2 className="text-[30px] font-poppins font-light text-[#9ECDDE] leading-[45px] tracking-[1.5px] uppercase text-left mb-16">
            ELIGE COMO QUIERES VISUALIZAR TU INFORMACIÓN
          </h2>
        </div>
        
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
    </div>
  );
};

export default MainContent;