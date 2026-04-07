type Category = {
  id: number;
  name: string;
};

type CategoryComboBoxProps = {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
};

export default function CategoryComboBox({
  categories,
  value,
  onChange,
}: CategoryComboBoxProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        Categoria
      </label>
      <select
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
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