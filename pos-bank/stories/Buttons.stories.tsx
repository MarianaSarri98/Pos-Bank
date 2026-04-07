
import Buttons from '@/app/components/ui/buttons';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    showIcons: {
      control: { type: 'boolean' },
    },
    iconButton: {
      control: { type: 'inline-radio' },
      options: ['create', 'delete', 'edit'],
    },
    iconsFill: {
      control: { type: 'color' },
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'new-transaction',
    showIcons: true,
    iconButton: 'create',
    iconsFill: '#FFFFFF',
  },
};

export const Delete: Story = {
  args: {
    label: 'delete-transaction',
    showIcons: true,
    iconButton: 'delete',
    iconsFill: '#FFFFFF',
  },
};

export const Edit: Story = {
  args: {
    label: 'edit-transaction',
    showIcons: true,
    iconButton: 'edit',
    iconsFill: '#FFFFFF',
  },
};

export const WithoutIcons: Story = {
  args: {
    label: 'new-transaction',
    showIcons: false,
    iconButton: 'create',
    iconsFill: '#FFFFFF',
  },
};
