describe('Gestão de Produtos e Fornecedores', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve cadastrar um novo produto', () => {
    cy.contains('Produtos').click();
    cy.contains('Novo Produto').click();
    cy.get('input[name="name"]').type('Produto Cypress');
    cy.get('input[name="price"]').type('99.99');
    cy.contains('Salvar').click();
    cy.contains('Produto Cypress');
  });

  it('Deve cadastrar um novo fornecedor', () => {
    cy.contains('Fornecedores').click();
    cy.contains('Novo Fornecedor').click();
    cy.get('input[name="name"]').type('Fornecedor Cypress');
    cy.get('input[name="contact"]').type('cypress@teste.com');
    cy.contains('Salvar').click();
    cy.contains('Fornecedor Cypress');
  });

  it('Deve validar formulário de produto', () => {
    cy.contains('Produtos').click();
    cy.contains('Novo Produto').click();
    cy.get('input[name="name"]').clear();
    cy.get('input[name="price"]').clear();
    cy.contains('Salvar').click();
    cy.url().should('include', '/produtos/novo');
  });

  it('Deve validar formulário de fornecedor', () => {
    cy.contains('Fornecedores').click();
    cy.contains('Novo Fornecedor').click();
    cy.get('input[name="name"]').clear();
    cy.contains('Salvar').click();
    cy.url().should('include', '/fornecedores/novo');
  });
}); 