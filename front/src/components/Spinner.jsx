import React from 'react';

const Spinner = ({ message = 'Procesando respuesta...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-t-[#008BBF] border-opacity-25 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#008BBF] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-[#003950]">{message}</p>
    </div>
  );
};

export default Spinner;