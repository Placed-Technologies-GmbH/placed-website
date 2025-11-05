import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DemoHeader = () => {
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
          
          {/* Demo Button */}
          <a
            href="/demo/meeting"
            className={cn(
              'inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg bg-[#EBFF4A] text-work-blue font-semibold text-base hover:bg-[#EBFF4A]/90 active:scale-[0.97] transition-all duration-200 group'
            )}
            aria-label="Demo buchen"
          >
            Demo buchen
            <ArrowRight className="h-5 w-5 text-work-blue transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;

