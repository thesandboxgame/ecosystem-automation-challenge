describe("Playboy Party People", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})

//It looks like Cypress Open Selector Playground can not find the correct CSS locators for the specific avatars. Cypress Open Selector only find 1 avatar instead of 5.
// When running the E2E Cypress test, The DOM is not loading correctly and I can not find the correct CSS locators.
//The DOM does not contain any specific ID locators.
describe('Collection tests', () => {
  const expectedNumAvatars = 5;
  const expectedAvatarRarities = ['Common', 'Rare', 'Epic', 'Legendary', 'Unique'];

  it(`should display ${expectedNumAvatars} avatars`, () => {
    cy.visit('/'); // Visit the collection page
    cy.get('.max-w-xl > .block').should('have.length', expectedNumAvatars); // Ensure there are 5 avatars
  });

  it('should display avatars with the correct rarity', () => {
    cy.visit('/'); // When using cypress the avatars and their rarity is not displayed properly and the locators are different from the original DOM

    // Loop through each avatar and check its rarity label
    cy.get('.max-w-xl > .block').each(($avatar, index) => {
      const expectedRarity = expectedAvatarRarities[index];
      cy.wrap($avatar).contains(expectedRarity); // Cypress can not find the desired avatars
    });
  });

  //Using Cypress tool, the avatars are not properly displayed and their rarities are missing from the DOM.
  it('should properly display all avatars', () => {
    cy.visit('/'); // Visit the collection page

    // Loop through each avatar and check if it's properly displayed
    cy.get('.max-w-xl > .block').each(($avatar) => {
      cy.wrap($avatar)
        .find('.-mx-12 max-w-sm')
        .should('be.visible'); // Ensure the avatar image is properly displayed
    });
  });
});

describe('Collection page', () => {
  it('Should display "sold out" when all items have been purchased', () => {
    cy.visit('/') // Replace with the actual URL of the collection page
    cy.get('.max-w-xl > .block').each(($item, index) => {
      // Purchase all items in the collection
    })
    // Verify that the collection is marked as "sold out"
    cy.contains('Sold Out')
  })
})

