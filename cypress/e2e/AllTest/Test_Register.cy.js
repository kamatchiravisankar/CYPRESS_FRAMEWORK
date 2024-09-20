///<reference types='Cypress'/>

const { PO_HomePage } = require("../PO/PO_HomePage");
const {
  PO_signupLogin,
  PO_signupLoginPage,
} = require("../PO/PO_Sign_LoginPage");

describe("Register User", () => {
  const homepageObj = new PO_HomePage();
  const signupLoginObj = new PO_signupLoginPage();

  it("Registerand Delete the User in Automation Excercise site", () => {
    cy.visit("https://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    homepageObj.getSignUpBtn().click();

    signupLoginObj
      .getSignUpText()
      .should("have.text", "New User Signup!")
      .and("be.visible");
    signupLoginObj.getSignUpEmail().type("chitmaka77919@gmail.com");
    signupLoginObj.getSignUpName().type("kamatchi");
    signupLoginObj.getSignUpBtn().click();
    signupLoginObj
      .getAccInfoText()
      .should("be.visible")
      .and("have.text", "Enter Account Information");
    signupLoginObj.getTitleMrs().check();
    signupLoginObj.getaccName().clear().type("Kamatchi");
    signupLoginObj.getaccEmail().should("have.attr", "disabled");
    signupLoginObj.getaccPassword().type("Kuttu@123");
    signupLoginObj.getaccDays().select("10");
    signupLoginObj.getaccMonths().select("5", "value");
    signupLoginObj.getaccYears().select("1994");
    signupLoginObj.getsignupCheckbox().check();
    signupLoginObj.getrecieveroffersCheckbox().check();

    signupLoginObj.getAddrfirstname().type("Kamatchi");
    signupLoginObj.getAddrlastname().type("R");
    signupLoginObj.getAddrcompany().type("tzzPay");
    signupLoginObj.getAddraddressline1().type("No.5 pinnacle crest");
    signupLoginObj.getAddraddressline2().type("Sholinganallur");
    signupLoginObj.getAddrCountry().select("India", "text");
    signupLoginObj.getAddrState().type("TAMILNADU");
    signupLoginObj.getAddrCity().type("Chennai");
    signupLoginObj.getAddrZipCode().type("607006");
    signupLoginObj.getAddrMobileNumber().type("9876546789");
    signupLoginObj.getCreateAccBtn().click();
    signupLoginObj
      .getAccCreatedtext()
      .should("be.visible")
      .and("have.text", "Account Created!");
    signupLoginObj.getContinuebtn().click();
    signupLoginObj.getLoggedname().invoke("text").should("contain", "Kamatchi");
    signupLoginObj.getDeleteAccbtn().click();
    signupLoginObj
      .getAccDeletedText()
      .should("be.visible")
      .and("contain", "Account Deleted!");
    signupLoginObj.getContinuebtn().click();
  });
});
