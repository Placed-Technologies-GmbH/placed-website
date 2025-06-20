import { ReactNode } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: Props) {
  const ref = useFadeInOnScroll(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
