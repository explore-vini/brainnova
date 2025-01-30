import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraphsViewDigitalMaturity = () => {
  // Data matching the image
  const data = [
    { sector: "Actividades inmobiliarias", percentage: 0.6 },
    { sector: "Actividades financieras y de seguros", percentage: 1.1 },
    { sector: "Otros servicios", percentage: 1.6 },
    { sector: "Suministro de energía eléctrica, gas, vapor y aire acondicionado", percentage: 2.2 },
    { sector: "Actividades profesionales, científicas y técnicas", percentage: 2.4 },
    { sector: "Comercio al por mayor y al por menor; reparación de vehículos de motor y motocicletas", percentage: 3.7 },
    { sector: "Actividades sanitarias y de servicios sociales", percentage: 4.0 },
    { sector: "Hostelería", percentage: 4.6 },
    { sector: "Actividades administrativas y servicios auxiliares", percentage: 4.6 },
    { sector: "Construcción", percentage: 5.3 },
    { sector: "Actividades artísticas, recreativas y de entretenimiento", percentage: 5.5 },
    { sector: "Transporte y almacenamiento", percentage: 5.5 },
    { sector: "Información y comunicaciones", percentage: 9.3 },
    { sector: "Educación", percentage: 7.9 },
    { sector: "Suministro de agua, act", percentage: 13.5 },
    { sector: "Industria manufacturera", percentage: 21.8 },
    { sector: "Industrias extractivas", percentage: 26.4 }
  ].sort((a, b) => a.percentage - b.percentage);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].payload.sector}</p>
          <p className="text-[#036283]">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-bold text-[#003950] mb-6">
        Porcentaje de Empresas Medianas y Grandes por Sector
      </h2>
      <div className="w-full h-[800px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 220, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" unit="%" />
            <YAxis 
              type="category" 
              dataKey="sector" 
              width={200}
              tick={{ 
                fill: '#666',
                fontSize: 12,
                textAnchor: 'end',
                width: 200
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="percentage" 
              fill="#036283"
              radius={[0, 4, 4, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphsViewDigitalMaturity;