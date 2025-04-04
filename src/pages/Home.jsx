import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Estilos globales para una apariencia más profesional
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
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9fafb'
      }}>
        {/* Header mejorado */}
        <header style={{
          backgroundColor: '#1a365d',
          color: 'white',
          padding: '1.5rem 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          {/* Logo mejorado */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              backgroundColor: 'white',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a365d',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              CV
            </div>
            <h1 style={{ 
              margin: 0, 
              fontSize: '1.6rem',
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}>
              <span style={{ color: '#4299e1' }}>CV</span> Clean
            </h1>
          </div>
          
          {/* Botones de navegación mejorados */}
          <nav style={{ 
            display: 'flex', 
            gap: '1.25rem',
            margin: '0.5rem 0'
          }}>
            <button style={{ 
              color: 'white', 
              background: 'none', 
              border: 'none',
              padding: '0.6rem 1.2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: '6px',
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
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
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

        {/* Contenido principal mejorado */}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap-reverse', // Cambiado para mejor responsividad
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 5%',
          gap: '3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Sección de texto mejorada */}
          <div style={{
            flex: 1,
            minWidth: '300px',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              margin: 0,
              color: '#2d3748',
              fontWeight: 700,
              lineHeight: '1.2'
            }}>
              Crea el <span style={{ color: '#4299e1' }}>currículum perfecto</span> en minutos
            </h2>
            
            <p style={{ 
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: '#4a5568'
            }}>
              Con nuestra plataforma podrás diseñar un currículum profesional que se adapte a cualquier puesto de trabajo. Plantillas modernas, consejos personalizados y exportación en múltiples formatos.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1.25rem',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '0.9rem 1.8rem',
                backgroundColor: '#4299e1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.05rem',
                fontWeight: 600,
                minWidth: '180px',
                boxShadow: '0 4px 6px rgba(66, 153, 225, 0.3)',
                '&:hover': {
                  backgroundColor: '#3182ce'
                }
              }}>
                Comenzar Ahora
              </button>
              
              <button style={{
                padding: '0.9rem 1.8rem',
                backgroundColor: 'transparent',
                color: '#4299e1',
                border: '2px solid #4299e1',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.05rem',
                fontWeight: 600,
                minWidth: '180px',
                '&:hover': {
                  backgroundColor: '#ebf8ff'
                }
              }}>
                Ver Ejemplos
              </button>
            </div>
            
            {/* Características destacadas */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.8rem'
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
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.8rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#4a5568' }}>Exportación en PDF/Word</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#4299e1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.8rem'
                }}>
                  ✓
                </div>
                <span style={{ color: '#4a5568' }}>Asesoramiento personalizado</span>
              </div>
            </div>
          </div>
          
          {/* Sección de imagen mejorada */}
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
              paddingBottom: '66.66%', // Proporción 3:2
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
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: 'white'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Ejemplo de CV profesional</h3>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>Diseño limpio y moderno</p>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer profesional */}
        <footer style={{
          backgroundColor: '#1a365d',
          color: 'white',
          padding: '2rem 5%',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
              width: '100%'
            }}>
              <div style={{ minWidth: '150px' }}>
                <h3 style={{ 
                  color: '#4299e1',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  Producto
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Características</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plantillas</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Precios</a></li>
                </ul>
              </div>
              
              <div style={{ minWidth: '150px' }}>
                <h3 style={{ 
                  color: '#4299e1',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  Empresa
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sobre nosotros</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
                </ul>
              </div>
              
              <div style={{ minWidth: '150px' }}>
                <h3 style={{ 
                  color: '#4299e1',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  Legal
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacidad</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Términos</a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cookies</a></li>
                </ul>
              </div>
            </div>
            
            <div style={{ 
              width: '100%',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1.5rem',
              fontSize: '0.9rem',
              color: '#a0aec0'
            }}>
              © {new Date().getFullYear()} CV Clean. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;