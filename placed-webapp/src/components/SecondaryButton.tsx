import { cn } from '@/lib/utils'
import React from 'react'

interface SecondaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  href?: string
}

const SecondaryButton = React.forwardRef<HTMLAnchorElement, SecondaryButtonProps>(
  ({ label = 'Anmelden', href = 'https://app.getplaced.de', className, children, ...props }, ref) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-x-2 px-6 py-2.5 rounded-full text-work-blue font-semibold text-base hover:bg-work-blue hover:text-white transition-all duration-200 group',
          className,
        )}
        aria-label="Anmelden"
        {...props}
      >
        {children ?? label}
      </a>
    )
  },
)
SecondaryButton.displayName = 'SecondaryButton'

export default SecondaryButton
