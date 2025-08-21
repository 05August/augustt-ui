import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
    label: {
      control: 'text',
      description: 'Button text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    className: "bg-blue-600 hover:bg-blue-700 text-green-600"
  }
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom style',
    className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    className: 'bg-gray-400 cursor-not-allowed'
  }
};

