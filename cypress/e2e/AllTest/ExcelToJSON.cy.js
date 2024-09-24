export function ExceltoJSONConverter(xlsxpath) {
  cy.task("convertXlsxToJson", xlsxpath);
}
