import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  }
};

export const WithClassName: Story = {
  args: {
    placeholder: 'With custom class',
    className: 'border-green-500 bg-green-50 text-green-700'
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    className: 'border-red-300 focus:border-red-500'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    className: 'bg-gray-100 cursor-not-allowed'
  }
};

