import { PO_HomePage } from '../PO/PO_HomePage';

describe("Navigation to next page", function () {
  beforeEach(() => {
    // equivalent to cy.preserveCookieOnce('connect.session')
    cy.preserveCookieOnce("connect.session");
  });
  const homepageObj = new PO_HomePage();

  
  it("Switch to Testcases lisiting screen from homepage", function () {
    cy.visit("");
    homepageObj.getTestCasebtn().click();
    cy.url().should("include", "/test_cases");
  });

  it("Subscription flow", function () {
    // cy.visit("");
    homepageObj.getSubscription().scrollIntoView();
    homepageObj.getSubscriptionemailbox().type("test11@g.com");
    homepageObj.getSubscribeicon().click();
    cy.debug().then(() => {
      homepageObj
        .getSubscriptionsuccessmsg()
        .should("have.text", "You have been successfully subscribed!");
    });
    // cy.on("window, alert", (str) => {
    //   expect(str).to.eq("You have been successfully subscribed!");
    // });
    cy.log("test");
  });
});
