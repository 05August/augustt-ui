// Auto-generated bundle - All types included
import React from 'react';
import { type ClassValue } from 'clsx';

// Types
import type { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
}


import type { InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    className?: string;
}


import type { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}


// Functions
import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;


// Components
export declare const Button: React.FC<ButtonProps>;
export declare const Input: React.FC<InputProps>;
export declare const Card: React.FC<CardProps>;
