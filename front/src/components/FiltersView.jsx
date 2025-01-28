import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Spinner from './Spinner';
import TypewriterText from './TypewriterText';
import GraphsViewID from './GraphsViewID';
import GraphsViewIAxTamanio from './GraphsViewIAxTamanio';

const FiltersView = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const predefinedQuestions = [
    { value: "¿Cuál es el nivel de desarrollo de I+D de la Comunidad Valenciana?", label: "¿Cuál es el nivel de desarrollo de I+D de la Comunidad Valenciana?" },
    { value: "¿Cuál es la madurez digital en la Comunidad Valenciana?", label: "¿Cuál es la madurez digital en la Comunidad Valenciana?" },
    { value: "¿Cuáles son las IA más utilizadas por las empresas?", label: "¿Cuáles son las IA más utilizadas por las empresas?" }
  ];

  const handleQuestionChange = (e) => {
    setSelectedQuestion(e.target.value);
    // Limpiar resultados anteriores
    setResult('');
    setShowTypewriter(false);
    setShowResults(false);
    setError('');
  };

  const handleAnalysis = async () => {
    if (!selectedQuestion) {
      setError('Por favor, seleccione una pregunta antes de continuar.');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');
    setShowTypewriter(false);
    setShowResults(false);

    try { // http://localhost:7543/api/analyze
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
        setShowResults(true);
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

  const isIDQuestion = selectedQuestion === "¿Cuál es el nivel de desarrollo de I+D de la Comunidad Valenciana?";
  const isIAQuestion = selectedQuestion === "¿Cuáles son las IA más utilizadas por las empresas?";

  return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-[#003950] text-center mb-8">
          Seleccione una pregunta para analizar
        </h1>

        <div className="max-w-2xl mx-auto space-y-4 mb-8">
          <div className="flex flex-col">
            <select
              className="w-full p-4 border rounded-lg bg-white text-gray-800 border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-[#008BBF]"
              value={selectedQuestion}
              onChange={handleQuestionChange}
            >
              <option value="">Seleccione una pregunta</option>
              {predefinedQuestions.map((q) => (
                <option key={q.value} value={q.value}>
                  {q.label}
                </option>
              ))}
            </select>
          </div>

          <Button
            className="w-full bg-[#008BBF] hover:bg-[#0099cc] text-white text-lg py-6 rounded-lg"
            onClick={handleAnalysis}
            disabled={loading}
          >
            {loading ? 'Analizando...' : 'Analizar'}
          </Button>

          {error && (
            <Alert variant="destructive" className="border-red-500 bg-red-50">
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {loading && <Spinner />}
        </div>

        {/* Results Section with adjusted layout */}
        {showResults && (isIDQuestion || isIAQuestion) ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Graph Section */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 h-full">
              <div className="w-full h-full min-h-[600px]">
                {isIDQuestion ? <GraphsViewID /> : <GraphsViewIAxTamanio />}
              </div>
            </div>

            {/* Text Results Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#003950] mb-6">Resultados del Análisis</h2>
              <div className="prose max-w-none">
                {showTypewriter && result && <TypewriterText text={result} />}
              </div>
            </div>
          </div>
        ) : showResults && (
          <div className="mt-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#003950] mb-6">Resultados del Análisis</h2>
            {showTypewriter && result && <TypewriterText text={result} />}
          </div>
        )}
      </div>
    </div>
  );
};
export default FiltersView;