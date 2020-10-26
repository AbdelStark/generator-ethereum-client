const chalk = require('chalk');
const util = require('../../common/util');

module.exports = {
    askClient,
};

async function askClient() {
    const choices = [
        {
            name: 'Hyperledger Besu',
            value: 'hyperledger-hyperledger-besu'
        },
        {
            name: 'Geth',
            value: 'geth'
        },
        {
            name: 'Nethermind',
            value: 'nethermind'
        },
        {
            name: 'Open Ethereum',
            value: 'open-ethereum'
        },
    ];

    const answers = await this.prompt([
        {
            type: 'list',
            choices: choices,
            message: `Which ${chalk.yellow('*ethereum client*')}  would you like to use ?`,
            name: 'ethereumClientName',
            default: this.ethereumClientName,
            store: true,
        },
    ]);

    this.ethereumClientName = answers.ethereumClientName;
}