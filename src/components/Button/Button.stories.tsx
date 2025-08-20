import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me',
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom style',
    className: 'bg-green-600 hover:bg-green-700',
  },
};

