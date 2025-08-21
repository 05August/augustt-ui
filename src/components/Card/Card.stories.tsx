import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { 
    layout: 'centered',
    controls: { sort: 'requiredFirst' }
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    children: {
      control: 'text',
      description: 'Card content'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    className: "bg-white shadow-lg rounded-lg p-6 border border-gray-200 bg-blue-500",
    children: 'Card content'
  }
};

export const WithCustomStyle: Story = {
  args: {
    className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 shadow-2xl',
    children: 'Gradient card with custom styling'
  }
};

export const Minimal: Story = {
  args: {
    className: 'bg-gray-50 border border-gray-300 rounded p-4',
    children: 'Simple minimal card'
  }
};
