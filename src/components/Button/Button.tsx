import React from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '../../lib/cn';

export const Button: React.FC<ButtonProps> = ({ label, className = '', ...restProps }) => (
  <button
    className={cn(
      'px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
      className,
    )}
    {...restProps}
  >
    {label}
  </button>
);