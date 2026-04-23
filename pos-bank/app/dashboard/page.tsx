import Card from "../components/card";
import TransactionsTable from "../components/transactions-table";
import { getTransactions } from "../(admin)/_services/transactions";

type CardConfig = {
  title: string;
  currencySymbol: string;
  amount: string;
  valueColor: string;
  className: string;
};

const cardData: CardConfig[] = [
  {
    title: "Saldo Atual",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "var(--text-strong)",
    className: "relative w-full bg-[var(--surface)]",
  },
  {
    title: "Débito",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "var(--color-debt)",
    className: "relative w-full bg-[var(--surface)]",
  },
  {
    title: "Crédito",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "var(--color-credit)",
    className: "relative w-full bg-[var(--surface)]",
  },
];

export default async function Dashboard() {
  const { transactions } = await getTransactions();

  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            currencySymbol={card.currencySymbol}
            amount={card.amount}
            valueColor={card.valueColor}
            className={card.className}
          />
        ))}
      </div>

      <div>
        <h2 className="text-base font-semibold text-[var(--text-strong)] mb-3">
          Últimas transações
        </h2>
        <TransactionsTable transactions={transactions} limit={3} showActions={false} />
      </div>
    </div>
  );
}

