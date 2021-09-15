const Page = require('./page');

class GameChallengePage extends Page 
{
    
    get popStartGameChallenge () { return $('button[id="start"]') }
    get btnFirstOption () { return $('a[id="answer_1"]') }
    get btnSecondOption () { return $('a[id="answer_2"]') }
    get btnContinueButton() { return $('button[id="continue"]') }
    
    async startGameChallenge () {

        await this.popStartGameChallenge.click();
    }

    async selectFirstOption () {
        await this.btnFirstOption.waitForClickable({ timeout: 5000 });
        await this.btnFirstOption.click();
    }

    async selectSecondOption () {
        await this.btnSecondOption.waitForClickable({ timeout: 5000 });
        await this.btnSecondOption.click();
    }

    async clickContinueButton () {
        await this.btnContinueButton.waitForClickable({ timeout: 5000 });
        await this.btnContinueButton.click();
    }
    
}

module.exports = new GameChallengePage();
    