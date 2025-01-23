import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Spinner from './Spinner';
import TypewriterText from './TypewriterText';

const FiltersView = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [showTypewriter, setShowTypewriter] = useState(false);

  const predefinedQuestions = [
    { value: "¿Cuál es el nivel de desarrollo de I+D de la Comunidad Valenciana?", label: "¿Cuál es el nivel de desarrollo de I+D de la Comunidad Valenciana?" },
    { value: "¿Cuál es la madurez digital en la Comunidad Valenciana?", label: "¿Cuál es la madurez digital en la Comunidad Valenciana?" },
    { value: "¿Cuáles son las IA más utilizadas por las empresas?", label: "¿Cuáles son las IA más utilizadas por las empresas?" }
  ];

  const handleAnalysis = async () => {
    if (!selectedQuestion) {
      setError('Por favor, seleccione una pregunta antes de continuar.');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');
    setShowTypewriter(false);

    try { 
      const response = await fetch('https://cloudia.explorevini.com:7543/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pregunta: selectedQuestion
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      
      if (data.status === 'success' && data.data) {
        setResult(data.data);
        setShowTypewriter(true);
      } else {
        throw new Error('Formato de respuesta inválido');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un error al procesar su solicitud. Por favor, intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#003950] text-center mb-12">
          Seleccione una pregunta para analizar
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Question selector */}
          <div className="flex flex-col space-y-2">
            <select
              className="w-full p-4 border rounded-lg bg-white text-gray-800 border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-[#008BBF]"
              value={selectedQuestion}
              onChange={(e) => setSelectedQuestion(e.target.value)}
            >
              <option value="">Seleccione una pregunta</option>
              {predefinedQuestions.map((q) => (
                <option key={q.value} value={q.value}>
                  {q.label}
                </option>
              ))}
            </select>
          </div>

          {/* Analysis button */}
          <Button
            className="w-full bg-[#008BBF] hover:bg-[#0099cc] text-white text-lg py-6 rounded-lg"
            onClick={handleAnalysis}
            disabled={loading}
          >
            {loading ? 'Analizando...' : 'Analizar'}
          </Button>

          {/* Error message */}
          {error && (
            <Alert variant="destructive" className="border-red-500 bg-red-50">
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Loading spinner */}
          {loading && <Spinner />}

          {/* Results */}
          {showTypewriter && result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-[#003950] mb-4">Resultados del Análisis</h2>
              <TypewriterText text={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersView;