Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("login", (url, email, password) => {
  cy.visit(url);
  cy.get('a[href="/login"]').click({ timeout: 3000 });
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

const ExcelJS = require("exceljs");

Cypress.Commands.add(
  "convertExcelToJson",
  (fileName, worksheetName, outputFileName) => {
    cy.fixture(fileName, "binary").then((fileContent) => {
      const workbook = new ExcelJS.Workbook();
      return workbook.xlsx.load(fileContent).then(() => {
        const worksheet = workbook.getWorksheet(worksheetName);
        const jsonData = [];
        // Find the column index of "TO_BE_TESTED" header
        let toBeTestedColumnIndex = null;
        const headerRow = worksheet.getRow(1);
        for (let col = 1; col <= headerRow.cellCount; col++) {
          const headerCell = headerRow.getCell(col);
          if (
            headerCell.value &&
            headerCell.value.toString().trim() === "To_be_tested"
          ) {
            toBeTestedColumnIndex = col;
            break;
          }
        }
        // Convert each row to a JSON object if "TO_BE_TESTED" is set to "YES"
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
          if (rowNumber > 1 && toBeTestedColumnIndex !== null) {
            const toBeTestedCell = row.getCell(toBeTestedColumnIndex);
            const toBeTestedValue = toBeTestedCell.value;
            if (
              toBeTestedValue &&
              toBeTestedValue.toString().trim().toUpperCase() === "YES"
            ) {
              const jsonObject = {};
              row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                const headerCell = headerRow.getCell(colNumber);
                const header = headerCell.value.toString().trim();
                const value = cell.value;
                jsonObject[header] = value;
              });
              jsonData.push(jsonObject);
            }
          }
        });

        const jsonContent = JSON.stringify(jsonData, null, 2);
        const filePath = `cypress/fixtures/${outputFileName}`;
        cy.writeFile(filePath, jsonContent);

        return jsonData;
      });
    });
  }
);
