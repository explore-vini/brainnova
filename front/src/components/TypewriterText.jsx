import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 20 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, currentIndex, speed]);

  // Procesar el texto para mantener el formato
  const formattedText = displayedText.split('\n').map((paragraph, index) => (
    paragraph ? (
      <p key={index} className="mb-4 text-gray-700">
        {paragraph}
      </p>
    ) : <br key={index} />
  ));

  return (
    <div className="prose max-w-none">
      {formattedText}
    </div>
  );
};

export default TypewriterText;import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, currentIndex, speed]);

  // Procesar el texto para mantener el formato
  const formattedText = displayedText.split('\n').map((paragraph, index) => (
    paragraph ? (
      <p key={index} className="mb-4 text-gray-700">
        {paragraph}
      </p>
    ) : <br key={index} />
  ));

  return (
    <div className="prose max-w-none">
      {formattedText}
    </div>
  );
};

export default TypewriterText;