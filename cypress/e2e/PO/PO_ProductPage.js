export class PO_ProductPage {
  getAllProducttext() {
    return cy.get("h2.title ");
  }
  getProductcardlist() {
    return cy.get(".col-sm-9 >div >div.col-sm-4 ");
  }
  getProductcardname() {
    return cy.get(".productinfo>p");
  }
  getviewprodbtn() {
    return cy.get("div.col-sm-9 > div > div > div > div.choose > ul > li > a");
  }
  getProductdetail_Name() {
    return cy.get(".product-details>.col-sm-7 >.product-information >h2");
  }
  getProductdetail_Category() {
    return cy.get(
      ".product-details>.col-sm-7 >.product-information >p:nth-child(3)"
    );
  }
  getProductdetail_Price() {
    return cy.get(
      ".product-details>.col-sm-7 >.product-information >span>span"
    );
  }
  getProductdetail_Availability() {
    return cy.get(
      ".product-details>.col-sm-7 >.product-information >p:nth-child(6)"
    );
  }
  getProductdetail_Condition() {
    return cy.get(
      ".product-details>.col-sm-7 >.product-information >p:nth-child(7)"
    );
  }
  getProductdetail_Brand() {
    return cy.get(
      ".product-details>.col-sm-7 >.product-information >p:nth-child(7)"
    );
  }
  getProductSearchbox() {
    return cy.get("#search_product");
  }
  getSearchicon() {
    return cy.get("button#submit_search");
  }
  getQuantityno() {
    return cy.get("#quantity");
  }
  getAddToProdindetailscreen() {
    return cy.get(":nth-child(5) > .btn");
  }
  getContinueShopping() {
    return cy.get(".modal-footer > .btn");
  }
  getViewCart() {
    return cy.get('.navbar-nav a[href="/view_cart"');
  }
  getcartQuantity() {
    return cy.get(".cart_quantity");
  }
  getmodelregister() {
    return cy.get(".modal-body >p>a");
  }
}
