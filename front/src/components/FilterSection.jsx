import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterSection = () => {
  const [selectedTematica, setSelectedTematica] = useState("");
  const [selectedActividad, setSelectedActividad] = useState("");
  const [selectedTamano, setSelectedTamano] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");

  const handleAnalizar = () => {
    console.log('Filtros seleccionados:', {
      tematica: selectedTematica,
      actividad: selectedActividad,
      tamano: selectedTamano,
      municipio: selectedMunicipio
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Selecciona los filtros para analizar
      </h2>

      <div className="space-y-8">
        {/* Temáticas Dropdown */}
        <div className="space-y-2">
          <Select onValueChange={setSelectedTematica} value={selectedTematica}>
            <SelectTrigger className="w-full md:w-80">
              <SelectValue placeholder="Temáticas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nivel">Nivel de digitalización</SelectItem>
              <SelectItem value="infraestructura">Infraestructura tecnológica</SelectItem>
              <SelectItem value="innovacion">Innovación / I+D</SelectItem>
              <SelectItem value="comercio">Comercio electrónico y ventas online</SelectItem>
              <SelectItem value="talento">Talento / perfiles técnicos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid de 3 columnas para los otros filtros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Actividad económica */}
          <Select onValueChange={setSelectedActividad} value={selectedActividad}>
            <SelectTrigger>
              <SelectValue placeholder="Actividad económica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="industria">Industria</SelectItem>
              <SelectItem value="comercio">Comercio</SelectItem>
              <SelectItem value="turismo">Turismo</SelectItem>
              <SelectItem value="construccion">Construcción</SelectItem>
              <SelectItem value="servicios">Servicios</SelectItem>
            </SelectContent>
          </Select>

          {/* Tamaño de empresa */}
          <Select onValueChange={setSelectedTamano} value={selectedTamano}>
            <SelectTrigger>
              <SelectValue placeholder="Tamaño de empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-3">0-3 trabajadores</SelectItem>
              <SelectItem value="4-9">4-9 trabajadores</SelectItem>
              <SelectItem value="0-49">0-49 trabajadores</SelectItem>
              <SelectItem value="50-99">50-99 trabajadores</SelectItem>
              <SelectItem value="100-249">100-249 trabajadores</SelectItem>
              <SelectItem value="250+">+250 trabajadores</SelectItem>
            </SelectContent>
          </Select>

          {/* Municipio y Provincia */}
          <Select onValueChange={setSelectedMunicipio} value={selectedMunicipio}>
            <SelectTrigger>
              <SelectValue placeholder="Municipio y Provincia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="valencia">Valencia</SelectItem>
              <SelectItem value="alicante">Alicante</SelectItem>
              <SelectItem value="castellon">Castellón</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Botón de Analizar */}
        <Button 
          className="w-full bg-cyan-700 hover:bg-cyan-600 text-white py-6 rounded-full mt-8"
          onClick={handleAnalizar}
        >
          Analizar
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;