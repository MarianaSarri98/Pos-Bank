import TransactionsTable from "../components/transactions-table";
import { getTransactions } from "../(admin)/_services/transactions";

export default function Transactions() {
  const { transactions } = getTransactions();

  return (
    <section className="h-full min-h-0 overflow-hidden">
      <TransactionsTable transactions={transactions} />
    </section>
  );
}
