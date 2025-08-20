import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    className: '',
    children: 'Card content',
  },
};
