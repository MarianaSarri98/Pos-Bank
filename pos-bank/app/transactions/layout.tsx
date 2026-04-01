export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-color-background p-6">
      <h1 className="text-2xl font-bold mb-6">Transações</h1>
      {children}
    </div>
  );
}