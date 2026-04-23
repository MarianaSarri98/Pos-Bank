"use server";

import { revalidatePath } from "next/cache";
import {
  createTransaction,
  patchTransaction,
  removeTransaction,
  type TransactionInput,
} from "../_services/transactions";

export async function addTransactionAction(input: TransactionInput) {
  createTransaction(input);
  revalidatePath("/", "layout");
}

export async function updateTransactionAction(id: number, input: TransactionInput) {
  patchTransaction(id, input);
  revalidatePath("/", "layout");
}

export async function deleteTransactionAction(id: number) {
  removeTransaction(id);
  revalidatePath("/", "layout");
}
