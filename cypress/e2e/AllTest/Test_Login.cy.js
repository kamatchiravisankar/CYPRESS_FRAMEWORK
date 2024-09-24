///<reference types='Cypress'/>
import { PO_signupLoginPage } from "../PO/PO_Sign_LoginPage";
import { ExceltoJSONConverter } from "./ExcelToJSON.cy";

const signupLoginObj = new PO_signupLoginPage();

describe("Login Flow validation", function () {
  it("Login with valid credentials", function () {
    // ExceltoJSONConverter("./cypress/fixtures/AutomationTestData.xlsx");
    const testdata = require("../../fixtures/AutomationTestData.json");
    let scenario = testdata[0];
    cy.login("", scenario.Email, scenario.Password);
  });
});
