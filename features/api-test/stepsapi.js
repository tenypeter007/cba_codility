const pactum = require('pactum');
const  auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ0ZW55IiwiaWF0IjoxNjMxNzgzNDIyLCJleHAiOjE2MzIwNDI2MjJ9.EZnQKHi68HoTigfKpjsA3dMo6M22ZYMYQfkrVLlbsKQ"
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

let spec = pactum.spec();
Before(() => {
    spec = pactum.spec();
  });

Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
    spec[method.toLowerCase()](endpoint);
  });

  When(/^I set body to$/, function (body) {
    spec.withBody(body);
  });

  When('I receive a response', async function () {
    await spec.withHeaders({'Authorization':auth,
                            'Accept':'*/*',
                            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'   })
                             .toss();
  });

  Then('I expect response should have a status {int}', function (code) {
    spec.response().should.have.status(code);
  });

  Then(/^I expect response should have a json like$/, function (json) {
    spec.response().should.have.jsonLike(JSON.parse(json));
  });

  Then(/^I expect response should contain a json like$/, function (json) {
    spec.response().should.have.bodyContains(JSON.parse(json));
    console.log(spec.response().should.have.bodyContains(JSON.parse(json)))
  });