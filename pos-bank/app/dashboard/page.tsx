import Card from "../components/card";

type CardConfig = {
  title: string;
  currencySymbol: string;
  amount: string;
  valueColor: string;
  className: string;
};

const cardData: CardConfig[] = [
  {
    title: "Saldo Atual",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "#000000",
    className: "relative flex bg-white",
  },
  {
    title: "Débito",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "#d41717",
    className: "relative flex bg-white",
  },
  {
    title: "Crédito",
    currencySymbol: "R$",
    amount: "3000",
    valueColor: "#30a01c",
    className: "relative flex bg-white",
  },
];

export default function Dashboard() {
  return (
    <div className="flex gap-6 p-6">
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          currencySymbol={card.currencySymbol}
          amount={card.amount}
          valueColor={card.valueColor}
          className={card.className}
        />
      ))}
    </div>
  );
}

