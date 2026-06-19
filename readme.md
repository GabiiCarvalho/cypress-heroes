# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM.

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.

## 🧪 Automação de Testes (Contribuição QA)

Como parte da garantia de qualidade do projeto, foram desenvoldidos cenários de testes automatizados de ponta a pont (E2E) utilizando o **Cypress**.

### 📁 Cenários Cobertos

Os testes foram organizados na pasta `cypress/e2e/` e cobrem as seguintes funcionalidades:

1. **Cadastro de Heróis (`newHero.cy.ts`):**
  * **Fluxo Positivo:** Cadastro completo de um herói com múltiplos poderes e validação do card na listagem pública.
  * **Fluxo Negativo (Campos Vazios):** Tentativa de submissão sem preencher o nome (espera-se bloqueio e mensagem de erro).
  * **Testes de Limite (Boundary Testing):** Validação de comportamento do sistema com preços excessivamente altos (`99999999999`) e valores decimais (`25.99`).

2. **Controle de Permissão (`permissionControl.cy.ts`):**
   * **Perfil Administrador:** Garante a visibilidade dos botões de gerência e acesso às telas de criação.
   * **Perfil Usuário Comum:** Garante que botões de criação/exclusão fiquem ocultos e valida o bloqueio de segurança caso o usuário tente acessar a URL `/heroes/new` diretamente.

---

## 🐛 Bugs Relevantes Encontrados

Durante a execução dos testes automatizados, foram identificados **4 comportamentos inesperados** na aplicação. Todos os detalhes técnicos, passo a passo e evidências foram registrados na aba **Issues** deste repositório:

* 🔴 **[Crítico] Quebra de controle de Acesso:** Usuários comuns conseguem visualizar e interagir com a tela `/heroes/new` digitando a URL diretamente.
* ⚠️ **[Alto] Crash no Servidor (Erro 500):** O backend cai por *Integer Overflow* ao receber um preço muito alto no formulário.
* ⚠️ **[Médio] Rejeição de Decimais:** O sistema derruba a requisição (Erro 500) se o preço contiver centavos (ex: `25.99`).
* ℹ️ **[Baixo/Médio] Ausência de Validação:** O formulário aceita o cadastro de heróis com preços negativos sem exibir erros.
