const chalk = require('chalk');
const util = require('../../common/util');

module.exports = {
    askNetwork,
    askDataPath,
    askMiningOptions,
    askJsonRpcOptions,
    askP2POptions,
};

async function askNetwork() {
    const answers = await this.prompt([
        {
            type: 'list',
            choices: _ethereumNetworkChoices(),
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

    this.ethereumNetwork = JSON.stringify(answers.ethereumNetwork);
    this.customGenesisPath = JSON.stringify(answers.customGenesisPath);
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
    this.dataPath = JSON.stringify(answers.dataPath);
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
        this.minerCoinbase = JSON.stringify(minerCoinbaseAnswers.minerCoinbase);
    }
}

async function askJsonRpcOptions() {
    var answers = await this.prompt([
        {
            type: "confirm",
            name: "rpcHttpEnabled",
            message: "Do you want to enable the JSON-RPC HTTP service ?",
            default: this.rpcHttpEnabled,
            store: true,
        }
    ]);
    this.rpcHttpEnabled = answers.rpcHttpEnabled;
    if (this.rpcHttpEnabled) {
        answers = await this.prompt([
            {
                type: "confirm",
                name: "configureJsonRpcOptions",
                message: "Do you want to configure the JSON-RPC options now ?",
                default: this.configureJsonRpcOptions,
                store: true,
            }
        ]);
        this.configureJsonRpcOptions = answers.configureJsonRpcOptions;
        if (this.configureJsonRpcOptions) {
            answers = await this.prompt([
                {
                    type: 'String',
                    name: 'rpcHttpHost',
                    message: `What is the ${chalk.yellow('*JSON RPC HTTP host address*')} ?`,
                    default: this.rpcHttpHost,
                    store: true,
                },
            ]);
            this.rpcHttpHost = JSON.stringify(answers.rpcHttpHost);
            answers = await this.prompt([
                {
                    type: 'number',
                    name: 'rpcHttpPort',
                    message: `What is the ${chalk.yellow('*JSON RPC HTTP port*')} ?`,
                    default: this.rpcHttpPort,
                    store: true,
                },
            ]);
            this.rpcHttpPort = answers.rpcHttpPort;

            answers = await this.prompt({
                message: 'Select the list of APIs to enable on JSON-RPC HTTP service',
                type: 'checkbox',
                name: 'apis',
                choices: _rpcHttpApisChoices(),
            });
            this.rpcHttpApis = JSON.stringify(answers.apis.join(','));
        }
    }
}

async function askP2POptions() {
    var answers = await this.prompt([
        {
            type: "confirm",
            name: "p2pEnabled",
            message: "Do you want to enable P2P functionality ?",
            default: this.p2pEnabled,
            store: true,
        }
    ]);
    this.p2pEnabled = answers.p2pEnabled;
    if (this.p2pEnabled) {
        answers = await this.prompt([
            {
                type: "confirm",
                name: "configureP2pOptions",
                message: "Do you want to configure the P2P options now ?",
                default: this.configureP2pOptions,
                store: true,
            }
        ]);
        this.configureP2pOptions = answers.configureP2pOptions;
        if (this.configureP2pOptions) {
            answers = await this.prompt([
                {
                    type: 'String',
                    name: 'p2pHost',
                    message: `What is the ${chalk.yellow('*P2P host address*')} ?`,
                    default: this.p2pHost,
                    store: true,
                },
            ]);
            this.p2pHost = JSON.stringify(answers.p2pHost);
            answers = await this.prompt([
                {
                    type: 'number',
                    name: 'p2pPort',
                    message: `What is the ${chalk.yellow('*P2P port*')} ?`,
                    default: this.p2pPort,
                    store: true,
                },
            ]);
            this.p2pPort = answers.p2pPort;
            answers = await this.prompt([
                {
                    type: 'String',
                    name: 'p2pInterface',
                    message: `What is the ${chalk.yellow('*P2P network inteface*')} ?`,
                    default: this.p2pInterface,
                    store: true,
                },
            ]);
            this.p2pInterface = JSON.stringify(answers.p2pInterface);
            answers = await this.prompt([
                {
                    type: "confirm",
                    name: "discoveryEnabled",
                    message: "Do you want to enable peer discovery ?",
                    default: this.discoveryEnabled,
                    store: true,
                }
            ]);
            this.discoveryEnabled = answers.discoveryEnabled;
        }
    }
}

function _ethereumNetworkChoices() {
    return [
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
}

function _rpcHttpApisChoices() {
    return [
        {
            value: 'ETH',
            checked: true,
        },
        {
            value: 'NET',
            checked: true,
        },
        {
            value: 'WEB3',
            checked: true,
        },
        {
            value: 'ADMIN',
            checked: false,
        },
        {
            value: 'CLIQUE',
            checked: false,
        },
        {
            value: 'DEBUG',
            checked: false,
        },
        {
            value: 'EEA',
            checked: false,
        },
        {
            value: 'IBFT',
            checked: false,
        },
        {
            value: 'MINER',
            checked: false,
        },
        {
            value: 'PERM',
            checked: false,
        },
        {
            value: 'PLUGINS',
            checked: false,
        },
        {
            value: 'PRIV',
            checked: false,
        },
        {
            value: 'TRACE',
            checked: false,
        },
        {
            value: 'TXPOOL',
            checked: false,
        },
    ];
}