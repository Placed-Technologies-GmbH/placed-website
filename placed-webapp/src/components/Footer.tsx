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
            <p className="text-gray-500 text-sm leading-snug max-w-xs">
              Die KI-Vertriebsplattform für die Personalbranche.
            </p>
            <a
              href="https://www.linkedin.com/company/placed-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-work-blue hover:underline"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start md:col-span-2 md:justify-self-end">
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
        <div className="border-t border-gray-100 mt-8 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© 2025 Placed Technologies GmbH</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:underline">Datenschutz</a>
              <a href="/impressum" target="_blank" rel="noopener noreferrer" className="hover:underline">Impressum</a>
              <a href="/agb" target="_blank" rel="noopener noreferrer" className="hover:underline">AGB</a>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
