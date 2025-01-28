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
              <div className="absolute text-white opacity-70">
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
              <p className="text-gray-300">
                Plataforma Integral de Conocimiento en Economía Digital es una herramienta interactiva y personalizable, basada en agentes de Inteligencia Artificial, que permite la recopilación y análisis de datos sobre tecnologías, emprendimiento digital e innovación, con el fin de facilitar la definición de políticas públicas y servicios empresariales en la Comunidad Valenciana. Próximamente, esta herramienta ampliará su cobertura hacia la sostenibilidad, la internacionalización, el talento y otras temáticas relevantes para el desarrollo de nuestra economía regional.
              </p>
              
              <p className="text-gray-300">
                Brainnova ofrece indicadores en tiempo real, permitiendo a los usuarios realizar consultas, hacer simulaciones y analizar tendencias digitales. Se caracteriza por:
              </p>

              <ul className="list-disc text-gray-300 pl-6 space-y-2">
                <li>Interactividad: Interfaz en lenguaje natural</li>
                <li>Tiempo Real: Recolección y visualización de datos con IA</li>
                <li>Correlación de Datos: Ejes estratégicos y transversales</li>
                <li>Personalización: Datos a nivel individual y comparaciones sectoriales y geográficas</li>
                <li>Adaptabilidad: Satisface necesidades de administraciones, empresas, ciudadanos y el Ecosistema de Innovación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;import React from 'react';
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