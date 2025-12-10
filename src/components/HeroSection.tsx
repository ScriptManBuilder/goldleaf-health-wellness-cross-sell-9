import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.goldleafhealthperks.com';

  const handleGetStarted = () => {
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Transform Your Health & Wellness Journey</Tagline>
        <HeroTitle>
          Your Path to Better Health.
          <Highlight>Affordable. Accessible. Comprehensive.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Experience a revolutionary approach to wellness with premium gym access, 24/7 telehealth services, 
          personalized nutrition guidance, mental health support, and preventive care programs. 
          Save thousands annually while achieving your health goals.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleGetStarted}>
            Get Started →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleLearnMore}>
            Get in touch
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
