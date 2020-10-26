const Generator = require('yeoman-generator');
const packageInformation = require('../../package.json');
const chalk = require('chalk');
const prompts = require('./prompts');


module.exports = class extends Generator {
    get prompting() {
        return this._prompting();
    }

    initializing() {
        this.outputConfigPath = '';
        this._printWelcomeMessage();
        this.env.error("Ethereum client not yet supported.");
    }

    _prompting() {
        return {};
    }

    configuring() {

    }

    writing() {
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
        this.log(`${chalk.green(':\'#######::\'########::\'########:\'##::: ##::::\'########:\'########:\'##::::\'##:\'########:\'########::\'########:\'##::::\'##:\'##::::\'##:\n' +
            '\'##.... ##: ##.... ##: ##.....:: ###:: ##:::: ##.....::... ##..:: ##:::: ##: ##.....:: ##.... ##: ##.....:: ##:::: ##: ###::\'###:\n' +
            ' ##:::: ##: ##:::: ##: ##::::::: ####: ##:::: ##:::::::::: ##:::: ##:::: ##: ##::::::: ##:::: ##: ##::::::: ##:::: ##: ####\'####:\n' +
            ' ##:::: ##: ########:: ######::: ## ## ##:::: ######:::::: ##:::: #########: ######::: ########:: ######::: ##:::: ##: ## ### ##:\n' +
            ' ##:::: ##: ##.....::: ##...:::: ##. ####:::: ##...::::::: ##:::: ##.... ##: ##...:::: ##.. ##::: ##...:::: ##:::: ##: ##. #: ##:\n' +
            ' ##:::: ##: ##:::::::: ##::::::: ##:. ###:::: ##:::::::::: ##:::: ##:::: ##: ##::::::: ##::. ##:: ##::::::: ##:::: ##: ##:.:: ##:\n' +
            '. #######:: ##:::::::: ########: ##::. ##:::: ########:::: ##:::: ##:::: ##: ########: ##:::. ##: ########:. #######:: ##:::: ##:\n' +
            ':.......:::..:::::::::........::..::::..:::::........:::::..:::::..:::::..::........::..:::::..::........:::.......:::..:::::..::')}`);
        this.log(chalk.white('Welcome to Open Ethereum config generator ') + chalk.yellow(`v${packageInformation.version}`));
        this.log(chalk.white(`Application files will be generated in folder: ${chalk.yellow(process.cwd())}`));
    }

    _printGoodByeMessage() {
        /*this.log('Configuration file is ready: ', chalk.yellow(`${process.cwd()}/${this.outputConfigPath}`));
        this.log(chalk.magentaBright.bold(`Goodbye!`));*/
    }
};