import React from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-gcr8-purple-950 text-white hover:bg-gcr8-purple-900 shadow-lg shadow-gcr8-purple-950/20',
    secondary: 'bg-white text-gcr8-purple-950 border border-gcr8-purple-950/10 hover:bg-gray-50',
    outline: 'bg-transparent border-2 border-gcr8-purple-950 text-gcr8-purple-950 hover:bg-gcr8-purple-950 hover:text-white',
    ghost: 'bg-transparent text-gcr8-purple-950 hover:bg-gcr8-purple-950/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}
    </button>
  );
};
