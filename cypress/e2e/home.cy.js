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

describe('Internationalization', () => {
  it('should load the default language', () => {
    cy.visit('https://playboy-party-people.surge.sh/en');
    cy.contains('Channel your inner Bunny. Rub shoulders with the Rabbitars. Party with the Playboy Party People!');
  });

  it('should load the FR language', () => {
    cy.visit('https://playboy-party-people.surge.sh/fr');
    cy.contains('Libérez le Lapin qui est en vous. Frottez-vous aux Rabbitars. Faites la fête avec les Playboy Party People !');
  });

  it('should load the 日本 language', () => {
    cy.visit('https://playboy-party-people.surge.sh/jp');
    cy.contains('あなたの内なるバニーをチャネリングしてください。ラビターズと肩をこすります。プレイボーイのパーティーピープルと一緒にパーティーしよう！');
  });

  it('should load the 한국어 language', () => {
    cy.visit('https://playboy-party-people.surge.sh/kr');
    cy.contains('내 안의 토끼를 불러냅시다. 래비타와 어깨를 나란히 하고, 플레이보이 파티를 즐겨요!');
  });

  it('should load the 简中 language', () => {
    cy.visit('https://playboy-party-people.surge.sh/sc');
    cy.contains('看耳朵就知道你的尊贵身份，成为花花公子派对的宾客吧！');
  });

  it('should load the 繁中 language', () => {
    cy.visit('https://playboy-party-people.surge.sh/tc');
    cy.contains('看耳朵就知道你的尊貴身份，成為花花公子派對的賓客吧！');
  });

  it('should load the Türk language', () => {
    cy.visit('https://playboy-party-people.surge.sh/tr');
    cy.contains('İçinizdeki Tavşanı kanalize edin. Rabbitars ile omuz omuza. Playboy Parti İnsanları ile Parti !');
  });
});