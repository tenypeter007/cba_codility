const Page = require('./page');

class BusChallengePage extends Page 
{
    get btnStartBusChallenge () { return $('button[id="bus_timer_start"]') }
    get popStartGameChallenge () { return $('button[id="start"]') }
    get btnFirstOption () { return $('a[id="bus_answer_1"]') }
    get btnSecondOption () { return $('a[id="bus_answer_2"]') }
    get btnLeaderBoard() { return $('button[id="leaderboard_link"]') }
    
    async startBusChallenge () {
        await this.btnStartBusChallenge.click();
    }


    async selectFirstOption () {
        await this.btnFirstOption.waitForClickable({ timeout: 5000 });
        await this.btnFirstOption.click();
    }

    async selectSecondOption () {
        await this.btnSecondOption.waitForClickable({ timeout: 5000 });
        await this.btnSecondOption.click();
    }

     async clickLeaderboard () {
        await this.btnLeaderBoard.waitForClickable({ timeout: 5000 });
        await this.btnLeaderBoard.click();
    }
}

module.exports = new BusChallengePage();
    