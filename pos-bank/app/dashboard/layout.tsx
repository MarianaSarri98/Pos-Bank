export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="space-y-8">
     <h1 className="mb-6 text-2xl font-bold text-[var(--text-strong)]">Dashboard</h1>
    {children}
  </div>
  );
}