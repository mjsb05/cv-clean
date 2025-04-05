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
    cursor: pointer;
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
    padding: 0.8rem 5%;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(8px);
    transition: all 0.4s ease;
    max-width: calc(100% - 1rem);
    gap: 1rem;
  }
  
  .app-bar.hidden {
    top: auto;
    bottom: 0.5rem;
    transform: none;
    opacity: 0.95;
    box-shadow: 0 -2px 15px rgba(0,0,0,0.1);
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex: 1;
    min-width: 0;
  }

  .logo-img {
    height: 45px;
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
  }

  .logo-text {
    margin: 0;
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    font-weight: 700;
    letter-spacing: 0.3px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav-buttons {
    display: flex;
    gap: 0.8rem;
    margin: 0;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image-container {
    width: 100%;
    max-width: 600px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    margin-bottom: 1.5rem;
  }

  .example-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .image-caption {
    text-align: center;
    margin-top: 1rem;
    font-family: 'Georgia', serif;
    color: #2c5282;
    font-size: clamp(1rem, 3vw, 1.1rem);
    font-style: italic;
    letter-spacing: 0.5px;
    line-height: 1.6;
    width: 100%;
  }

  @media (max-width: 768px) {
    body {
      padding-top: 70px;
      padding-bottom: 70px;
    }
    
    .app-bar {
      padding: 0.6rem 5%;
      gap: 0.8rem;
    }
    
    .logo-img {
      height: 35px;
    }
  }

  @media (max-width: 480px) {
    body {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    
    .app-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
      padding: 0.5rem;
    }
    
    .logo-section {
      justify-content: center;
    }
    
    .nav-buttons {
      justify-content: space-around;
      gap: 0.5rem;
    }
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
        {/* AppBar responsiva */}
        <header className={`app-bar ${hidden ? 'hidden' : ''}`}>
          <div className="logo-section">
            <img 
              src="https://i.postimg.cc/4HZskJVQ/logo.png" 
              alt="CV Clean Logo" 
              className="logo-img"
            />
            <h1 className="logo-text">CVClean</h1>
          </div>
          
          <nav className="nav-buttons">
            <button style={{ 
              color: 'white', 
              background: 'none', 
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: 'clamp(0.8rem, 3vw, 0.95rem)',
              fontWeight: 500,
              borderRadius: '8px',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
              ':hover': {
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
              fontSize: 'clamp(0.8rem, 3vw, 0.95rem)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              ':hover': {
                backgroundColor: '#ebf8ff'
              }
            }}>
              Registrarse
            </button>
          </nav>
        </header>

        {/* Contenido principal completamente responsivo */}
        <main style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '1rem 4% 2rem',
          gap: '2.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Columna izquierda - Contenido de texto */}
          <div style={{
            flex: '1 1 400px',
            minWidth: 'min(100%, 300px)',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 5vw, 2.3rem)',
              margin: 0,
              color: '#2d3748',
              fontWeight: 700,
              lineHeight: '1.2'
            }}>
              Crea el <span style={{ color: '#4299e1' }}>currículum perfecto</span> en minutos
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.1rem)',
              lineHeight: '1.7',
              color: '#4a5568'
            }}>
              Diseña tu CV de forma fácil y profesional, ¡Prepárate para destacar!
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}>
              <button style={{
                padding: 'clamp(0.7rem, 2vw, 0.8rem) clamp(1.5rem, 4vw, 2rem)',
                backgroundColor: '#4299e1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                fontWeight: 600,
                minWidth: 'fit-content',
                boxShadow: '0 4px 6px rgba(66, 153, 225, 0.3)',
                ':hover': {
                  backgroundColor: '#3182ce'
                }
              }}>
                Comenzar Ahora
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '0.5rem'
            }}>
              {[
                "Plantillas profesionales y creativas",
                "Exportación en PDF",
                "Asesoramiento personalizado"
              ].map((item, index) => (
                <div key={index} style={{
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
                    fontSize: '0.7rem',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{ 
                    color: '#4a5568',
                    fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna derecha - Imagen y eslogan */}
          <div style={{
            flex: '1 1 400px',
            minWidth: 'min(100%, 300px)',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div className="image-container">
              <img 
                src="https://opem.b-cdn.net/wp-content/uploads/2017/09/Curriculum_CALIFORNIA-1-768x1024.jpg" 
                alt="Ejemplo de CV profesional" 
                className="example-image"
              />
            </div>
            <p className="image-caption">
              "Diseños limpios, oportunidades claras - CVClean"
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;