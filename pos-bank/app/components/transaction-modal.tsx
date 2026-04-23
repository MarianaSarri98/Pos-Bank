"use client";

import { useEffect, useRef, useState } from "react";
import { getCategories } from "../(admin)/_services/categories";
import type { Transaction, TransactionInput } from "../(admin)/_services/transactions";
import CategoryComboBox from "./ui/combobox";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: TransactionInput) => void;
  transaction?: Transaction | null;
};

export function TransactionModal({ isOpen, onClose, onSubmit, transaction = null }: TransactionModalProps) {
  const categories = getCategories();
  const isEditing = transaction !== null;

  const initialType: "income" | "expense" | "" = transaction
    ? transaction.value < 0 ? "expense" : "income"
    : "";

  const [description, setDescription] = useState(() => transaction?.description ?? "");
  const [value, setValue] = useState(() => transaction ? String(Math.abs(transaction.value)) : "");
  const [date, setDate] = useState(() => transaction?.date ?? "");
  const [category, setCategory] = useState(() => transaction ? String(transaction.category) : "");
  const [type, setType] = useState<"income" | "expense" | "">(initialType);

  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const categoryOptions = type === "expense"
    ? categories.categoriesExpense
    : type === "income"
    ? categories.categoriesIncome
    : [];

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement as HTMLElement;

    requestAnimationFrame(() => {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

      if (focusable && focusable.length > 0) {
        focusable[0].focus();
        return;
      }

      headingRef.current?.focus();
    });

    return () => {
      lastFocusedRef.current?.focus();
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

    if (!focusable || focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numericValue = Number(value);
    const numericCategory = Number(category);

    onSubmit({
      description: description.trim(),
      category: numericCategory,
      value: type === "expense" ? -Math.abs(numericValue) : Math.abs(numericValue),
      type: type as "income" | "expense",
      date,
    });

    setDescription("");
    setValue("");
    setDate("");
    setCategory("");
    setType("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "color-mix(in srgb, var(--text-strong) 70%, transparent)" }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="transaction-modal-title"
        className="relative z-10 w-full max-w-md rounded-2xl bg-[var(--surface)] p-8"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <h3
          id="transaction-modal-title"
          ref={headingRef}
          tabIndex={-1}
          className="mb-6 text-xl font-bold text-[var(--text-strong)] focus:outline-none"
        >
          {isEditing ? "Editar Transação" : "Nova Transação"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <fieldset>
              <legend className="mb-1 block text-sm font-medium text-[var(--text-muted)]">Tipo</legend>
              <input required readOnly value={type} className="sr-only" tabIndex={-1} />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setType("expense")}
                  className={`flex-1 rounded-lg px-4 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                    type === "expense"
                      ? "bg-[var(--color-debt)] text-[var(--text-inverse)]"
                      : "bg-[var(--surface-muted)] text-[var(--text-muted)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  Despesa
                </button>
                <button
                  type="button"
                  onClick={() => setType("income")}
                  className={`flex-1 rounded-lg px-4 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                    type === "income"
                      ? "bg-[var(--color-credit)] text-[var(--text-inverse)]"
                      : "bg-[var(--surface-muted)] text-[var(--text-muted)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  Receita
                </button>
              </div>
            </fieldset>
            <div>
              <label htmlFor="transaction-description" className="mb-1 block text-sm font-medium text-[var(--text-muted)]">
                Descrição
              </label>
              <input
                id="transaction-description"
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-muted)] px-4 py-2 text-[var(--text-strong)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                placeholder="Ex: Supermercado"
              />
            </div>
            <CategoryComboBox
              categories={categoryOptions}
              value={category}
              onChange={setCategory}
              id="transaction-category"
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="transaction-value" className="mb-1 block text-sm font-medium text-[var(--text-muted)]">
                  Valor
                </label>
                <input
                  id="transaction-value"
                  type="number"
                  required
                  step="0.01"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border-muted)] px-4 py-2 text-[var(--text-strong)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label htmlFor="transaction-date" className="mb-1 block text-sm font-medium text-[var(--text-muted)]">
                  Data
                </label>
                <input
                  id="transaction-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border-muted)] px-4 py-2 text-[var(--text-strong)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-lg bg-[var(--surface-muted)] py-3 font-semibold text-[var(--text-muted)] transition duration-200 hover:bg-[var(--surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 rounded-lg bg-[var(--color-primary)] py-3 font-semibold text-[var(--text-inverse)] transition duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                {isEditing ? "Salvar Alterações" : "Salvar Transação"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
