const pactumReport = require('cucumber-html-reporter')
var options = {
  theme: 'bootstrap',
  jsonFile: 'api-report/cucumber_report.json',
  output: 'api-report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};
pactumReport.generate(options);