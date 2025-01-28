import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Círculos interconectados - Mantenemos la imagen original */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-126 h-126">
              <img 
                src="/Circulo.png" 
                alt="Diagrama de funcionalidades" 
                className="w-full h-full object-contain"
              />
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
              <h3 className="text-2xl text-white font-medium">
                Plataforma Integral de Conocimiento en Economía Digital
              </h3>
              
              <p className="text-gray-300 text-lg">
                Herramienta interactiva y personalizable, basada en agentes de Inteligencia Artificial, que permite la recopilación y análisis de datos sobre tecnologías, emprendimiento digital e innovación, con el fin de facilitar la definición de políticas públicas y servicios empresariales en la Comunidad Valenciana.
              </p>

              <div className="space-y-2">
                <h4 className="text-xl text-white font-medium mb-4">
                  Indicadores en tiempo real
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
                    Interactividad: Interfaz en lenguaje natural
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
                    Tiempo Real: Recolección y visualización de datos con IA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
                    Correlación de Datos: Ejes estratégicos y transversales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
                    Personalización: Datos a nivel individual y comparaciones sectoriales y geográficas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
                    Adaptabilidad: Satisface necesidades de administraciones, empresas, ciudadanos y el Ecosistema de Innovación
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;