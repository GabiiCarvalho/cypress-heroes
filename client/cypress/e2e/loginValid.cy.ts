import Prisma from '@prisma/client';

describe('Login - Cypress Heroes', () => {

  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.clear(); 
    });
    cy.visit('/');
  });

  it('1️⃣ Login credentials valid - Success', () => {
    
    cy.get('li > .undefined').click();
    cy.get('[data-cy="email"]').type('test@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.contains('button', 'Sign in').click();

    
    cy.url().should('include', '/heroes');

    cy.contains('button', 'Logout').click();
  });
});