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

---

## Fase 2 — Tech Challenge PosTech

Esta seção documenta as melhorias planejadas e implementadas como parte da **segunda fase** do Tech Challenge PosTech de Engenharia Front-End.

> O PDF completo com o detalhamento de cada melhoria, justificativa e ordem de implementação está disponível em [`public/fase2-melhorias.pdf`](pos-bank/public/fase2-melhorias.pdf).

### Melhorias implementadas

#### 1. Gráficos e Análises no Dashboard
- Gráfico de barras com receitas vs despesas por mês
- Gráfico de rosca (donut) com distribuição por categoria
- Linha do tempo do saldo acumulado
- **Biblioteca:** Recharts

#### 2. Filtros Avançados e Busca na Listagem de Transações
- Busca em tempo real por descrição
- Filtro por tipo (Receita / Despesa / Todos)
- Filtro por categoria via combobox
- Filtro por período (data início e data fim)

#### 3. Paginação na Tabela de Transações
- Controles de anterior/próximo com número da página atual
- Contador "Exibindo X de Y transações"
- Reset automático para página 1 ao aplicar filtros

#### 4. Validação Avançada no Modal de Transação
- Esquema de validação declarativo com **Zod**
- Integração com **react-hook-form**
- Mensagens de erro inline por campo
- Sugestão automática de categoria ao digitar a descrição

#### 5. Upload de Anexos nas Transações
- Campo de upload de comprovantes (imagens e PDF, máx. 5 MB)
- Preview inline antes de salvar
- Armazenamento como Base64 no estado (preparado para integração com API)

#### 6. Gestão de Estado com Zustand
- Migração do `TransactionsProvider` para **Zustand store**
- Middleware `persist` para manter dados no `localStorage`
- Seletores unificados de filtro, paginação e totais

#### 7. Containerização com Docker
- `Dockerfile` multi-stage otimizado para Next.js (builder + runner)
- `docker-compose.yml` com o serviço frontend na porta 3000
- Instruções de execução via Docker abaixo

#### 8. Acessibilidade (a11y)
- `aria-label` em todos os botões de ícone (editar, excluir)
- `focus-visible` e ordem de tabulação correta no modal
- Contraste de cores compatível com **WCAG AA**
- `role="status"` nos feedbacks de loading e empty state

---

### Como rodar com Docker

> **Pré-requisito:** [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/) instalados.

```bash
# 1. Na raiz do repositório
cd pos-bank

# 2. Build e inicialização dos containers
docker compose up --build

# 3. Acesse a aplicação
# http://localhost:3000
```

Para encerrar:

```bash
docker compose down
```

### Tecnologias adicionadas na Fase 2

| Tecnologia | Uso |
|---|---|
| [Recharts](https://recharts.org/) | Gráficos do Dashboard |
| [Zustand](https://zustand-demo.pmnd.rs/) | Gestão de estado global |
| [Zod](https://zod.dev/) | Validação de esquemas |
| [react-hook-form](https://react-hook-form.com/) | Formulários com validação |
| [Docker](https://www.docker.com/) | Containerização |
