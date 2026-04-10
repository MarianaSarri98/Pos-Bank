export type Transaction = {
    id: number;
    description: string;
    category: number;
    value: number;
    date: string;
};

export const getTransactions = () => {
    return {
        transactions: [
            {
                id: 1,
                description: 'Supermercado Silva',
                category: 1,
                value: -350.0,
                date: '2026-03-10',
            },
            {
                id: 2,
                description: 'Salário',
                category: 2,
                value: 5000.0,
                date: '2026-03-01',
            },
            {
                id: 3,
                description: 'Farmácia Central',
                category: 3,
                value: -120.0,
                date: '2026-02-28',
            },
            {
                id: 4,
                description: 'Restaurante do Porto',
                category: 1,
                value: -180.0,
                date: '2026-02-27',
            },
            {
                id: 5,
                description: 'Freelance Tech',
                category: 2,
                value: 1500.0,
                date: '2026-02-25',
            },
            {
                id: 6,
                description: 'Conta de Luz',
                category: 4,
                value: -250.0,
                date: '2026-02-20',
            },
        ]
    };
};
