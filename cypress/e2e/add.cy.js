describe('Todo List', () => {
  // New Feature for Todo App
  // Input todo description to be submitted as part of a form
  it('should store input text as value', () => {
    cy.visit(Cypress.env('url'))

    cy.get('[data-testid="todo-input"]').type('New Todo')

    cy.get('[data-testid="todo-input"]').should('have.value', 'New Todo')
  })
})