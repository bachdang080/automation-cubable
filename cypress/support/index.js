beforeEach(() => {
    if (Cypress.env('loggedIn') !== 'true') {
      cy.login();
    }
  })
  