describe('Create new hero - Boundary Testing', () => {

    beforeEach(() => {
        cy.login('admin@test.com', 'test123');
        cy.visit('/heroes/new');
    });

    it('Should validade or block a entry with an excessively high price', () => {
        const heroName = 'Millionaire Hero';

        cy.get('[data-cy=nameInput]').type(heroName);

        cy.get('[data-cy=priceInput]').clear().type('9999999999');
        cy.get('[data-cy=fansInput]').clear().type('100');
    cy.get('[data-cy=savesInput]').clear().type('50');
    cy.get('[data-cy=powersSelect]').select(['Invisibility']);

    cy.get('button').contains('Submit').click();

    cy.location('pathname').should('equal', `/heroes`);
    cy.contains('[data-cy=price]').should('contain', '9999999999');
    cy.get('[data-cy="trash"]').click();
    });

    it('Should successfully register a hero with a decimal price', () => {
        const heroName = 'Decimal Hero';

        cy.get('[data-cy=nameInput]').type(heroName);

        cy.get('[data-cy=priceInput]').clear().type('25.99');

        cy.get('[data-cy=fansInput]').clear().type('100');
        cy.get('[data-cy=savesInput]').clear().type('50');
        cy.get('[data-cy=powersSelect]').select(['Telekinesis']);

        cy.get('button').contains('Submit').click();

        cy.location('pathname').should('equal', `/heroes`);

        cy.contains('[data-cy=hero-card]', heroName).within(() => {
            cy.get('[data-cy=price]').should('contain', '25.99');
            cy.get('[data-cy="trash"]').click();
        });
        cy.get('button').contains('Yes').click();
    });
});