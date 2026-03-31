import { getTransactions } from "../../(admin)/_services/transactions";

export default function Transactions() {
  

  const getCategoryColor = (category: Number) => {
    switch (category) {
      case 1:
        return 'bg-blue-50 text-blue-600';
      case 2:
        return 'bg-green-50 text-green-600';
      case 3:
        return 'bg-purple-50 text-purple-600';
      case 4:
        return 'bg-orange-50 text-orange-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };
  const transactions = getTransactions().transactions;
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Descrição</th>
            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Categoria</th>
            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Data</th>
            <th className="p-4 text-xs font-semibold text-gray-500 uppercase text-right">Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t border-gray-100">
              <td className="p-4 text-sm">{transaction.description}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-md text-xs ${getCategoryColor(transaction.category)}`}>
                  {transaction.category}
                </span>
              </td>
              <td className="p-4 text-sm text-gray-500">{transaction.date}</td>
              <td className={`p-4 text-sm font-semibold text-right ${transaction.value < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.value < 0 ? '-' : '+'} R$ {Math.abs(transaction.value).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
