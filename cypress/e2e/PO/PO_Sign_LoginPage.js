export class PO_signupLoginPage {
  getSignUpText() {
    return cy.get(".signup-form>h2:visible");
  }

  getSignUpName() {
    return cy.get('[data-qa="signup-name"]');
  }
  getSignUpEmail() {
    return cy.get('[data-qa="signup-email"]');
  }
  getSignUpBtn() {
    return cy.get('[data-qa="signup-button"]');
  }
  getAccInfoText() {
    return cy.get("div.login-form > h2 > b");
  }
  getTitleMr() {
    return cy.get("#id_gender1");
  }
  getTitleMrs() {
    return cy.get("#id_gender2");
  }
  getaccName() {
    return cy.get('[data-qa="name"]');
  }
  getaccEmail() {
    return cy.get('[data-qa="email"]');
  }
  getaccPassword() {
    return cy.get('[data-qa="password"]');
  }
  getaccDays() {
    return cy.get('[data-qa="days"]');
  }
  getaccMonths() {
    return cy.get('[data-qa="months"]');
  }
  getaccYears() {
    return cy.get('[data-qa="years"]');
  }
  getsignupCheckbox() {
    return cy.get("#uniform-newsletter>span>input");
  }
  getSignuptermtext() {
    return cy.get('.checkbox>label[for="newsletter"]l');
  }
  getrecieveroffersCheckbox() {
    return cy.get("#optin");
  }
  getrecieverofferstext() {
    return cy.get('.checkbox>label[for="optin"]');
  }
  getAddrfirstname() {
    return cy.get('[data-qa="first_name"]');
  }
  getAddrlastname() {
    return cy.get('[data-qa="last_name"]');
  }
  getAddrcompany() {
    return cy.get('[data-qa="company"]');
  }
  getAddraddressline1() {
    return cy.get('[data-qa="address"]');
  }
  getAddraddressline2() {
    return cy.get('[data-qa="address2"]');
  }
  getAddrCountry() {
    return cy.get('[data-qa="country"]');
  }
  getAddrState() {
    return cy.get('[data-qa="state"]');
  }
  getAddrCity() {
    return cy.get('[data-qa="city"]');
  }
  getAddrZipCode() {
    return cy.get('[data-qa="zipcode"]');
  }
  getAddrMobileNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  getCreateAccBtn() {
    return cy.get('[data-qa="create-account"]');
  }
  getAccCreatedtext() {
    return cy.get('[data-qa="account-created"]>b');
  }

  getContinuebtn() {
    return cy.get('[data-qa="continue-button"]');
  }

  getLoggedname() {
    return cy.get(":nth-child(10) > a > b", { timeout: 2000 });
  }
  getDeleteAccbtn() {
    return cy.get(".shop-menu>ul>li:nth-child(5)>a");
  }

  getAccDeletedText() {
    return cy.get('[data-qa="account-deleted"]>b');
  }
}
