import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  CompanyInfo,
  FooterSectionTitle,
  LinkList,
  LinkItem,
  FooterLink,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  const companyName = process.env.REACT_APP_COMPANY_NAME || 'Williams Health Perks Inc.';
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Vitalora';
  const companyAddress = process.env.REACT_APP_COMPANY_ADDRESS || 'E 2ND ST 5830 Casper WY US 82609';
  const companyPhone = process.env.REACT_APP_PHONE_DISPLAY || '+1 517-258-3818';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@williamhealthperks.com';
  const companyBirth = process.env.REACT_APP_COMPANY_BIRTH || 'March 2023';

  const handleScrollTo = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C13.5 4 11.1 5 9.3 6.7L16 2L22.7 6.7C20.9 5 18.5 4 16 4Z" fill="url(#gradientVitaloraFooter1)"/>
                <path d="M16 4C10.5 4 6 8.5 6 14C6 19.5 10.5 24 16 30C21.5 24 26 19.5 26 14C26 8.5 21.5 4 16 4Z" fill="url(#gradientVitaloraFooter2)"/>
                <path d="M16 10C13.8 10 12 11.8 12 14C12 16.2 13.8 18 16 18C18.2 18 20 16.2 20 14C20 11.8 18.2 10 16 10Z" fill="white" fillOpacity="0.9"/>
                <path d="M16 12C14.9 12 14 12.9 14 14C14 15.1 14.9 16 16 16C17.1 16 18 15.1 18 14C18 12.9 17.1 12 16 12Z" fill="url(#gradientVitaloraFooter1)" fillOpacity="0.6"/>
                <circle cx="16" cy="8" r="1.2" fill="white" fillOpacity="0.85"/>
                <circle cx="12" cy="14" r="0.8" fill="white" fillOpacity="0.7"/>
                <circle cx="20" cy="14" r="0.8" fill="white" fillOpacity="0.7"/>
                <defs>
                  <linearGradient id="gradientVitaloraFooter1" x1="6" y1="4" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14B8A6"/>
                    <stop offset="0.5" stopColor="#0D9488"/>
                    <stop offset="1" stopColor="#0F766E"/>
                  </linearGradient>
                  <linearGradient id="gradientVitaloraFooter2" x1="16" y1="4" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14B8A6" stopOpacity="0.9"/>
                    <stop offset="1" stopColor="#0F766E"/>
                  </linearGradient>
                </defs>
              </svg>
              {brandName}
            </FooterLogo>
            <CompanyInfo>
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Established {companyBirth}</p>
            </CompanyInfo>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#features')}>Features</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#stats')}>Industry Stats</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#how-it-works')}>How It Works</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#faq')}>FAQ</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Legal</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/digital-products">Digital Products Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/ccpa-notice">CCPA Notice</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-processing">Data Processing Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-subject-request">Data Subject Request Form</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/e-signature">E-Signature Disclosure Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/end-user-terms">End-User Terms of Service</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/merchant-disclosure">Merchant Disclosure</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact Us</FooterSectionTitle>
            <ContactCard>
              <ContactItem>
                <ContactLabel>Email Support</ContactLabel>
                <ContactValue as="div" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {supportEmail}
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Customer Service</ContactLabel>
                <ContactValue href={`tel:${companyPhone.replace(/\s+/g, '')}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {companyPhone}
                </ContactValue>
              </ContactItem>
            </ContactCard>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p>Do you not recognize a charge on your bank statement? We can help to resolve your query quickly and efficiently.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
