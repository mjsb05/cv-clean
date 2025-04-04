import React from 'react';

const Button = ({ 
  children, 
  variant = 'contained', 
  color = 'primary', 
  ...props 
}) => {
  const baseStyle = {
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    minWidth: '150px',
    transition: 'all 0.3s ease'
  };

  const variants = {
    contained: {
      backgroundColor: color === 'primary' ? '#1976d2' : '#f5f5f5',
      color: color === 'primary' ? 'white' : '#333'
    },
    outlined: {
      backgroundColor: 'transparent',
      color: color === 'primary' ? '#1976d2' : '#333',
      border: `2px solid ${color === 'primary' ? '#1976d2' : '#333'}`
    },
    text: {
      backgroundColor: 'transparent',
      color: color === 'primary' ? '#1976d2' : '#333',
      border: 'none'
    }
  };

  return (
    <button style={{ ...baseStyle, ...variants[variant] }} {...props}>
      {children}
    </button>
  );
};

export default Button;