#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const componentsRoot = path.join(projectRoot, 'src', 'components');

function toPascalCase(name) {
	return name
		.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
		.replace(/^(.)/, (m) => m.toUpperCase());
}

const rawName = process.argv[2];
if (!rawName) {
	console.error('Usage: npm run gen:component <ComponentName>');
	process.exit(1);
}

const componentName = toPascalCase(rawName);
const componentDir = path.join(componentsRoot, componentName);

if (existsSync(componentDir)) {
	console.error(`Component '${componentName}' already exists at ${componentDir}`);
	process.exit(1);
}

mkdirSync(componentDir, { recursive: true });

const typesContent = `import type { HTMLAttributes } from 'react';

export interface ${componentName}Props extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}
`;
const tsxContent = `import React from 'react';
import { ${componentName}Props } from './${componentName}.types';
import { cn } from '../../lib/cn';

export const ${componentName}: React.FC<${componentName}Props> = ({ className = '', children, ...restProps }) => (
	<div className={cn('${componentName.toLowerCase()}', className)} {...restProps}>
		{children}
	</div>
);
`;

writeFileSync(path.join(componentDir, `${componentName}.types.ts`), typesContent, 'utf8');
writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent, 'utf8');

// Storybook story template (dev-only)
const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
  args: {
    className: '',
    children: '${componentName} content',
  },
};
`;

writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), storyContent, 'utf8');

const indexPath = path.join(projectRoot, 'src', 'index.ts');
const exportLine = `export * from './components/${componentName}/${componentName}';\n`;
appendFileSync(indexPath, exportLine, 'utf8');

console.log(`✔ Created component ${componentName}`);
console.log(`↳ ${path.relative(projectRoot, componentDir)}`);

