type Category = {
  id: number;
  name: string;
};

type CategoryComboBoxProps = {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
  id?: string;
};

export default function CategoryComboBox({
  categories,
  value,
  onChange,
  id = "transaction-category",
}: CategoryComboBoxProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-[var(--text-muted)]">
        Categoria
      </label>
      <select
        id={id}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-[var(--border-muted)] bg-[var(--surface)] px-4 py-2 text-[var(--text-strong)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        <option value="">Selecione uma categoria</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}