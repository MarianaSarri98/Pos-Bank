import Buttons from '@/app/components/ui/buttons';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  args: {
    label: 'Nova Transação',
    showIcons: true,
    iconButton: 'create',
    iconsFill: '#FFFFFF',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Dispara ao clicar no botão',
    },
    label: {
      control: { type: 'text' },
      description: 'Texto exibido no botão',
    },
    showIcons: {
      control: { type: 'boolean' },
      description: 'Exibe ou oculta o ícone',
    },
    iconButton: {
      control: { type: 'select' },
      options: ['create', 'delete', 'edit', 'dashboard'],
      description: 'Nome do ícone em public/assets',
    },
    iconsFill: {
      control: { type: 'color' },
      description: 'Cor aplicada ao ícone',
    },
    className: {
      control: { type: 'text' },
      description: 'Classes extras do botão',
    },
  },
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const Delete: Story = {
  args: {
    label: 'Excluir Transação',
    iconButton: 'delete',
  },
};

export const Edit: Story = {
  args: {
    label: 'Editar Transação',
    iconButton: 'edit',
  },
};

export const WithoutIcons: Story = {
  args: {
    label: 'Salvar',
    showIcons: false,
  },
};

export const OnLightSurface: Story = {
  name: 'Light Surface Preview',
  decorators: [
    (Story) => (
      <div style={{ background: 'var(--surface-soft)', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};
