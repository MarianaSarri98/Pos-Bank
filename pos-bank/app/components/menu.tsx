"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./icons";


export function Menu() {
    const pathname = usePathname();

    return (
        <nav className="flex h-screen w-[280px] flex-col border-r border-[var(--border-muted)] bg-[var(--surface)] px-6 py-5">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[var(--color-primary)] text-[var(--text-inverse)]">
                    <Icons icon="wallet" iconsFill="var(--text-inverse)" />
                </div>
                <h1 className="text-3xl font-bold text-[var(--text-strong)]">FinanceFlow</h1>
            </div>

            <ul className="flex flex-col gap-2">
                <li>
                    <Link
                        href="/dashboard"
                        aria-current={pathname === "/dashboard" ? "page" : undefined}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                            pathname === "/dashboard"
                                ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                                : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)]"
                        }`}
                    >
                        <Icons icon="dashboard" iconsFill="currentColor" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href="/transactions"
                        aria-current={pathname === "/transactions" ? "page" : undefined}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                            pathname === "/transactions"
                                ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                                : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)]"
                        }`}
                    >
                        <Icons icon="transaction" iconsFill="currentColor" />
                        Transações
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
