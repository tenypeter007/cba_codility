const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const ChallengePage = require('../pageobjects/challenge.page');
const GameChallengePage = require('../pageobjects/gamechallenge.page');
const BusChallengePage = require('../pageobjects/buschallenge.page');
const LeaderboardPage = require('../pageobjects/leaderboard.page');

Given(/^I am on the home page$/, async () => {
    HomePage.open()
});

When(/^I create a user with (.+)$/, async (username) => {
    await HomePage.createUser(username);
});

Then(/^I should see a start button$/, async () => {
    await expect(HomePage.btnStart).toBeExisting();
   
});

When(/^I start the challenge$/, async () => {
    await HomePage.startChallenge();
});

When(/^I start game challenge$/, async () => {
    await ChallengePage.startGameChallenge();
    await GameChallengePage.startGameChallenge()
});

When(/^I start bus challenge$/, async () => {
    await ChallengePage.startBusChallenge();
    await BusChallengePage.startBusChallenge()
});
Then(/^I select option (.+) in game challenge$/, async (answer) => {
    if(answer = "1")
    await GameChallengePage.selectFirstOption()
    else if (answer ="2")
    await GameChallengePage.selectSecondOption()
 });

Then(/^I select option (.+) in bus challenge$/, async (answer) => {
   if(answer = "1")
   await BusChallengePage.selectFirstOption()
   else if (answer ="2")
   await BusChallengePage.selectSecondOption()
});

When(/^I go to next question in game challenge$/, async () => {
    await GameChallengePage.clickContinueButton();
});

When(/^I go to leaderboard from bus challenge$/, async () => {
    await BusChallengePage.clickLeaderboard();
});

Then(/^I navigate to home page from leaderboard$/, async () => {
    await LeaderboardPage.clickContinue();
});

Then(/^I check (.+) is displayed in leaderboard$/, async (username) => {
    await expect(LeaderboardPage.checkUsername(username)).toBeExisting();
});


