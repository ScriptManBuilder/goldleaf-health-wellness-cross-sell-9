import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/support') {
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C13.5 4 11.1 5 9.3 6.7L16 2L22.7 6.7C20.9 5 18.5 4 16 4Z" fill="url(#gradientVitalora1)"/>
            <path d="M16 4C10.5 4 6 8.5 6 14C6 19.5 10.5 24 16 30C21.5 24 26 19.5 26 14C26 8.5 21.5 4 16 4Z" fill="url(#gradientVitalora2)"/>
            <path d="M16 10C13.8 10 12 11.8 12 14C12 16.2 13.8 18 16 18C18.2 18 20 16.2 20 14C20 11.8 18.2 10 16 10Z" fill="white" fillOpacity="0.9"/>
            <path d="M16 12C14.9 12 14 12.9 14 14C14 15.1 14.9 16 16 16C17.1 16 18 15.1 18 14C18 12.9 17.1 12 16 12Z" fill="url(#gradientVitalora1)" fillOpacity="0.6"/>
            <circle cx="16" cy="8" r="1.2" fill="white" fillOpacity="0.85"/>
            <circle cx="12" cy="14" r="0.8" fill="white" fillOpacity="0.7"/>
            <circle cx="20" cy="14" r="0.8" fill="white" fillOpacity="0.7"/>
            <defs>
              <linearGradient id="gradientVitalora1" x1="6" y1="4" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14B8A6"/>
                <stop offset="0.5" stopColor="#0D9488"/>
                <stop offset="1" stopColor="#0F766E"/>
              </linearGradient>
              <linearGradient id="gradientVitalora2" x1="16" y1="4" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14B8A6" stopOpacity="0.9"/>
                <stop offset="1" stopColor="#0F766E"/>
              </linearGradient>
            </defs>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Vitalora'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>Industry Stats</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Customer Care</Button>
          <Button $primary onClick={handleButtonClick}>Get Started</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
