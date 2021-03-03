describe('cypress basic test', () => {
  beforeEach(() => {
    cy.server();
    //cy.intercept('GET', `https://jsonplaceholder.typicode.com/albums/1/photos/`, 'fixture:photos.json');

    // cy.intercept({
    //   method: 'GET',
    //   url: 'https://jsonplaceholder.typicode.com/albums/1/photos/',
    //   delay: 1000,
    // }).as('getData');

    cy.intercept('https://jsonplaceholder.typicode.com/albums/1/photos/', { fixture: 'photos.json', delay: 2000 });
    cy.visit('/');
  });

  describe('rendering component', () => {
    it('renders', () => {
      cy.get('[data-testid="loading"]').should('be.visible');
      cy.get('[data-testid="hello-stencil"]').contains('Hello, World!');
      cy.get('[data-testid="photo-1"]').contains('1');
      cy.get('[data-testid="counter"]').contains('how many images: 3');
      cy.get('[data-testid="photo-link-1"]').click();
      cy.on('window:alert', str => {
        expect(str).to.equal(`you clicked photo number 1`);
      });
    });
  });
});
