"use client";

export default function ErrorDashboard() {
  return (
    <div className="min-h-screen bg-[var(--surface-soft)] p-6">
        <p className="text-[var(--foreground)]">Ocorreu um erro ao carregar os dados do dashboard. Por favor, tente novamente mais tarde.</p>
    </div>
  );
}