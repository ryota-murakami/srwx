describe('store-ui-shared: StoreUiShared component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=storeuishared--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to StoreUiShared!');
    });
});
