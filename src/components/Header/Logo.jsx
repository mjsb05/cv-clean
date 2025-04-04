import React from 'react';

const Logo = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      backgroundColor: 'white',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1976d2',
      fontWeight: 'bold'
    }}>
      CV
    </div>
    <h1 style={{ margin: 0, fontSize: '1.5rem' }}>CV Clean</h1>
  </div>
);

export default Logo;