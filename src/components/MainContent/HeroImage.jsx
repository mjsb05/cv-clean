import React from 'react';

const HeroImage = () => (
  <div style={{
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <img 
      src="https://via.placeholder.com/600x400?text=CV+Clean" 
      alt="Ilustración CV Clean" 
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    />
  </div>
);

export default HeroImage;