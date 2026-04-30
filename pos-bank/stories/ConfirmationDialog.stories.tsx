import { ConfirmationDialog } from '@/app/components/confirmation-dialog';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: true,
    title: 'Excluir transação',
    description: 'Esta ação remove permanentemente a transação "Supermercado Silva" da lista.',
    confirmLabel: 'Excluir',
    cancelLabel: 'Cancelar',
    onConfirm: () => {},
    onClose: () => {},
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controla a visibilidade do diálogo',
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho do diálogo',
    },
    description: {
      control: 'text',
      description: 'Mensagem explicativa da ação',
    },
    confirmLabel: {
      control: 'text',
      description: 'Texto do botão de confirmação',
    },
    cancelLabel: {
      control: 'text',
      description: 'Texto do botão de cancelamento (padrão: "Cancelar")',
    },
    onConfirm: {
      action: 'confirmed',
      description: 'Callback disparado ao confirmar',
    },
    onClose: {
      action: 'closed',
      description: 'Callback disparado ao fechar ou cancelar',
    },
  },
} satisfies Meta<typeof ConfirmationDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Delete: Story = {
  name: 'Excluir transação',
};

export const CustomLabels: Story = {
  name: 'Labels personalizados',
  args: {
    title: 'Confirmar ação',
    description: 'Tem certeza que deseja continuar? Esta operação não pode ser desfeita.',
    confirmLabel: 'Confirmar',
    cancelLabel: 'Voltar',
  },
};

export const Closed: Story = {
  name: 'Fechado',
  args: {
    isOpen: false,
  },
};
