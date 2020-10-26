const Generator = require('yeoman-generator');
const packageInformation = require('../../package.json');
const chalk = require('chalk');
const prompts = require('./prompts');


module.exports = class extends Generator {
    get prompting() {
        return this._prompting();
    }

    initializing() {
        this._initDefaultConfig();
        this._printWelcomeMessage();
    }

    _prompting() {
        return {
            askNetwork: prompts.askNetwork,
            askDataPath: prompts.askDataPath,
            askMiningOptions: prompts.askMiningOptions,
        };
    }

    configuring() {

    }

    writing() {
        this.outputConfigPath = 'besu/config.toml';
        this.fs.copyTpl(
            this.templatePath('config.toml'),
            this.destinationPath(this.outputConfigPath),
            {
                ethereumNetwork: this.ethereumNetwork,
                dataPath: this.dataPath,
                minerEnabled: this.minerEnabled,
                minerCoinbase: this.minerCoinbase,
                customGenesisPath: this.customGenesisPath,
            }
        );
        this.config.save();
    }

    /*conflicts() {

    }*/

    /*install() {

    }*/

    end() {
        this._printGoodByeMessage();
    }

    _printWelcomeMessage() {
        this.log('\n');
        this.log(`${chalk.green('\'##::::\'##:\'##:::\'##:\'########::\'########:\'########::\'##:::::::\'########:\'########:::\'######:::\'########:\'########::\n' +
            ' ##:::: ##:. ##:\'##:: ##.... ##: ##.....:: ##.... ##: ##::::::: ##.....:: ##.... ##:\'##... ##:: ##.....:: ##.... ##:\n' +
            ' ##:::: ##::. ####::: ##:::: ##: ##::::::: ##:::: ##: ##::::::: ##::::::: ##:::: ##: ##:::..::: ##::::::: ##:::: ##:\n' +
            ' #########:::. ##:::: ########:: ######::: ########:: ##::::::: ######::: ##:::: ##: ##::\'####: ######::: ########::\n' +
            ' ##.... ##:::: ##:::: ##.....::: ##...:::: ##.. ##::: ##::::::: ##...:::: ##:::: ##: ##::: ##:: ##...:::: ##.. ##:::\n' +
            ' ##:::: ##:::: ##:::: ##:::::::: ##::::::: ##::. ##:: ##::::::: ##::::::: ##:::: ##: ##::: ##:: ##::::::: ##::. ##::\n' +
            ' ##:::: ##:::: ##:::: ##:::::::: ########: ##:::. ##: ########: ########: ########::. ######::: ########: ##:::. ##:\n' +
            '..:::::..:::::..:::::..:::::::::........::..:::::..::........::........::........::::......::::........::..:::::..::\n' +
            ':::::::::::::::::::::\'########::\'########::\'######::\'##::::\'##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ##.... ##: ##.....::\'##... ##: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ##:::: ##: ##::::::: ##:::..:: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ########:: ######:::. ######:: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ##.... ##: ##...:::::..... ##: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ##:::: ##: ##:::::::\'##::: ##: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            '::::::::::::::::::::: ########:: ########:. ######::. #######:::::::::::::::::::::::::::::::::::::::::::::::::::::  \n' +
            ':::::::::::::::::::::........:::........:::......::::.......::::::::::::::::::::::::::::::::::::::::::::::::::::::  ')}`);
        this.log(chalk.blue('https://github.com/hyperledger/besu'));
        this.log(`Full documentation at: ${chalk.magenta('https://besu.hyperledger.org/')}`);
        this.log(chalk.white('Welcome to Hyperledger Besu config generator ') + chalk.yellow(`v${packageInformation.version}`));
        this.log(chalk.white(`Application files will be generated in folder: ${chalk.yellow(process.cwd())}`));
    }

    _printGoodByeMessage() {
        this.log('Configuration file is ready: ', chalk.yellow(`${process.cwd()}/${this.outputConfigPath}`));
        this.log('Run Hypderledger Besu with: ', chalk.yellow(`besu --config-file=${process.cwd()}/${this.outputConfigPath}`));
        this.log(chalk.greenBright.bold(`Goodbye!`));
    }

    _initDefaultConfig() {
        this.outputConfigPath = '';
    }
};