# POS Bank

Aplicação front-end para gerenciamento financeiro pessoal, desenvolvida com Next.js (App Router), React e TypeScript;

## Funcionalidades

- **Dashboard** — exibe saldo atual, total de débitos, total de créditos e as últimas 3 transações.
- **Listagem de transações** — tabela completa com categoria, data e valor formatados.
- **Adicionar transação** — modal acessível com campos de tipo, descrição, categoria, valor e data.
- **Editar transação** — modal pré-preenchido para alterar qualquer campo de uma transação existente.
- **Excluir transação** — diálogo de confirmação antes da remoção.
- **Storybook** — documentação visual dos componentes do Design System.

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Storybook 10](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- [ESLint 9](https://eslint.org/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

## Como rodar localmente

```bash
# 1. Entre na pasta do projeto
cd pos-bank

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

## Storybook

```bash
npm run storybook
```

Acesse **http://localhost:6006** para visualizar a documentação dos componentes.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia a aplicação em modo produção |
| `npm run lint` | Executa análise estática com ESLint |
| `npm run lint:fix` | Corrige problemas corrigíveis do lint automaticamente |
| `npm run storybook` | Inicia o Storybook na porta 6006 |
| `npm run build-storybook` | Gera o build estático do Storybook |

## Estrutura do projeto

```
pos-bank/
├── app/
│   ├── (admin)/
│   │   ├── _actions/       # Server actions (legado, substituídas pelo provider)
│   │   └── _services/      # Dados mockados de transações e categorias
│   ├── components/         # Componentes reutilizáveis (Header, Menu, Modal, Tabela...)
│   │   └── ui/             # Componentes base do Design System (Button, Combobox)
│   ├── dashboard/          # Página de dashboard (Home)
│   ├── providers/          # React Context para estado global de transações
│   ├── styles/             # CSS global e Tailwind
│   └── transactions/       # Página de listagem completa de transações
├── stories/                # Histórias do Storybook por componente
└── public/
```

## Dados mockados

Os dados são gerenciados em memória via React Context (`app/providers/transactions-provider.tsx`). Não é necessária nenhuma configuração de banco de dados ou variável de ambiente para rodar o projeto.
