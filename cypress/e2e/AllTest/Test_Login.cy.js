///<reference types='Cypress'/>
import { PO_signupLoginPage } from "../PO/PO_Sign_LoginPage";
import { login_actions } from "../utils/methods_login";
const signupLoginObj = new PO_signupLoginPage();

describe("Login Flow validation", function () {
  const testdata = require("../../fixtures/AutomationTestData.json");

  testdata.forEach((scenario) => {
    it(`${scenario.Scenario}`, () => {
      if (scenario.To_be_Tested === "Yes") {
        login_actions(scenario, scenario.Email, scenario.Password);
      }
    });
  });
});
