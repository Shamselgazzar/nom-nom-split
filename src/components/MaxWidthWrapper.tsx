import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'h-full w-full mx-auto max-w-screen-xl px-2.5 sm:px-10 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
