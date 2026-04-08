# POS Bank

Aplicacao front-end para controle financeiro pessoal, desenvolvida com Next.js (App Router), React e TypeScript.

## Visao Geral

O projeto contem:

- Dashboard com cards de saldo/debito/credito.
- Tabela de transacoes com destaque visual por tipo/categoria.
- Modal para cadastro de nova transacao.
- Componentes reutilizaveis em `app/components`.
- Storybook configurado para documentacao visual de componentes.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Storybook 10
- ESLint
- Vitest (dependencias instaladas)

## Como Rodar Localmente

Na pasta `pos-bank`:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Scripts

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera build de producao.
- `npm run start`: inicia a aplicacao em modo producao.
- `npm run lint`: executa analise estatica com ESLint.
- `npm run lint:fix`: corrige problemas corrigiveis do lint.
- `npm run storybook`: inicia o Storybook.
- `npm run build-storybook`: gera build do Storybook.

## Estrutura Principal

- `app/dashboard`: tela inicial com resumo financeiro.
- `app/transactions`: listagem de transacoes.
- `app/components`: biblioteca de componentes da aplicacao.
- `app/(admin)/_services`: mocks/servicos de dados (categorias e transacoes).
- `stories`: historias de componentes no Storybook.

## Melhorias Pendentes

- Persistir transacoes em API e banco de dados (atualmente dados mockados).
- Implementar criacao real de transacao no submit do modal.
- Adicionar edicao e exclusao de transacoes.
- Atualizar dashboard automaticamente apos criar transacao.
- Incluir filtros na tabela (periodo, categoria, tipo, busca).
- Adicionar paginacao/ordenacao para listas maiores.
- Melhorar acessibilidade (teclado, foco, atributos ARIA, contraste).
- Cobrir componentes e fluxos com testes unitarios e de integracao.
- Formatar valores e datas com internacionalizacao (`pt-BR`).
- Integrar notificacoes de sucesso/erro (toast) no fluxo de formulario.
- Adicionar controle de estado global ou cache de dados (quando houver API).
- Configurar pipeline de CI para lint, testes e build.

## Proximos Passos Recomendados

1. Conectar o modal de transacao a uma API.
2. Recarregar a tabela e os cards com dados reais apos submit.
3. Criar testes para `transactions-table`, modal e combobox de categoria.
