import { Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';

const Footer = () => {
  return (
    <footer className="mt-32 bg-background font-acid min-h-fit">
      <FadeIn>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-16 items-start">
          {/* Left column */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/Placed_LogoLockup_Blue.svg"
              alt="PLACED Logo"
              className="h-8 w-auto"
              loading="lazy"
            />
            <p className="text-gray-500 text-sm leading-snug">
              KI-gestützte Recruiting-Software der nächsten Generation.
            </p>
            <a
              href="https://www.linkedin.com/company/placed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-work-blue hover:underline"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Middle column */}
          <div className="flex flex-col items-start space-y-2">
            <a href="/datenschutz" className="text-sm text-work-blue hover:underline">
              Datenschutzerklärung
            </a>
            <a href="/impressum" className="text-sm text-work-blue hover:underline">
              Impressum
            </a>
            <a href="/agb" className="text-sm text-work-blue hover:underline">
              AGB
            </a>
          </div>
          {/* Right column */}
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-center md:text-left mb-3">
              100% konform nach DSGVO, EU AI Act &amp; GVP-Richtlinien
            </p>
            <div className="flex gap-4 flex-wrap justify-start items-center">
              <img
                src="/DGSVO.png"
                alt="DSGVO"
                className="h-12 md:h-14 object-contain"
                loading="lazy"
              />
              <img
                src="/EU_AI_Act.png"
                alt="EU AI Act"
                className="h-12 md:h-14 object-contain"
                loading="lazy"
              />
              <img
                src="/GVP-Logo_Mitglied_RGB_blau.png"
                alt="GVP Mitglied"
                className="h-12 md:h-14 object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>
        <p className="text-xs text-gray-400 text-center mt-10">
          © 2024 PLACED. Made in Germany.
        </p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
