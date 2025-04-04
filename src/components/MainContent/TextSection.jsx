import React from 'react';
import Button from '../Button/Button';

const TextSection = () => (
  <div style={{
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <h2 style={{ 
      fontSize: '2rem',
      margin: 0,
      color: '#333'
    }}>
      Crea el currículum perfecto en minutos
    </h2>
    
    <p style={{ 
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555'
    }}>
      Con nuestra plataforma podrás diseñar un currículum profesional que se adapte a cualquier puesto de trabajo. Plantillas modernas, consejos personalizados y exportación en múltiples formatos.
    </p>
    
    <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <Button variant="contained">
        Comenzar Ahora
      </Button>
      
      <Button variant="outlined">
        Ver Ejemplos
      </Button>
    </div>
  </div>
);

export default TextSection;