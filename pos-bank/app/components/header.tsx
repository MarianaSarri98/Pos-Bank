import Buttons from "./buttons";

export default function Header() {
  return (
    <header>
      <h1>Financial Flow</h1>
      <Buttons label="Nova Transação" iconButton="create" iconsFill="#FFFFFF"/>
    </header>
  );
}