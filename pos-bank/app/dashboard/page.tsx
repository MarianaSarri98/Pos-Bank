"use client";

import Card from "../components/card";
import TransactionsTable from "../components/transactions-table";
import { useTransactions } from "../providers/transactions-provider";

const currencyFormatter = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Dashboard() {
  const { transactions } = useTransactions();

  const totalCredit = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.value, 0);

  const totalDebt = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.value), 0);

  const balance = totalCredit - totalDebt;

  const cardData = [
    {
      title: "Saldo Atual",
      amount: currencyFormatter.format(balance),
      valueColor: "var(--text-strong)",
    },
    {
      title: "Débito",
      amount: currencyFormatter.format(totalDebt),
      valueColor: "var(--color-debt)",
    },
    {
      title: "Crédito",
      amount: currencyFormatter.format(totalCredit),
      valueColor: "var(--color-credit)",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            amount={card.amount}
            valueColor={card.valueColor}
            className="relative w-full bg-[var(--surface)]"
          />
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-base font-semibold text-[var(--text-strong)]">
          Últimas transações
        </h2>
        <TransactionsTable limit={3} showActions={false} />
      </div>
    </div>
  );
}

