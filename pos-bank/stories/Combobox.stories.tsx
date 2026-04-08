import { useState } from 'react';
import CategoryComboBox from '@/app/components/ui/combobox';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const sampleCategories = [
  { id: 1, name: 'Alimentacao' },
  { id: 2, name: 'Receita' },
  { id: 3, name: 'Saude' },
  { id: 4, name: 'Contas' },
];

const meta = {
  title: 'Components/Combobox',
  component: CategoryComboBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    categories: sampleCategories,
    value: '',
    id: 'storybook-category',
    onChange: (_value: string) => {},
  },
  argTypes: {
    categories: {
      control: false,
      description: 'Lista de categorias para selecao',
    },
    value: {
      control: 'text',
      description: 'Valor selecionado (id em string)',
    },
    id: {
      control: 'text',
      description: 'Id do campo select',
    },
    onChange: {
      action: 'changed',
      description: 'Disparado ao alterar selecao',
    },
  },
} satisfies Meta<typeof CategoryComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const PreSelected: Story = {
  args: {
    value: '2',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.value ?? '');

    return (
      <div style={{ width: 320 }}>
        <CategoryComboBox
          {...args}
          value={selected}
          onChange={(nextValue) => {
            setSelected(nextValue);
            args.onChange?.(nextValue);
          }}
        />
      </div>
    );
  },
};
