describe('"ExceltoJson', () => {
  const xlsxpath = "./cypress/fixtures/AutomationTestData.xlsx";
  it("TEST", () => {
    cy.task("convertXlsxToJson", xlsxpath);
  });
});
