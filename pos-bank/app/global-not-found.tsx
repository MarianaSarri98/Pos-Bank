import type { Metadata } from "next";
import Link from "next/link";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Página não encontrada | POS Bank",
  description: "A rota solicitada não foi encontrada.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
        <main className="flex h-full items-center justify-center p-6">
          <section className="w-full max-w-lg rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)] p-6 shadow-sm">
            <h1 className="mb-2 text-2xl font-bold text-[var(--text-strong)]">Página não encontrada</h1>
            <p className="mb-6 text-sm text-[var(--text-muted)]">
              A URL informada não existe no sistema.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex rounded-lg bg-[var(--color-primary)] px-4 py-2 font-semibold text-[var(--text-inverse)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              Voltar para o dashboard
            </Link>
          </section>
        </main>
      </body>
    </html>
  );
}
