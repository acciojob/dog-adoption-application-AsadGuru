//your code here

describe('Dog Adoption Application Form', () => {
    beforeEach(() => {
        cy.visit('/'); // Adjust the URL to where your form is hosted
    });

    it('should have the correct attributes for the checkbox input', () => {
        // Check that the checkbox input has the correct value attribute
        cy.get('input').eq(3).should('have.attr', 'value', 'Have you ever lived with a Dog before?');

        // Check that the checkbox input has the correct id attribute
        cy.get('input').eq(3).should('have.attr', 'id', 'livedWithDog');  // Use the correct id from the HTML

        // Check that the checkbox input has the correct type attribute
        cy.get('input').eq(3).should('have.attr', 'type', 'checkbox');
    });
});