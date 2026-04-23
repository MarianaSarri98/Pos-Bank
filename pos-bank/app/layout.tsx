import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/header";
import { Menu } from "./components/menu";
import { getTransactions } from "./(admin)/_services/transactions";
import { TransactionsProvider } from "./providers/transactions-provider";

export const metadata: Metadata = {
  title: "POS Bank",
  description: "Aplicação para gerenciamento financeiro pessoal com dashboard e controle de transações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const transactions = getTransactions().transactions;

  return (
    <html lang="pt-BR">
      <body className="h-screen overflow-hidden">
        <TransactionsProvider initialTransactions={transactions}>
          <div className="flex h-full overflow-hidden flex-col lg:flex-row">
            <Menu />
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <Header />
              <main className="min-h-0 flex-1 overflow-hidden p-4 lg:p-8">{children}</main>
            </div>
          </div>
        </TransactionsProvider>
      </body>
    </html>
  );
}
