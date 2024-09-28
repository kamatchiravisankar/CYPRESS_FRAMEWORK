export class PO_HomePage {
  getSignUpBtn() {
    return cy.get('a[href="/login"]');
  }
  getcontactUS() {
    return cy.get('[href="/contact_us"]');
  }
  gettextincontactus() {
    return cy.get(".contact-form>h2");
  }
  getcontactscreenName() {
    return cy.get('[data-qa="name"]');
  }
  getcontactscreenemail() {
    return cy.get('[data-qa="email"]');
  }
  getcontactscreensub() {
    return cy.get('[data-qa="subject"]');
  }
  getcontactscreenmsg() {
    return cy.get('[data-qa="message"]');
  }
  getchoosefilebtn() {
    return cy.get('input[name="upload_file"]');
  }
  getcontactscreensubmitbtn() {
    return cy.get('[data-qa="submit-button"]');
  }
  getTestCasebtn() {
    return cy.contains("a.test_cases_list>button", "Test Cases");
  }
  getProduct() {
    return cy.get('[href="/products"]');
  }
  getSubscription() {
    return cy.get(".single-widget>h2");
  }
  getSubscriptionemailbox() {
    return cy.get("#susbscribe_email");
  }
  getSubscribeicon() {
    return cy.get("#subscribe");
  }
  getSubscriptionsuccessmsg() {
    return cy.get(".alert-success");
  }
  

}
