"use client";

import { useState, useTransition } from "react";
import { getCategories } from "../(admin)/_services/categories";
import type { Transaction } from "../(admin)/_services/transactions";
import { deleteTransactionAction, updateTransactionAction } from "../(admin)/_actions/transactions";
import { ConfirmationDialog } from "./confirmation-dialog";
import Icons from "./icons";
import { TransactionModal } from "./transaction-modal";

type TransactionsTableProps = {
  transactions: Transaction[];
  limit?: number;
  showActions?: boolean;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" });

const TH = "p-4 text-xs font-semibold text-[var(--text-muted)] uppercase";

const CATEGORY_COLORS: Record<number, string> = {
  1: "bg-[var(--color-info-soft)] text-[var(--color-info)]",
  2: "bg-[var(--color-credit-soft)] text-[var(--color-credit)]",
  3: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  4: "bg-[var(--color-warning-soft)] text-[var(--color-warning)]",
};

function getCategoryColor(category: number) {
  return CATEGORY_COLORS[category] ?? "bg-[var(--surface-muted)] text-[var(--text-muted)]";
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? date : dateFormatter.format(parsed);
}

export default function TransactionsTable({ transactions, limit, showActions = true }: TransactionsTableProps) {
  const categories = getCategories();
  const [, startTransition] = useTransition();
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [transactionToDelete, setTransactionToDelete] = useState<Transaction | null>(null);

  const visible = typeof limit === "number" ? transactions.slice(0, limit) : transactions;

  const getCategoryName = (transaction: Transaction) => {
    const list = transaction.type === "income" ? categories.categoriesIncome : categories.categoriesExpense;
    return list.find((c) => c.id === transaction.category)?.name;
  };

  const handleDelete = () => {
    if (!transactionToDelete) return;

    startTransition(async () => {
      await deleteTransactionAction(transactionToDelete.id);
      if (selectedTransaction?.id === transactionToDelete.id) setSelectedTransaction(null);
      setTransactionToDelete(null);
    });
  };

  const handleUpdate = (input: Parameters<typeof updateTransactionAction>[1]) => {
    if (!selectedTransaction) return;

    startTransition(async () => {
      await updateTransactionAction(selectedTransaction.id, input);
      setSelectedTransaction(null);
    });
  };

  return (
    <>
      <div className="h-full overflow-hidden rounded-xl border border-[var(--border-muted)] bg-[var(--surface)] shadow-sm">
        <div className="h-full overflow-auto">
          <table className={`w-full border-collapse text-left ${showActions ? "min-w-[760px]" : "min-w-[640px]"}`}>
            <thead className="sticky top-0 z-10 bg-[var(--surface-muted)]">
              <tr>
                <th className={TH}>Descrição</th>
                <th className={TH}>Categoria</th>
                <th className={TH}>Data</th>
                <th className={`${TH} text-right`}>Valor</th>
                {showActions ? <th className={`${TH} text-right`}>Ações</th> : null}
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={showActions ? 5 : 4} className="p-6 text-center text-sm text-[var(--text-muted)]">
                    Nenhuma transação cadastrada.
                  </td>
                </tr>
              ) : visible.map((transaction) => (
                <tr key={transaction.id} className="border-t border-[var(--border-muted)]">
                  <td className="p-4 text-sm text-[var(--text-strong)]">{transaction.description}</td>
                  <td className="p-4">
                    <span className={`rounded-md px-2 py-1 text-xs ${getCategoryColor(transaction.category)}`}>
                      {getCategoryName(transaction)}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-[var(--text-muted)]">{formatDate(transaction.date)}</td>
                  <td className={`p-4 text-right text-sm font-semibold ${transaction.value < 0 ? "text-[var(--color-debt)]" : "text-[var(--color-credit)]"}`}>
                    {transaction.value < 0 ? "-" : "+"} {currencyFormatter.format(Math.abs(transaction.value))}
                  </td>
                  {showActions ? (
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          aria-label={`Editar ${transaction.description}`}
                          onClick={() => setSelectedTransaction(transaction)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-muted)] text-[var(--text-muted)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                        >
                          <Icons icon="edit" iconsFill="currentColor" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Excluir ${transaction.description}`}
                          onClick={() => setTransactionToDelete(transaction)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-muted)] text-[var(--text-muted)] transition hover:border-[var(--color-debt)] hover:text-[var(--color-debt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-debt)]"
                        >
                          <Icons icon="delete" iconsFill="currentColor" />
                        </button>
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showActions && selectedTransaction ? (
        <TransactionModal
          isOpen
          onClose={() => setSelectedTransaction(null)}
          onSubmit={handleUpdate}
          transaction={selectedTransaction}
        />
      ) : null}

      {showActions && transactionToDelete ? (
        <ConfirmationDialog
          isOpen
          title="Excluir transação"
          description={`Esta ação remove permanentemente a transação "${transactionToDelete.description}" da lista.`}
          confirmLabel="Excluir"
          onConfirm={handleDelete}
          onClose={() => setTransactionToDelete(null)}
        />
      ) : null}
    </>
  );
}

