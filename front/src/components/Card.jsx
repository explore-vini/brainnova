import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, description, status, onClick }) => {
  return (
    <div 
      className="relative bg-gradient-to-br from-[#5790AB] to-[#062539] rounded-3xl p-6 text-white h-[300px] flex flex-col justify-between group hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div className="absolute top-6 right-6">
        <div className="bg-white/20 px-4 py-1 rounded-full text-sm">
          {status}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-3xl font-bold font-poppins">{title}</h3>
        <p className="text-sm text-gray-200 font-hind">{description}</p>
      </div>

      <div>
        <Button 
          variant="default"
          className="bg-[#036283] hover:bg-[#064469] text-white group-hover:gap-3 transition-all duration-200 flex items-center gap-2"
        >
          VER DATOS
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Card;import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, description, status, onClick }) => {
  return (
    <div 
      className="relative bg-gradient-to-br from-[#2696BC] to-[#003950] rounded-3xl p-6 text-white h-[300px] flex flex-col justify-between group hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* <div className="absolute top-6 right-6">
        {status && (
          <div className="bg-white/20 px-4 py-1 rounded-full text-sm">
            {status}
          </div>
        )}
      </div> */}
      
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>

      {/* <div>
        <Button 
          className="bg-[#008BBF] hover:bg-[#0099cc] text-white group-hover:gap-3 transition-all duration-200 flex items-center gap-2"
        >
          VER DATOS
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div> */}
    </div>
  );
};

export default Card;