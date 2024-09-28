///<reference types='Cypress'/>
const path = require("path");

import { PO_HomePage } from "../PO/PO_HomePage";

describe("ContactUS scenarios", function () {
  const testdata = require("../../fixtures/AutomationTestData.json");
  const homepageObj = new PO_HomePage();
  const filepath =
    Cypress.config("fileServerFolder") + "/cypress/fixtures/testingfile.jpg";
  it("ContactUs flow", function () {
    let scenario = testdata[3];
    cy.visit("");
    homepageObj.getcontactUS().click();
    homepageObj
      .gettextincontactus()
      .invoke("text")
      .should("contain", "Get In Touch");

    homepageObj.getcontactscreenName().type(scenario.Sign_upName);
    homepageObj.getcontactscreenemail().type(scenario.Email);
    homepageObj.getcontactscreensub().type(scenario.subject);
    homepageObj.getcontactscreenmsg().type(scenario.Message);
    homepageObj.getchoosefilebtn().selectFile(filepath);

    homepageObj.getcontactscreensubmitbtn().click();
  });
});
