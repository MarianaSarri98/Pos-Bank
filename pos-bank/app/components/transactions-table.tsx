import { getCategories } from "../(admin)/_services/categories";

type Transaction = {
  id: number;
  description: string;
  category: number;
  value: number;
  date: string;
};

type TransactionsTable = {
  transactions: Transaction[];
};

const getCategoryColor = (category: number) => {
  switch (category) {
    case 1:
      return "bg-[var(--color-info-soft)] text-[var(--color-info)]";
    case 2:
      return "bg-[var(--color-credit-soft)] text-[var(--color-credit)]";
    case 3:
      return "bg-[var(--color-accent-soft)] text-[var(--color-accent)]";
    case 4:
      return "bg-[var(--color-warning-soft)] text-[var(--color-warning)]";
    default:
      return "bg-[var(--surface-muted)] text-[var(--text-muted)]";
  }
};

export default function TransactionsTable({ transactions }: TransactionsTable) {
  const categories = getCategories().categories;

  const getCategoryName = (categoryId: number) => {
    return categories.find((category) => category.id === categoryId)?.name;
  };

  return (
    <div className="h-full bg-[var(--surface)] rounded-xl shadow-sm overflow-hidden border border-[var(--border-muted)]">
      <div className="h-full overflow-auto">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <thead className="bg-[var(--surface-muted)] sticky top-0 z-10">
            <tr>
              <th className="p-4 text-xs font-semibold text-[var(--text-muted)] uppercase">Descrição</th>
              <th className="p-4 text-xs font-semibold text-[var(--text-muted)] uppercase">Categoria</th>
              <th className="p-4 text-xs font-semibold text-[var(--text-muted)] uppercase">Data</th>
              <th className="p-4 text-xs font-semibold text-[var(--text-muted)] uppercase text-right">Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-[var(--border-muted)]">
                <td className="p-4 text-sm text-[var(--text-strong)]">{transaction.description}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-xs ${getCategoryColor(transaction.category)}`}>
                    {getCategoryName(transaction.category)}
                  </span>
                </td>
                <td className="p-4 text-sm text-[var(--text-muted)]">{transaction.date}</td>
                <td className={`p-4 text-sm font-semibold text-right ${transaction.value < 0 ? "text-[var(--color-debt)]" : "text-[var(--color-credit)]"}`}>
                  {transaction.value < 0 ? "-" : "+"} R$ {Math.abs(transaction.value).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
