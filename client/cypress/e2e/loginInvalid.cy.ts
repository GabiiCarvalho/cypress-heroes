describe('template spec', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.clear(); 
    });
    cy.visit('/');
  });

  it('Login invalid - Error Message', () => {
    
    cy.get('li > .undefined').click();
    cy.get("input[name='email']").type('test@test.com');
    cy.get("input[name='password']").type('test_password');
    cy.contains('button', 'Sign in').click();

    
    cy.contains('Invalid email or password').should('be.visible');
  });
})