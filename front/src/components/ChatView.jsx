import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, FileDown } from 'lucide-react';
import { Alert } from "@/components/ui/alert";
import Spinner from './Spinner';

const ChatView = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputMessage, 
          show_queries: true
        })
    });


      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      console.log(data)
      
      // Add bot response to chat
      const botMessage = {
        type: 'bot',
        content: data.answer,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);
      setInputMessage(''); // Clear input after sending
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un error al enviar el mensaje. Por favor, intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white px-6 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#003950] text-center mb-12">
          ¿En qué puedo ayudarte?
        </h1>

        {/* Chat messages area */}
        <div className="mb-6 space-y-4 max-h-[60vh] overflow-y-auto p-4 bg-gray-50 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-[#008BBF] text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-center">
              <Spinner />
            </div>
          )}
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            {error}
          </Alert>
        )}

        <div className="space-y-6">
          {/* Chat input area */}
          <div className="relative">
            <Input
              type="text"
              className="w-full px-6 py-8 rounded-2xl border-2 border-gray-200 pr-16"
              placeholder="Escribe tu mensaje aquí..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#008BBF] text-white hover:bg-[#0099cc] transition-colors disabled:opacity-50"
              onClick={handleSendMessage}
              disabled={loading || !inputMessage.trim()}
            >
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ChatView;