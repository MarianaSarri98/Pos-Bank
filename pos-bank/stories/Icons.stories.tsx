
import Icons from '@/app/components/icons';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Icons',
  component: Icons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'inline-radio' },
      options: ['create', 'delete', 'edit'],
    },
    iconsFill: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    icon: 'create'
  },
};

export const Delete: Story = {
  args: {
    icon: 'delete'
  },
};

export const Edit: Story = {
  args: {
    icon: 'edit'
  },
};