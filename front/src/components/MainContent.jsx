import React from 'react';
import Card from './Card';

const MainContent = ({ onSectionChange }) => {
  const cards = [
    {
      title: "GRÁFICAS",
      description: "Consulta los datos con gráficos. Nuestras herramientas permiten realizar consultas detalladas para obtener insights precisos. Visualiza el impacto de la digitalización y las innovaciones tecnológicas en el mercado.",
      status: "Activo",
      onClick: () => onSectionChange('filters')
    },
    {
      title: "FILTROS",
      description: "Explora cómo las nuevas tendencias están transformando la economía digital valenciana. Interactúa con los datos en tiempo real y profundiza en el conocimiento de tu sector, tu zona, las tecnologías en uso y mucho más.",
      status: "Selecciona",
      onClick: () => onSectionChange('filters')
    },
    {
      title: "CHATEA",
      description: "Conversa con nuestra inteligencia artificial, diseñada para proporcionarte información actualizada sobre economía digital, innovación y tendencias tecnológicas. Obtén respuestas inmediatas a tus preguntas. ¡Únete a la conversación y mantente al día!",
      status: "Selecciona",
      onClick: () => onSectionChange('chat')
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#062539] via-[#036283] to-[#9ECDDE] px-6 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Quantico:wght@700&family=Poppins:wght@200;300&display=swap');
          `}
        </style>
        <div className="mb-16">
          <div className="flex items-start">
            <img src="/logo.svg" alt="Brainnova Logo" className="w-116 h-auto" />
          </div>
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