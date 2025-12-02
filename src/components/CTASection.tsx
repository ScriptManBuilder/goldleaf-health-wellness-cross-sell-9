import React from 'react';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTADescription,
  CTASectionButton,
  CTAFeaturesGrid,
  CTAFeatureItem,
  CTAIconWrapper,
  CTAFeatureContent,
  CTAFeatureTitle,
  CTAFeatureDescription
} from '../styles/CTASection.styles';

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
        </svg>
      ),
      title: 'Proven Results',
      description: 'Members save an average of $2,400+ annually on healthcare and wellness with comprehensive benefits'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      title: 'Instant Activation',
      description: 'Start enjoying exclusive health benefits immediately after enrollment with instant activation'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
        </svg>
      ),
      title: '24/7 Support',
      description: 'Dedicated wellness concierge and telehealth services available around the clock for your health needs'
    }
  ];

  return (
    <CTAContainer id="how-it-works">
      <CTAContent>
        <CTATitle>Start Your Wellness Journey Today</CTATitle>
        <CTADescription>
          Join thousands of members who enjoy exclusive health benefits, fitness access, and incredible savings on wellness services.
        </CTADescription>
        <CTASectionButton onClick={handleGetStarted}>Get Started Now →</CTASectionButton>
        
        <CTAFeaturesGrid>
          {features.map((feature, index) => (
            <CTAFeatureItem key={index}>
              <CTAIconWrapper>
                {feature.icon}
              </CTAIconWrapper>
              <CTAFeatureContent>
                <CTAFeatureTitle>{feature.title}</CTAFeatureTitle>
                <CTAFeatureDescription>{feature.description}</CTAFeatureDescription>
              </CTAFeatureContent>
            </CTAFeatureItem>
          ))}
        </CTAFeaturesGrid>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
