import React from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';

const Header = () => (
  <header style={{
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
    <Logo />
    <NavButtons />
  </header>
);

export default Header;