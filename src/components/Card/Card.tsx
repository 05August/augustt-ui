import React from 'react';
import { CardProps } from './Card.types';
import { cn } from '../../lib/cn';

export const Card: React.FC<CardProps> = ({ className = '', children, ...restProps }) => (
	<div className={cn('card', className)} {...restProps}>
		{children}
	</div>
);
