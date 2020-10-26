const chalk = require('chalk');
const util = require('../../common/util');

module.exports = {
    askNetwork,
};

async function askNetwork() {
    const choices = [
        {
            name: 'Mainnet',
            value: 'mainnet'
        },
        {
            name: 'Ropsten',
            value: 'ropsten'
        },
        {
            name: 'Goerli',
            value: 'goerli'
        },
        {
            name: 'Development',
            value: 'dev'
        },
    ];

    const answers = await this.prompt([
        {
            type: 'list',
            choices: choices,
            message: `Which ${chalk.yellow('*ethereum network*')}  would you like to use ?`,
            name: 'ethereumNetwork',
            default: this.ethereumNetwork,
            store: true,
        },
    ]);

    this.ethereumNetwork = answers.ethereumNetwork;
}