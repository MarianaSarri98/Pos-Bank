import Buttons from "./buttons";

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <Buttons
        className="ml-auto"
        label="Nova Transação"
        iconButton="create"
        iconsFill="var(--text-inverse)"
      />
    </header>
  );
}