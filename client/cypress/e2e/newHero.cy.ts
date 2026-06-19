describe('Create new hero', () => {

  beforeEach(() => {
    
    cy.login('admin@test.com', 'test123');

    cy.visit('/heroes/new');
    cy.url().should('include', '/heroes/new');
  });

  it('You must fill out the form and successfully register a hero', () => {
    const heroName = 'Hero Testing';

    cy.get('[data-cy=nameInput]').type(heroName);
    cy.get('[data-cy=priceInput]').clear().type('25');
    cy.get('[data-cy=fansInput]').clear().type('150');
    cy.get('[data-cy=savesInput]').clear().type('80');
    
    cy.get('[data-cy=powersSelect]').select(['Invisibility', 'Telekinesis']);

    cy.get('button').contains('Submit').click();

    cy.location('pathname').should('equal', `/heroes`);

    cy.contains('[data-cy=hero-card]', heroName).within(() => {
      cy.get('[data-cy=name]').should('contain', heroName);
      cy.get('[data-cy=price]').should('contain', '25');
      cy.get('[data-cy=fans]').should('contain', '150'); 
      cy.get('[data-cy=saves]').should('contain', '80'); 
      cy.get('[data-cy=powers]').should('contain.text', 'Invisibility').and('contain.text', 'Telekinesis');
    
      cy.get("[data-cy='trash']").click();
    });
    cy.contains('[data-cy=hero-card]', heroName).should('be.visible');
    cy.get('button').contains('Yes').click();
  });

  it('It should not be possible to register a hero with an empty name', () => {
    cy.get("[data-cy=priceInput]").clear().type('25');
    cy.get("[data-cy=fansInput]").clear().type('150');
    cy.get("[data-cy=savesInput]").clear().type('80');
    cy.get("[data-cy=powersSelect]").select(['Invisibility', 'Telekinesis']);

    cy.get('button').contains('Submit').click();

    cy.location('pathname').should('equal', '/heroes/new');

    cy.get('.text-red-500').should('be.visible').and('contain.text', 'Name is required');
  });

  it.only('It should not be possible to register a hero with an negative price', () => {
    cy.get('[data-cy=nameInput]').type('Hero Test PRO');

    cy.get('[data-cy=priceInput]').clear().type('-25');
    cy.get('[data-cy=fansInput]').clear().type('150');
    cy.get('[data-cy=savesInput]').clear().type('80');
    cy.get('[data-cy=powersSelect]').select(['Invisibility', 'Telekinesis']);

    cy.get('button').contains('Submit').click();

    cy.location('pathname').should('equal', '/heroes/new');

    cy.get('.text-red-500').should('be.visible').and('contain.text', 'Price must be greater than 0');
  })

});