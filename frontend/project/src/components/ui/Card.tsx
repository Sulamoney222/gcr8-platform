import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, glass = false, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        glass 
          ? 'bg-white/10 backdrop-blur-xl border-white/20' 
          : 'bg-white border-gray-100 shadow-sm hover:shadow-md dark:bg-gcr8-purple-950/20 dark:border-white/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
