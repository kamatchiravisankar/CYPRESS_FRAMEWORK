describe("Cookies explore", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
  });
  it("Cookies excersise", () => {
    cy.getAllCookies()
      .should("have.length", 1)
      .then((cookies) => {
        expect(cookies[0]).to.have.property("name", "orangehrm");
      });
    cy.getCookie("orangehrm").should("exist");
    cy.getCookies().then((cookies) => {
      expect(cookies[0]).to.have.property("name", "orangehrm");
    });
  });
});
