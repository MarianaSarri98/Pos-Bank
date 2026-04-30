import TransactionsTable from '@/app/components/transactions-table';
import { TransactionsProvider } from '@/app/providers/transactions-provider';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { Decorator } from '@storybook/nextjs-vite';

const withTransactionsProvider: Decorator = (Story) => (
  <TransactionsProvider>
    <Story />
  </TransactionsProvider>
);

const meta = {
  title: 'Components/TransactionsTable',
  component: TransactionsTable,
  tags: ['autodocs'],
  decorators: [withTransactionsProvider],
  parameters: {
    layout: 'padded',
  },
  args: {
    showActions: true,
  },
  argTypes: {
    limit: {
      control: { type: 'number', min: 1 },
      description: 'Limita o número de linhas exibidas. Sem valor exibe todas.',
    },
    showActions: {
      control: 'boolean',
      description: 'Exibe ou oculta os botões de editar e excluir',
    },
  },
} satisfies Meta<typeof TransactionsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullList: Story = {
  name: 'Lista completa',
};

export const WithLimit: Story = {
  name: 'Com limite (3 itens)',
  args: {
    limit: 3,
    showActions: false,
  },
};

export const ReadOnly: Story = {
  name: 'Somente leitura',
  args: {
    showActions: false,
  },
};
