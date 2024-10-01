import { PO_signupLoginPage } from "../PO/PO_Sign_LoginPage";

const signupLoginObj = new PO_signupLoginPage();
export function login_actions(scenario, email, password) {
  cy.session([email, password], () => {
    if (scenario.loginflag === "valid") {
      cy.login(email, password);
      //  signupLoginObj.getLogout().click();
    } else if (scenario.loginflag === "invalid") {
      cy.login("", email, password);
      signupLoginObj
        .getinvalidloginErrormsg()
        .invoke("text")
        .then((txt) => {
          expect(txt).to.be.eq("Your email or password is incorrect!");
        });
    } else if (scenario.loginflag === "register") {
      cy.visit("");
      signupLoginObj.getSignupPagelink().click();
      signupLoginObj.getSignUpName().type(scenario.Sign_upName);
      signupLoginObj.getSignUpEmail().type(scenario.Email);
      signupLoginObj.getSignUpBtn().click();
      signupLoginObj
        .getalreadyregisteredmsg()
        .invoke("text")
        .should("eq", "Email Address already exist!");
    }
  });
}
