import { getTransactions } from "../(admin)/_services/transactions";
import TransactionsTable from "../components/transactions-table";

export default function Transactions() {
  const transactions = getTransactions().transactions;

  return (
    <section className="h-full min-h-0 overflow-hidden">
      <TransactionsTable transactions={transactions} />
    </section>
  );
}
