const Page = require('./page');

class LeaderBoardPage extends Page 
{
    get btnContinue () { return $('button[id="leaderboard_link"]') }

    
    async clickContinue () {
        await this.btnContinue.click();
    }
    async checkUsername (username) {
        return $('//td[contains(text(),"'+username+'")]')
    }
    
}

module.exports = new LeaderBoardPage();
    