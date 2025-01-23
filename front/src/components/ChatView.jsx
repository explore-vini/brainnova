import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, FileDown } from 'lucide-react';

const ChatView = () => {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#003950] text-center mb-12">
          ¿En qué puedo ayudarte?
        </h1>

        <div className="space-y-6">
          {/* Chat input area */}
          <div className="relative">
            <Input
              type="text"
              className="w-full px-6 py-8 rounded-2xl border-2 border-gray-200 pr-16"
              placeholder="Escribe tu mensaje aquí..."
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#008BBF] text-white hover:bg-[#0099cc] transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>

          {/* Download report button */}
          <div className="flex justify-start">
            <Button 
              variant="outline"
              className="flex items-center gap-2 text-[#008BBF] border-[#008BBF] hover:bg-[#008BBF] hover:text-white transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Descargar reporte
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatView;