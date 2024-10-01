///<reference types='Cypress'/>
import { PO_HomePage } from "../PO/PO_HomePage";
import { PO_signupLoginPage } from "../PO/PO_Sign_LoginPage";
import { login_actions } from "../utils/methods_login";

const signupLoginObj = new PO_signupLoginPage();
const homepageObj = new PO_HomePage();

describe("Login Flow validation", function () {
  const testdata = require("../../fixtures/AutomationTestData.json");

  testdata.forEach((scenario) => {
    it(`${scenario.Scenario}`, () => {
      if (scenario.To_be_Tested === "Yes") {
        login_actions(scenario, scenario.Email, scenario.Password);
      }
    });
  });
  it("Subscription flow", function () {
    cy.visit("");
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
