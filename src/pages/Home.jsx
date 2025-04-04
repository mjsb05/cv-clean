import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* AppBar alternativo */}
      <header style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <h1 style={{ margin: 0 }}>CV Clean</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ color: 'white', background: 'none', border: 'none' }}>Inicio</button>
          <button style={{ color: 'white', background: 'none', border: 'none' }}>Servicios</button>
          <button style={{ color: 'white', background: 'none', border: 'none' }}>Login</button>
        </nav>
      </header>

      {/* Body alternativo */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>Bienvenido a mi página</h2>
        <p>Este es el contenido principal de tu aplicación.</p>
        <button style={{
          padding: '0.5rem 1rem',
          background: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginTop: '1rem'
        }}>
          Comenzar
        </button>
      </main>
    </div>
  );
}

export default Home; 