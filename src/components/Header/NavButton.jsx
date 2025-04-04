import React from 'react';
import Button from '../Button/Button';

const NavButtons = () => (
  <nav style={{ 
    display: 'flex', 
    gap: '1rem',
    margin: '0.5rem 0'
  }}>
    <Button variant="text" color="white">
      Iniciar Sesión
    </Button>
    <Button variant="contained" color="white" style={{ color: '#1976d2' }}>
      Registrarse
    </Button>
  </nav>
);

export default NavButtons;