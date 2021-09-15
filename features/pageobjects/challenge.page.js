const Page = require('./page');

class ChallengePage extends Page 
{
    get btnBus () { return $('a[id="bus"]') }
    get btnNews () { return $('a[id="news"]') }
    
    async startBusChallenge () {
        await this.btnBus.click();
    }

    async startGameChallenge () {
        await this.btnNews.click();
    }
    
}

module.exports = new ChallengePage();
    