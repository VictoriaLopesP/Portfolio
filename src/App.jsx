import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';

export default function App() {
  const [showButton, setShowButton] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
      <Hero />
      <About />
      <Habilidades />
      <Projetos />

      {showButton && (
        <button 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#FFC84C',
            color: '#000',
            padding: '15px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: '"Chakra Petch", sans-serif',
            fontSize: '16px',
          }}
          onClick={scrollToTop}
        >
          Voltar para o Início
        </button>
      )}
    </>
  );
}
