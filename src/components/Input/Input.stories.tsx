import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here',
    className: ""
  },
};

export const WithClassName: Story = {
  args: {
    placeholder: 'With custom class',
    className: "border-green-500 bg-red text-green-700 ",
  },
};

