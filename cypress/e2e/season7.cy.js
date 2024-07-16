/// <reference types = "cypress"/>

describe("season 7", () => {
  it("Multiple elements", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("a[id*=js-link-box]");
  });
});
