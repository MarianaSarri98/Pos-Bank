type Category = {
  id: number;
  name: string;
};

type CategoriesResult = {
  categoriesExpense: Category[];
  categoriesIncome: Category[];
};

export const getCategories = (): CategoriesResult => ({
  categoriesExpense: [
    { id: 1, name: "Alimentação" },
    { id: 2, name: "Receita" },
    { id: 3, name: "Saúde" },
    { id: 4, name: "Contas" },
  ],
  categoriesIncome: [
    { id: 1, name: "Salário" },
    { id: 2, name: "Bônus" },
    { id: 3, name: "Investimentos" },
  ],
});
