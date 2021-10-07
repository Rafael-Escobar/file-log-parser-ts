"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgsExtractor = void 0;
var yargs = require('yargs');
var ArgsExtractor = /** @class */ (function () {
    function ArgsExtractor() {
    }
    ArgsExtractor.prototype.getCommandLineArgs = function () {
        return yargs
            .command('--input --output', 'detach log', {
            input: {
                description: 'input file',
                alias: '-i',
                type: 'string',
            }, output: {
                description: 'output file',
                alias: '-o',
                type: 'string',
            }
        })
            .help()
            .alias('help', 'h')
            .argv;
    };
    return ArgsExtractor;
}());
exports.ArgsExtractor = ArgsExtractor;
