import React from 'react';
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from '../styles/FeaturesSection.styles';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 6h-2V4c0-.55-.45-1-1-1h-11c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2v2h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM7.5 5h9v14h-9V5z"/>
        </svg>
      ),
      title: 'Premium Gym Access',
      description: 'Unlimited access to 10,000+ gyms, fitness studios, and wellness centers nationwide including top brands like LA Fitness, Gold\'s Gym, and boutique studios.',
      color: '#0066cc'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12zm-10-3.5L8 9l-1.5 1.5L5 9l1.5 1.5L5 12l1.5 1.5L8 12l-1.5-1.5L8 9l3 3.5zM16 10h-2V8h2v2zm3 0h-2V8h2v2z"/>
        </svg>
      ),
      title: 'Telehealth Services',
      description: '24/7 virtual doctor visits, online consultations with licensed physicians, mental health support, and prescription services from the comfort of home.',
      color: '#3388dd'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      title: 'Nutrition Programs',
      description: 'Personalized meal plans, nutritionist consultations, diet tracking tools, and access to healthy meal delivery discounts for optimal wellness.',
      color: '#00d4aa'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2C3.85 12.53 4.08 13 4.5 13H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7zm3 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      ),
      title: 'Mental Health Support',
      description: 'Confidential counseling sessions, stress management resources, meditation apps, and licensed therapist access for emotional well-being.',
      color: '#ff6b6b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 8h-1c-.55-1.24-1.64-2.18-3-2.45V4c0-1.1-.9-2-2-2s-2 .9-2 2v1.55c-1.36.27-2.45 1.21-3 2.45H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-4c.55 0 1 .45 1 1v1.03c-.33-.03-.66-.03-1-.03s-.67 0-1 .03V5c0-.55.45-1 1-1zm0 8c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
        </svg>
      ),
      title: 'Preventive Care',
      description: 'Annual health screenings, wellness checkups, vaccination programs, and early detection services to maintain optimal health and prevent illness.',
      color: '#a855f7'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <circle cx="12" cy="11" r="2" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      title: 'Wellness Rewards',
      description: 'Earn points for healthy activities, fitness goals, and preventive care visits. Redeem for gift cards, fitness gear, and wellness products.',
      color: '#ec4899'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesContent>
        <SectionTitle>Exclusive Health & Wellness Benefits</SectionTitle>
        <SectionDescription>
          Comprehensive wellness programs that transform your health journey with affordable, accessible care.
        </SectionDescription>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
