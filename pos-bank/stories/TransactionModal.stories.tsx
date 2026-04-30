import { TransactionModal } from '@/app/components/transaction-modal';
import type { Decorator, Meta, StoryObj } from '@storybook/nextjs-vite';

const withModalContainer: Decorator = (Story) => (
  <div style={{ position: 'relative', height: '580px', transform: 'translateZ(0)', overflow: 'hidden' }}>
    <Story />
  </div>
);

const meta = {
  title: 'Components/TransactionModal',
  component: TransactionModal,
  tags: ['autodocs'],
  decorators: [withModalContainer],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isOpen: true,
    onClose: () => {},
    onSubmit: () => {},
    transaction: null,
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controla a visibilidade do modal',
    },
    transaction: {
      control: false,
      description: 'Transação existente para edição. Null para criação.',
    },
    onClose: {
      action: 'closed',
      description: 'Callback disparado ao fechar o modal',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback disparado ao submeter o formulário com os dados da transação',
    },
  },
} satisfies Meta<typeof TransactionModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  name: 'Nova transação',
};

export const EditExpense: Story = {
  name: 'Editar despesa',
  args: {
    transaction: {
      id: 1,
      description: 'Supermercado Silva',
      category: 1,
      value: -350.0,
      date: '2026-03-10',
      type: 'expense',
    },
  },
};

export const EditIncome: Story = {
  name: 'Editar receita',
  args: {
    transaction: {
      id: 2,
      description: 'Salário',
      category: 2,
      value: 5000.0,
      date: '2026-03-01',
      type: 'income',
    },
  },
};
