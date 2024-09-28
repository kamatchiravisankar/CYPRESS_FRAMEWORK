import { PO_HomePage } from "../PO/PO_HomePage";
import { PO_ProductPage } from "../PO/PO_ProductPage";
import { login_actions } from "../utils/methods_login";

describe("Product flow", () => {
  const homepageObj = new PO_HomePage();
  const prodpageObj = new PO_ProductPage();

  it("Product detail screen dynamic", function () {
    cy.visit("");
    homepageObj.getProduct().click();
    cy.url().should("contain", "/product");

    let productlist = cy
      .get(".product-image-wrapper")
      .find(" .productinfo > p");

    productlist.each(($prodinfo) => {
      if ($prodinfo.text() === "Stylish Dress") {
        cy.get($prodinfo)
          .parentsUntil(".col-sm-4")
          .contains("View Product")
          .click();
      }
    });
    prodpageObj
      .getProductdetail_Name()
      .invoke("text")
      .as("productname")
      .then((txt) => {
        cy.log(txt);
      });

    prodpageObj.getProductdetail_Category().then(($catogry) => {
      cy.log($catogry.text());
    });

    prodpageObj.getProductdetail_Availability().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Condition().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Price().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Brand().then((txt) => {
      cy.log(txt.text());
    });
  });

  it("Search Product", function () {
    cy.visit("");
    homepageObj.getProduct().click();
    prodpageObj.getProductSearchbox().type("Winter top");
    prodpageObj.getSearchicon().click();
    prodpageObj
      .getProductcardname()
      .invoke("text")
      .should("contain", "Winter Top");
  });
  it("Add to cart", function () {
    cy.visit("");
    homepageObj.getProduct().click();
    let products = ["Sleeveless Dress", "Blue Top"];

    products.forEach((element) => {
      prodpageObj.getProductSearchbox().clear().type(element);
      prodpageObj.getSearchicon().click();
      prodpageObj
        .getProductcardname()
        .invoke("text")
        .should("contain", element);

      cy.get(".productinfo  a.add-to-cart").click();
      prodpageObj.getContinueShopping().click();
    });
    prodpageObj.getViewCart().click();
  });

  it.only("Increase the Quanitity", function () {
    const testdata = require("../../fixtures/AutomationTestData.json");
    let scenario = testdata[0];
    cy.visit("");
    homepageObj.getProduct().click();
    cy.url().should("contain", "/product");

    let productlist = cy
      .get(".product-image-wrapper")
      .find(" .productinfo > p");

    productlist.each(($prodinfo) => {
      if ($prodinfo.text() === "Stylish Dress") {
        cy.get($prodinfo)
          .parentsUntil(".col-sm-4")
          .contains("View Product")
          .click();
      }
    });
    prodpageObj
      .getProductdetail_Name()
      .invoke("text")
      .as("productname")
      .then((txt) => {
        cy.log(txt);
      });

    prodpageObj.getProductdetail_Category().then(($catogry) => {
      cy.log($catogry.text());
    });

    prodpageObj.getProductdetail_Availability().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Condition().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Price().then((txt) => {
      cy.log(txt.text());
    });
    prodpageObj.getProductdetail_Brand().then((txt) => {
      cy.log(txt.text());

      prodpageObj.getQuantityno().clear().type(4);
    });
    prodpageObj.getAddToProdindetailscreen().click();
    prodpageObj.getContinueShopping().click();
    prodpageObj.getViewCart().click();
    prodpageObj.getcartQuantity().should("contain", "4");
    cy.contains("Proceed To Checkout").click();
    prodpageObj.getmodelregister().click();
    login_actions(scenario, scenario.Email, scenario.Password);
    prodpageObj.getViewCart().click();
    cy.contains("Proceed To Checkout").click();
    cy.get("#address_delivery")
      .children()
      .each(($el) => {
        cy.log($el.text());
      });
    cy.get(".form-control").type("Reiview text");
    cy.get(":nth-child(7) > .btn").click();
    cy.get(' input[data-qa="name-on-card"]').type("Testing");
    cy.get('input[data-qa="card-number"]').type("4242424242424242");
    cy.get('input[data-qa="cvc"]').type("475");
    cy.get('input[data-qa="expiry-month"]').type("01");
    cy.get('input[data-qa="expiry-year"]').type("2026");
    cy.get('[data-qa="pay-button"]').click();
    cy.get("div[class='col-sm-9 col-sm-offset-1'] p").should(
      "have.text",
      "Congratulations! Your order has been confirmed!"
    );
    cy.get(".col-sm-9 > .btn-default").click();
    cy.verifyDownload("invoice.txt");
  });
});
