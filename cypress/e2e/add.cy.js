describe('Todo List', () => {
  // New Feature for Todo App
  // Input todo description to be submitted as part of a form

  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Todo App',
      testName: Cypress.currentTest.title
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it('should store input text as value', () => {
    cy.visit(Cypress.env('url'))

    cy.get('[data-testid="todo-input"]').type('New Todo')

    cy.get('[data-testid="todo-input"]').should('have.value', 'New Todo')

    cy.eyesCheckWindow({
      tag: 'add input',
      target: 'region',
      matchLevel: 'Strict',
      selector: {
        type: "name",
        selector: 'add_todo'
      }
    })
  })
})