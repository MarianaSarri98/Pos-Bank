"use client";

export default function ErrorTransactions() {
  return (
    <div className="h-full min-h-0 bg-[var(--surface-soft)] p-6">
        <p className="text-[var(--foreground)]">Ocorreu um erro ao carregar os dados das transações. Por favor, tente novamente mais tarde.</p>
    </div>
  );
}