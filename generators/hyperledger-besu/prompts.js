const chalk = require('chalk');
const util = require('../../common/util');

module.exports = {
    askNetwork,
    askDataPath,
    askMiningOptions,
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
        {
            name: 'Custom',
            value: 'custom'
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
        {
            when: answers => ['custom'].includes(answers.ethereumNetwork),
            type: 'String',
            name: 'customGenesisPath',
            message: `What is the location of the ${chalk.yellow('*genesis file*')} ?`,
            default: this.customGenesisPath,
            store: true,
        },
    ]);

    this.ethereumNetwork = answers.ethereumNetwork;
    this.customGenesisPath = answers.customGenesisPath;
}


async function askDataPath() {
    const answers = await this.prompt([
        {
            type: 'String',
            name: 'dataPath',
            message: `What is the ${chalk.yellow('*data directory*')} ?`,
            default: this.dataPath,
            store: true,
        },
    ]);
    this.dataPath = answers.dataPath;
}

async function askMiningOptions() {
    const answers = await this.prompt([
        {
            type: "confirm",
            name: "minerEnabled",
            message: "Do you want to mine with your node ?",
            default: this.minerEnabled,
            store: true,
        }
    ]);
    this.minerEnabled = answers.minerEnabled;
    if (this.minerEnabled) {
        const minerCoinbaseAnswers = await this.prompt([
            {
                type: 'String',
                name: 'minerCoinbase',
                message: `What is the ${chalk.yellow('*miner coinbase address*')} ?`,
                default: this.minerCoinbase,
                store: true,
            },
        ]);
        this.minerCoinbase = minerCoinbaseAnswers.minerCoinbase;
    }
}