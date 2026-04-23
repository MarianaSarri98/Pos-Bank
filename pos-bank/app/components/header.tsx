"use client";
import { useState, useTransition } from "react";
import Buttons from "./ui/buttons";
import { TransactionModal } from "./transaction-modal";
import { addTransactionAction } from "../(admin)/_actions/transactions";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, startTransition] = useTransition();

  const handleAdd: React.ComponentProps<typeof TransactionModal>["onSubmit"] = (input) => {
    startTransition(async () => {
      await addTransactionAction(input);
      setIsModalOpen(false);
    });
  };

  return (
    <header className="flex items-center justify-end border-b border-[var(--border-muted)] bg-[var(--surface)] px-4 py-4 lg:px-8">
      <Buttons
        className="font-semibold transition duration-200 hover:opacity-90"
        label="Nova Transação"
        iconButton="create"
        iconsFill="var(--text-inverse)"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen ? (
        <TransactionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAdd}
        />
      ) : null}
    </header>
  );
}