import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

interface PrimaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
}

const PrimaryButton = React.forwardRef<HTMLAnchorElement, PrimaryButtonProps>(
  ({ label = 'Demo buchen', className, children, ...props }, ref) => {
    return (
      <a
        href="https://meetings-eu1.hubspot.com/ftemel?uuid=3b67042c-5da5-41d6-868a-3b46daf91409"
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-full bg-[#EBFF4A] text-gray-900 font-semibold text-base shadow-md hover:shadow-lg hover:brightness-95 active:scale-[0.97] transition-all duration-200 group',
          className,
        )}
        aria-label="Jetzt Demo buchen"
        {...props}
      >
        {children ?? label}
        <ArrowRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1" />
      </a>
    )
  },
)
PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton

