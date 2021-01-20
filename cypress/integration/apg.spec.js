context("APG ANGULAR", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  it("Logo should be visible", () => {
    cy.get(".logo").should("be.visible");
  });
});
