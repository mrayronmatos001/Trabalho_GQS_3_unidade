# Gestão de Produtos e Fornecedores

Aplicação web para cadastro e gerenciamento de produtos e fornecedores, seguindo arquitetura MVC, com API RESTful, persistência em banco de dados SQLite e testes automatizados (unitários, integração e E2E).

## 📦 Tecnologias
- Node.js + Express
- SQLite
- EJS (views)
- Jest + Supertest (testes)
- Cypress (E2E)

## 🚀 Instruções de Instalação

1. **Clone o repositório ou copie os arquivos para sua máquina.**
2. **Acesse a pasta do projeto:**
   ```bash
   cd "Gestão de Produtos e Fornecedores"
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```

## ▶️ Como executar o projeto

1. **Inicie o servidor:**
   ```bash
   npm start
   ```
   O servidor estará disponível em [http://localhost:3000](http://localhost:3000)

2. **Acesse as views:**
   - [http://localhost:3000/produtos](http://localhost:3000/produtos)
   - [http://localhost:3000/fornecedores](http://localhost:3000/fornecedores)

## 🧪 Como executar os testes

### Testes Unitários e de Integração (Jest + Supertest)

```bash
npm test
```

- Os testes estão nas pastas:
  - `tests/unit/` (unitários dos models)
  - `tests/integration/` (integração dos endpoints)

### Testes E2E (Cypress)

1. **Abra o Cypress em modo interativo:**
   ```bash
   npx cypress open
   ```
   - Selecione o teste `cypress/e2e/cadastro_produto_fornecedor.cy.js` e execute.

2. **Ou rode em modo headless:**
   ```bash
   npx cypress run
   ```

## 🗂️ Estrutura de Pastas

```
Gestão de Produtos e Fornecedores/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── public/
│   └── database/
├── tests/
│   ├── unit/
│   └── integration/
├── cypress/
│   └── e2e/
├── app.js
├── package.json
├── README.md
```

---

## ✨ Observações

- O banco de dados SQLite é criado automaticamente na primeira execução.
- As views são simples, mas funcionais para cadastro, edição, listagem e detalhes.
- Os testes cobrem todos os fluxos principais e casos de erro.

---