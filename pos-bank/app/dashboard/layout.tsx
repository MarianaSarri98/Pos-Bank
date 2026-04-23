export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-[var(--text-strong)]">Dashboard</h1>
      {children}
    </div>
  );
}