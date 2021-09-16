const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');
Before(() => {
  request.setBaseUrl('https://supervillain.herokuapp.com');
  settings.setReporterAutoRun(false);
});
