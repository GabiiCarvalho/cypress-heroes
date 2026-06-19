import Prisma from '@prisma/client';

describe('Hero List - Cypress Heroes', () => {

  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.clear(); 
    });
    cy.visit('/');
  });

  it('List of heroes after login - Success', () => {
    
    cy.get('li > .undefined').click();
    cy.get('[data-cy="email"]').type('test@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.contains('button', 'Sign in').click();

    
    cy.url().should('include', '/heroes');
  });

  it('Render hero cards', () => {
      // The Smoker
      cy.get("[data-cy='name']").eq(0).should('be.visible');
      cy.get("[data-cy='powers']").eq(0).should('be.visible');
      cy.get('img').eq(0).should('be.visible');
      cy.get("[data-cy='price']").eq(0).should('be.visible');
      cy.get("[data-cy='fans']").eq(0).should('be.visible');
      cy.get("[data-cy='saves']").eq(0).should('be.visible');

      cy.get("[data-cy='like']").eq(0).should('be.visible');
      cy.get("[data-cy='money']").eq(0).should('be.visible');

      // Warp Speed
      cy.get("[data-cy='name']").eq(1).should('be.visible');
      cy.get("[data-cy='powers']").eq(1).should('be.visible');
      cy.get('img').eq(1).should('be.visible');
      cy.get("[data-cy='price']").eq(1).should('be.visible');
      cy.get("[data-cy='fans']").eq(1).should('be.visible');
      cy.get("[data-cy='saves']").eq(1).should('be.visible');

      cy.get("[data-cy='like']").eq(1).should('be.visible');
      cy.get("[data-cy='money']").eq(1).should('be.visible');

      // Cyonic
      cy.get("[data-cy='name']").eq(2).should('be.visible');
      cy.get("[data-cy='powers']").eq(2).should('be.visible');
      cy.get('img').eq(2).should('be.visible');
      cy.get("[data-cy='price']").eq(2).should('be.visible');
      cy.get("[data-cy='fans']").eq(2).should('be.visible');
      cy.get("[data-cy='saves']").eq(2).should('be.visible');

      cy.get("[data-cy='like']").eq(2).should('be.visible');
      cy.get("[data-cy='money']").eq(2).should('be.visible');

      // The Librarian
      cy.get("[data-cy='name']").eq(3).should('be.visible');
      cy.get("[data-cy='powers']").eq(3).should('be.visible');
      cy.get('img').eq(3).should('be.visible');
      cy.get("[data-cy='price']").eq(3).should('be.visible');
      cy.get("[data-cy='fans']").eq(3).should('be.visible');
      cy.get("[data-cy='saves']").eq(3).should('be.visible');

      cy.get("[data-cy='like']").eq(3).should('be.visible');
      cy.get("[data-cy='money']").eq(3).should('be.visible');

      // Mr Angular
      cy.get("[data-cy='name']").eq(4).should('be.visible');
      cy.get("[data-cy='powers']").eq(4).should('be.visible');
      cy.get('img').eq(4).should('be.visible');
      cy.get("[data-cy='price']").eq(4).should('be.visible');
      cy.get("[data-cy='fans']").eq(4).should('be.visible');
      cy.get("[data-cy='saves']").eq(4).should('be.visible');

      cy.get("[data-cy='like']").eq(4).should('be.visible');
      cy.get("[data-cy='money']").eq(4).should('be.visible');

      // Collect Call Paul
      cy.get("[data-cy='name']").eq(5).should('be.visible');
      cy.get("[data-cy='powers']").eq(5).should('be.visible');
      cy.get('img').eq(5).should('be.visible');
      cy.get("[data-cy='price']").eq(5).should('be.visible');
      cy.get("[data-cy='fans']").eq(5).should('be.visible');
      cy.get("[data-cy='saves']").eq(5).should('be.visible');

      cy.get("[data-cy='like']").eq(5).should('be.visible');
      cy.get("[data-cy='money']").eq(5).should('be.visible');

      // Fly Girl
      cy.get("[data-cy='name']").eq(6).should('be.visible');
      cy.get("[data-cy='powers']").eq(6).should('be.visible');
      cy.get('img').eq(6).should('be.visible');
      cy.get("[data-cy='price']").eq(6).should('be.visible');
      cy.get("[data-cy='fans']").eq(6).should('be.visible');
      cy.get("[data-cy='saves']").eq(6).should('be.visible');

      cy.get("[data-cy='like']").eq(6).should('be.visible');
      cy.get("[data-cy='money']").eq(6).should('be.visible');

      // Test Hero 15
      cy.get("[data-cy='name']").eq(7).should('be.visible');
      cy.get("[data-cy='powers']").eq(7).should('be.visible');
      cy.get('img').eq(7).should('be.visible');
      cy.get("[data-cy='price']").eq(7).should('be.visible');
      cy.get("[data-cy='fans']").eq(7).should('be.visible');
      cy.get("[data-cy='saves']").eq(7).should('be.visible');

      cy.get("[data-cy='like']").eq(7).should('be.visible');
      cy.get("[data-cy='money']").eq(7).should('be.visible');

      // Test Hero 16
      cy.get("[data-cy='name']").eq(8).should('be.visible');
      cy.get("[data-cy='powers']").eq(8).should('be.visible');
      cy.get('img').eq(8).should('be.visible');
      cy.get("[data-cy='price']").eq(8).should('be.visible');
      cy.get("[data-cy='fans']").eq(8).should('be.visible');
      cy.get("[data-cy='saves']").eq(8).should('be.visible');

      cy.get("[data-cy='like']").eq(8).should('be.visible');
      cy.get("[data-cy='money']").eq(8).should('be.visible');
    })
  });