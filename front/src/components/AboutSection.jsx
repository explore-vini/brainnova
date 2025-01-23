import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#003950] to-[#006080] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Círculos interconectados - placeholder por ahora */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-96 h-96">
              {/* Aquí iría la imagen cuando esté disponible */}
              <div className="absolute text-white opacity-70">
                {/* Placeholder para la visualización */}
                <div className="text-center">
                  <span className="text-lg">Visualización pendiente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-white">
                Brainnova ¿Que es?
              </h2>
              <ArrowUpRight className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Plataforma Integral de Conocimiento en Innovación y Sostenibilidad
                </h3>
                <p className="text-gray-300">
                  BlockNet Solutions is a blockchain technology platform providing infrastructure 
                  and services to integrate blockchain into various business applications
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  ChainTech Innovations
                </h3>
                <p className="text-gray-300">
                  ChainTech Innovations is a company focused on developing blockchain 
                  technology to deliver revolutionary solutions across various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;