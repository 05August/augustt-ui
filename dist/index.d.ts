import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import type { FC } from 'react';

export declare function cn(...inputs: any[]): string;


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
}

export declare const Button: FC<ButtonProps>;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export declare const Card: FC<CardProps>;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    className?: string;
}

export declare const Input: FC<InputProps>;

