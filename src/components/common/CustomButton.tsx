import { motion } from 'motion/react';
import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function CustomButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'right',
  className = '',
}: CustomButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300 relative overflow-hidden select-none cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-brand-500 text-white shadow-premium hover:bg-brand-600 active:translate-y-0.5',
    secondary: 'bg-[#1C1917] text-brand-50 hover:bg-black shadow-premium active:translate-y-0.5',
    outline: 'border border-stone-300 text-stone-800 bg-transparent hover:border-brand-500 hover:text-brand-600 active:translate-y-0.5',
    glass: 'glass-effect text-stone-800 hover:bg-white/80 border border-white/50 shadow-sm active:translate-y-0.5',
    white: 'bg-white text-stone-900 shadow-premium-lg hover:bg-stone-50 active:translate-y-0.5 border border-stone-100',
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs uppercase tracking-wider',
    md: 'px-7 py-3.5 text-sm uppercase tracking-wider',
    lg: 'px-9 py-4.5 text-base uppercase tracking-widest',
  };

  const stretchClass = fullWidth ? 'w-full' : 'w-auto';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stretchClass} ${disabledClass} ${className}`}
    >
      {/* Premium overlay gleam effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite] pointer-events-none" />
      
      <span className="flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:scale-110">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      </span>
    </motion.button>
  );
}
