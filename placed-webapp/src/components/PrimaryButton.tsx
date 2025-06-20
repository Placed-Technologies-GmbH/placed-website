import { ArrowRight } from 'lucide-react';
import { Button, ButtonProps } from './ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {
  label?: string;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ label = 'Demo buchen', className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'bg-[#EBFF4A] text-gray-900 font-semibold text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-md shadow-yellow-200/50 hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200 ease-in-out inline-flex items-center gap-x-2 group',
          className
        )}
        aria-label="Jetzt Demo buchen"
        {...props}
      >
        {children ?? label}
        <ArrowRight className="h-5 w-5 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
