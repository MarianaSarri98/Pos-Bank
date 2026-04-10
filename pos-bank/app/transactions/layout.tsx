export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full min-h-0 bg-color-background p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-6 shrink-0">Transações</h1>
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}