import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const DemoHeader = () => {
  const location = useLocation();
  const isMeetingPage = location.pathname === '/demo/meeting';

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Startseite">
            <img
              src="/Placed_LogoLockup_Blue.svg"
              alt="PLACED Logo"
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          
          {/* Demo Button - hidden on meeting page */}
          {!isMeetingPage && (
            <PrimaryButton data-gtm="demo-buchen-header" />
          )}
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;

