import React from 'react';
import Header from '../components/Header/Header';
import HeroImage from '../components/MainContent/HeroImage';
import TextSection from '../components/MainContent/TextSection';

const Home = () => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        gap: '2rem'
      }}>
        <HeroImage />
        <TextSection />
      </main>
    </div>
  );
}

export default Home;