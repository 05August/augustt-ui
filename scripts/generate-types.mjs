import { execSync } from 'child_process';
import { rmSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Xóa dist folder cũ
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');

// Build JavaScript files với Rollup
console.log('Building JavaScript files...');
execSync('rollup -c rollup.config.mjs', { stdio: 'inherit' });

// Generate TypeScript declarations
console.log('Generating TypeScript declarations...');
execSync('npx tsc --declaration --emitDeclarationOnly --outDir dist --project tsconfig.json --skipLibCheck', { stdio: 'inherit' });

// Tạo index.d.ts bundle hoàn chỉnh
console.log('Creating bundled index.d.ts...');

// Đọc tất cả type definitions
const cnContent = readFileSync('dist/lib/cn.d.ts', 'utf-8');
const buttonTypesContent = readFileSync('dist/components/Button/Button.types.d.ts', 'utf-8');
const buttonContent = readFileSync('dist/components/Button/Button.d.ts', 'utf-8');
const inputTypesContent = readFileSync('dist/components/Input/Input.types.d.ts', 'utf-8');
const inputContent = readFileSync('dist/components/Input/Input.d.ts', 'utf-8');
const cardTypesContent = readFileSync('dist/components/Card/Card.types.d.ts', 'utf-8');
const cardContent = readFileSync('dist/components/Card/Card.d.ts', 'utf-8');

// Tạo bundle content với tất cả types inline và loại bỏ external references
const bundleContent = `// Auto-generated bundle - All types included
import React from 'react';
import { type ClassValue } from 'clsx';

// Types
${buttonTypesContent}

${inputTypesContent}

${cardTypesContent}

// Functions
${cnContent}

// Components
export declare const Button: React.FC<ButtonProps>;
export declare const Input: React.FC<InputProps>;
export declare const Card: React.FC<CardProps>;
`;

// Ghi file bundle
writeFileSync('dist/index.d.ts', bundleContent);

// Xóa các folder components và lib
rmSync('dist/components', { recursive: true, force: true });
rmSync('dist/lib', { recursive: true, force: true });

console.log('Build completed successfully!');
