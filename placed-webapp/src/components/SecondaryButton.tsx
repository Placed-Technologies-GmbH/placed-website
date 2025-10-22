import {ArrowRight} from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

interface SecondaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  href?: string
}

const SecondaryButton = React.forwardRef<HTMLAnchorElement, SecondaryButtonProps>(
  ({ label = 'Zur App', href = 'https://app.getplaced.de', className, children, ...props }, ref) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-x-2 px-6 py-2.5 rounded-full border-2 border-work-blue text-work-blue font-semibold text-base hover:bg-work-blue hover:text-white transition-all duration-200 group',
          className,
        )}
        aria-label="Zur PLACED App"
        {...props}
      >
        {children ?? label}
        <ArrowRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1" />
      </a>
    )
  },
)
SecondaryButton.displayName = 'SecondaryButton'

export default SecondaryButton
