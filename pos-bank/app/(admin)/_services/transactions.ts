export type Transaction = {
  id: number;
  description: string;
  category: number;
  value: number;
  date: string;
  type: "income" | "expense";
};

export type TransactionInput = {
  description: string;
  category: number;
  value: number;
  type: "income" | "expense";
  date: string;
};

let store: Transaction[] = [
  { id: 1, description: "Supermercado Silva", category: 1, value: -350.0, date: "2026-03-10", type: "expense" },
  { id: 2, description: "Salário", category: 2, value: 5000.0, date: "2026-03-01", type: "income" },
  { id: 3, description: "Farmácia Central", category: 3, value: -120.0, date: "2026-02-28", type: "expense" },
  { id: 4, description: "Restaurante do Porto", category: 1, value: -180.0, date: "2026-02-27", type: "expense" },
  { id: 5, description: "Freelance Tech", category: 2, value: 1500.0, date: "2026-02-25", type: "income" },
  { id: 6, description: "Conta de Luz", category: 4, value: -250.0, date: "2026-02-20", type: "expense" },
];

export const getTransactions = (): { transactions: Transaction[] } => ({ transactions: store });

export const createTransaction = (input: TransactionInput): Transaction => {
  const nextId = store.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  const transaction: Transaction = { id: nextId, ...input };
  store = [transaction, ...store];
  return transaction;
};

export const patchTransaction = (id: number, input: TransactionInput): void => {
  store = store.map((t) => (t.id === id ? { ...t, ...input } : t));
};

export const removeTransaction = (id: number): void => {
  store = store.filter((t) => t.id !== id);
};
