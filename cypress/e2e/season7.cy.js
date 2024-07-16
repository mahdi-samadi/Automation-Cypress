/// <reference types = "cypress"/>

describe("season 7", () => {
  it("Multiple elements", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("a[id*=js-link-box]").should("have.length", 10);
    cy.get("a[id*=js-link-box]").should("contain.text", "فارسی");
    cy.get("a[id*=js-link-box]").should("contain.text", "فار");
    // cy.get("a[id*=js-link-box]").eq(0).click();
    // cy.get("a[id*=js-link-box]").eq(-2).click();
    // cy.get("a[id*=js-link-box]").first().click();
    cy.get("a[id*=js-link-box]").last().click();
  });

  it("Using each()", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("a[id*=js-link-box]").each(function (el, index, $listOfElements) {
      // cy.log($el.text());
      // cy.log(index);
      // cy.log($listOfElements.length);
      // if (index == 8) {
      //   cy.log($el.text());
      //   $el.trigger("click");
      // }
      if (el.text().includes("فار")) {
        cy.log(el.text());
        cy.wait(1000);
        cy.get(el).trigger("click");
      }
    });
  });

  it("Working with webtable 1", function () {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("tr").then(function ($list) {
      cy.log($list.length);
    });
    cy.get("tr").should("have.length", 7);
    cy.get("table th").eq(0).should("have.text", "Firstname");
    cy.get("table th:eq(0)").should("have.text", "Firstname");
    // cy.get("table th:last-child").should("have.text", "Lastname");

    //1
    cy.get("tbody>tr:eq(2)>td:eq(0)").then(function ($el) {
      expect($el.text()).eq("Pheobe");
    });

    //2
    cy.get("tbody>tr")
      .eq(2)
      .within(function () {
        cy.get("td:first-child").should("have.text", "Pheobe");
        cy.get("td:eq(0)").should("have.text", "Pheobe");
        cy.get("td").eq(0).should("have.text", "Pheobe");
        cy.get("td").first().should("have.text", "Pheobe");
      });
  });

  it.only("Get specific cell value based on another cell value", function () {
    cy.visit("https://www.play2.automationcamp.ir/index.html");
    cy.get("tbody th").each(function ($el, index) {
      if ($el.text() === "Occupation") {
        cy.get("table")
          .contains("Smith")
          .parent()
          .within(function () {
            cy.get("td").eq(index).should("have.text", "Actor");
          });
      }
    });
  });
});
