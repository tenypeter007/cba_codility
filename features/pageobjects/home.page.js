const Page = require('./page');

class HomePage extends Page 
{
    get inputWarriorName () { return $('input[id="worrior_username"]') }
    get btnCreateWarrior () { return $('a[id="warrior"]') }
    get btnStart() { return $('a[id="start"]')}

    async createUser (username) {
        await this.inputWarriorName.scrollIntoView();
        await this.inputWarriorName.setValue(username);
        await this.btnCreateWarrior.click();
    }
    
    async startChallenge()
    {
        await this.btnStart.waitForClickable({ timeout: 5000 });
        await this.btnStart.click();
    }
}

module.exports = new HomePage();
    