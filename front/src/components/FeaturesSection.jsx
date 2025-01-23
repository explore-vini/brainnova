import React from 'react';
import { Target, MessageSquare, Lightbulb, BarChart3, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      number: "1",
      title: "Uso de IA y Aprendizaje Automático",
      icon: <Target className="w-12 h-12" />
    },
    {
      number: "2",
      title: "Interfaz con Lenguaje Natural",
      icon: <MessageSquare className="w-12 h-12" />
    },
    {
      number: "3",
      title: "Herramientas de Colaboración Abierta",
      icon: <Lightbulb className="w-12 h-12" />
    },
    {
      number: "4",
      title: "Herramientas de Visualización de Datos",
      icon: <BarChart3 className="w-12 h-12" />
    },
    {
      number: "5",
      title: "Sostenibilidad y Economía Circular",
      icon: <Globe className="w-12 h-12" />
    }
  ];

  return (
    <div className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#003950] text-center mb-16">
          Carácter Innovador Del Proyecto
        </h2>

        <div className="relative">
          {/* Línea conectora */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden lg:block" />

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Número */}
                <div className="bg-[#B8D1DC] text-[#003950] w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                  {feature.number}
                </div>
                
                {/* Icono */}
                <div className="bg-[#003950] text-white w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                
                {/* Título */}
                <h3 className="text-[#003950] font-semibold">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;