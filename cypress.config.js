const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const path = require("path");
const { writeFileSync } = require("fs");
const { stringify } = require("querystring");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist, findFiles } = require("cy-verify-downloads");
module.exports = {
  reporter: "cypress-mochawesome-reporter",
  video: true,
  projectId: "w426yj",
  experimentalSessionSupport: true,
  e2e: {
    baseUrl: "https://automationexercise.com/",

    specPattern: "cypress/e2e/AllTest/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
        convertXlsxToJson(filepath) {
          const workbook = xlsx.readFile(filepath);
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = xlsx.utils.sheet_to_json(worksheet);

          const filename = path.basename(filepath, ".xlsx");
          const jsonfile = `./cypress/fixtures/${filename}.json`;
          writeFileSync(jsonfile, JSON.stringify(jsonData, null, 2));
          return null;
        },
      });

      on("task", { isFileExist, findFiles });
    },
  },
};
