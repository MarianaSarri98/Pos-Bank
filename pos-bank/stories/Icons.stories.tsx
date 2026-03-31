import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Icons } from '../app/components/Icons';

const meta = {
  title: 'Components/Icons',
  component: Icons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['create', 'delete', 'edit'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    variant: 'create',
  },
};

export const Delete: Story = {
  args: {
    variant: 'delete',
  },
};

export const Edit: Story = {
  args: {
    variant: 'edit',
  },
};