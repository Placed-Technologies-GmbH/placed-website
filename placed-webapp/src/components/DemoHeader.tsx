import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { cn } from '@/lib/utils';

const DemoHeader = () => {
  const location = useLocation();
  const isMeetingPage = location.pathname === '/demo' || location.pathname === '/demo/meeting/booked';

  return (
    <header className={cn(
      "top-0 w-full z-50 bg-white border-b border-gray-100",
      !isMeetingPage && "fixed"
    )}>
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
          
          {/* Demo Button - hidden on meeting pages */}
          {!isMeetingPage && (
            <PrimaryButton data-gtm="demo-buchen-header" />
          )}
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;

