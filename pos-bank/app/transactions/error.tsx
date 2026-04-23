"use client";

export default function ErrorTransactions({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-full flex-col items-start gap-4 p-6">
      <p className="text-sm text-[var(--text-muted)]">
        Ocorreu um erro ao carregar os dados das transações.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-inverse)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        Tentar novamente
      </button>
    </div>
  );
}