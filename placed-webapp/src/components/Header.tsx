
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect backdrop-blur-md">
      {/* Announcement Banner */}
      <div className="bg-work-blue text-white text-center py-2 text-sm font-medium">
        PLACED launched am 24.06 beim Tag der Personaldienstleiste vom GVP am 24.06. ab 18:30 Uhr.{' '}
        <Link to="/gvp-launch" className="text-placed-blue hover:underline">
          Jetzt mehr erfahren!
        </Link>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Startseite">
            <img
              src="/Placed_LogoLockup_Blue.svg"
              alt="PLACED Logo"
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"></nav>

          <div className="hidden md:flex items-center">
            <PrimaryButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col pt-4">
              <PrimaryButton className="w-full" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
