import Card from '@/app/components/card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Saldo Total',
    currencySymbol: 'R$',
    amount: '12.450,00',
    valueColor: 'var(--text-strong)',
    className: 'w-[360px]',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Titulo do card',
    },
    currencySymbol: {
      control: 'text',
      description: 'Simbolo da moeda',
    },
    amount: {
      control: 'text',
      description: 'Valor exibido',
    },
    valueColor: {
      control: 'color',
      description: 'Cor do valor',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para tamanho/layout',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Balance: Story = {};

export const Income: Story = {
  args: {
    title: 'Receitas',
    amount: '8.200,00',
    valueColor: 'var(--color-credit)',
  },
};

export const Expense: Story = {
  args: {
    title: 'Despesas',
    amount: '3.750,00',
    valueColor: 'var(--color-debt)',
  },
};

export const Compact: Story = {
  args: {
    className: 'w-[280px]',
  },
};
