import Icons from '@/app/components/icons';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Icons',
  component: Icons,
  tags: ['autodocs'],
  args: {
    icon: 'create',
    iconsFill: '#2D6CDF',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['create', 'delete', 'edit', 'dashboard', "wallet", "transaction"],
      description: 'Nome do ícone em public/assets',
    },
    iconsFill: {
      control: { type: 'color' },
      description: 'Cor aplicada ao ícone via mask',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Nome acessível opcional; vazio deixa o ícone decorativo',
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    icon: 'create',
  },
};

export const Delete: Story = {
  args: {
    icon: 'delete',
    iconsFill: '#F10004',
  },
};

export const Edit: Story = {
  args: {
    icon: 'edit',
    iconsFill: '#47CC1B',
  },
};

export const Dashboard: Story = {
  args: {
    icon: 'dashboard',
  },
};

export const IconGallery: Story = {
  name: 'Gallery',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>
      {['create', 'delete', 'edit', 'dashboard'].map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 12,
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            minWidth: 100,
          }}
        >
          <Icons icon={name} iconsFill="#2D6CDF" />
          <span style={{ fontSize: 12 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};