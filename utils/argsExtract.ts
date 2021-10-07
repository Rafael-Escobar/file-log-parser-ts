const yargs = require('yargs');

export class ArgsExtractor {
    public getCommandLineArgs(): any {
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
    }
}