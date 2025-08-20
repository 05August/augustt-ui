import React from 'react';
import { InputProps } from './Input.types';
import { cn } from '../../lib/cn';

export const Input: React.FC<InputProps> = ({ placeholder, className = '', ...restProps }) => (
  <input
    placeholder={placeholder}
    className={cn(
      'px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
      className,
    )}
    {...restProps}
  />
);