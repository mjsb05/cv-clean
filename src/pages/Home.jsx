import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9fafb;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  
  h1, h2, h3, h4 {
    font-weight: 600;
    line-height: 1.2;
  }
  
  button {
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  }

  .app-bar {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: rgba(26, 54, 93, 0.95);
    color: white;
    padding: 0.5rem 4%;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(8px);
    transition: all 0.4s ease;
    max-width: calc(100% - 1rem);
  }
  
  .app-bar.hidden {
    top: auto;
    bottom: 0.5rem;
    transform: none;
    opacity: 0.95;
    box-shadow: 0 -2px 15px rgba(0,0,0,0.1);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .logo-img {
    height: 45px; /* Aumenté ligeramente el tamaño */
    width: auto;
    object-fit: contain;
  }

  .logo-text {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: white;
  }
`;

const Home = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <GlobalStyle />
      <div style={{ minHeight: '100vh' }}>
        {/* AppBar con nueva imagen actualizada */}
        <header className={`app-bar ${hidden ? 'hidden' : ''}`}>
          <div className="logo-container">
            <img 
              src="https://i.postimg.cc/4HZskJVQ/logo.png" 
              alt="CV Clean Logo" 
              className="logo-img"
            />
            <h1 className="logo-text">CVClean</h1>
          </div>
          
          <nav style={{ 
            display: 'flex', 
            gap: '1rem',
            margin: '0.3rem 0'
          }}>
            <button style={{ 
              color: 'white', 
              background: 'none', 
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: 500,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}>
              Iniciar Sesión
            </button>
            <button style={{ 
              color: '#1a365d', 
              backgroundColor: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: 600,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#ebf8ff'
              }
            }}>
              Registrarse
            </button>
          </nav>
        </header>

        {/* Contenido principal */}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 4%',
          gap: '2.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            flex: 1,
            minWidth: '300px',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem'
          }}>
            <h2 style={{ 
              fontSize: '2.3rem',
              margin: 0,
              color: '#2d3748',
              fontWeight: 700,
              lineHeight: '1.2'
            }}>
              Crea el <span style={{ color: '#4299e1' }}>currículum perfecto</span> en minutos
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#4a5568'
            }}>
              Diseña tu CV de forma fácil y profesional, ¡Prepárate para destacar!
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '0.8rem 1.6rem',
                backgroundColor: '#4299e1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '170px',
                boxShadow: '0 4px 6px rgba(66, 153, 225, 0.3)',
                '&:hover': {
                  backgroundColor: '#3182ce'
                }
              }}>
                Comenzar Ahora
              </button>
              
              <button style={{
                padding: '0.8rem 1.6rem',
                backgroundColor: 'transparent',
                color: '#4299e1',
                border: '2px solid #4299e1',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '170px',
                '&:hover': {
                  backgroundColor: '#ebf8ff'
                }
              }}>
                Ver Ejemplos
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.2rem',
              marginTop: '0.8rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#4a5568' }}>Plantillas profesionales</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#4a5568' }}>Exportación en PDF</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#4a5568' }}>Asesoramiento personalizado</span>
              </div>
            </div>
          </div>
          
          <div style={{
            flex: 1,
            minWidth: '300px',
            maxWidth: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              paddingBottom: '66.66%',
              backgroundColor: '#e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Ilustración CV profesional" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.2rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: 'white'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Ejemplo de CV profesional</h3>
                <p style={{ margin: '0.4rem 0 0', opacity: 0.9, fontSize: '0.9rem' }}>Diseño limpio y moderno</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;