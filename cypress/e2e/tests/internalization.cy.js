// get configuration for each language
// internalizationData JSon can be easily extended to other languages
// same code can be used for other languages
// additional fields can be added
// this can be easily extended by non technical persons
import internalizationData from '../../fixtures/internalization.json';
// data needed to be checked added as Json config
// this can be easily extended by non technical persons
import rarityData from '../../fixtures/rarity.json';

context('Sandbox Automation Challenge', () => {
    describe('Check internalization', () => {
        internalizationData.forEach((key) => {
            // As for best practice in Cypress each element should have an unique data-cy locator
            it(`Should validate ${key.language} language`, () =>{ 
                cy.visit('/'); // visit default page
                cy.get('div.space-x-12 > .space-x-2 > .flex').click(); // click change language button
                cy.get('li').contains(key.language).click(); // click on each language from the list (from JSON file)
    
                // asserts for url and headers. List can be extended to all elements on the page
                cy.url().should('eq', key.url);
                cy.get(':nth-child(2) > .leading-none > .font-semibold').should('have.text',key.headers[0])
                cy.get(':nth-child(3) > .leading-none > .font-semibold').should('have.text',key.headers[1])
                cy.get(':nth-child(4) > .leading-none > .font-semibold').should('have.text',key.headers[2])
            })
        });
    })
    describe('Check Avatar Collection', () => {
        rarityData.forEach((key, index) => {
            it(`Should validate ${key.type} Avatar`, () => {
                cy.visit('/');
                //Asserts
                cy.get('.flex.flex-col.justify-center.items-center')
                    .eq(index)
                    .find('h5')
                    .should('contain.text', key.type);
                cy.get('.flex.flex-col.justify-center.items-center')
                    .eq(index)
                    .find('p')
                    .should('contain.text', key.rarityPercentage);
                cy.get('.flex.flex-col.justify-center.items-center')
                    .eq(index)
                    .find('small')
                    .should('contain.text', key.text);
            })
        })
    })
    describe('Check FAQ has Answers', () => {
        it('Should validate all Faq Questions Have Answers', () =>{
            cy.visit('/');
            // iterate all Faq Questions
            cy.get('.w-full.border-b.border-solid').each(($el) => {
                cy.wrap($el)
                .find('div[role="button"]')
                .click(); // click question to see answer
                cy.wrap($el)
                .find('p')
                .find('span')
                .should('not.be.empty') //check answer is not empty
                // this can be easily be modified to check the exact answer!

            })
        })
    })
     
})