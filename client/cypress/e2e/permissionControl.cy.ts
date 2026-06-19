describe('Permission Control (UI)', () => {

  // ==========================================
  //      SCENARIO FOR ADMINISTRATOR USER
  // ==========================================
  describe('When Admin user is logged in', () => {
    beforeEach(() => {
      
      cy.login('admin@test.com', 'test123');
      cy.visit('/heroes');
    });

    it('Should display management buttons and allow access to creation page', () => {

      cy.get('button').contains('Create New Hero');

      cy.get("[data-cy='trash']").should('be.visible');

      cy.visit('/heroes/new');
      cy.url().should('include', '/heroes/new');
    });
  });

  // ==========================================
  //            SCENARIO FOR USER
  // ==========================================
  describe('When Regular user is logged in', () => {
    beforeEach(() => {
      
      cy.login('test@test.com', 'test123');
      cy.visit('/heroes');
    });

    it('Should NOT display management buttons for a regular user', () => {
      
      cy.get('[data-cy="new-hero-button"]').should('not.exist');

      cy.get("[data-cy='trash']").should('not.exist');
    });

    it('Should block direct access to the creation URL', () => {
      
      cy.visit('/heroes/new');

      cy.url().should('not.include', '/heroes/new');
      
      cy.contains('You do not have permission to view this page').should('be.visible');
    });
  });

});