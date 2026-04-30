"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./icons";

const BASE_LINK =
  "flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2";

const ACTIVE_LINK = "bg-[var(--color-primary-soft)] text-[var(--color-primary)]";
const INACTIVE_LINK = "text-[var(--text-muted)] hover:bg-[var(--surface-muted)]";

function navLinkClass(active: boolean) {
  return `${BASE_LINK} ${active ? ACTIVE_LINK : INACTIVE_LINK}`;
}

export function Menu() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal" className="flex h-auto shrink-0 w-[280px] flex-col border-r border-[var(--border-muted)] bg-[var(--surface)] px-6 py-5 lg:h-full">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[var(--color-primary)]">
          <Icons icon="wallet" iconsFill="var(--text-inverse)" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--text-strong)]">FinanceFlow</h1>
      </div>

      <ul className="flex flex-col gap-2">
        <li>
          <Link
            href="/dashboard"
            aria-current={pathname === "/dashboard" ? "page" : undefined}
            className={navLinkClass(pathname === "/dashboard")}
          >
            <Icons icon="dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/transactions"
            aria-current={pathname === "/transactions" ? "page" : undefined}
            className={navLinkClass(pathname === "/transactions")}
          >
            <Icons icon="transaction" />
            Transações
          </Link>
        </li>
      </ul>
    </nav>
  );
}
