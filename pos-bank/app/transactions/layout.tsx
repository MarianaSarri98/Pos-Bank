export default function TransactionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-6">
      <h1 className="shrink-0 text-2xl font-bold text-[var(--text-strong)]">Transações</h1>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}