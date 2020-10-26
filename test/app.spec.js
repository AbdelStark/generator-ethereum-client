const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('ethereum-client:app', function () {
    it('runs', function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({})
            .then(function () {

            });
    });
});

