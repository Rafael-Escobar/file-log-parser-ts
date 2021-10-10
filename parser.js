"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logProcessor_1 = require("./controller/logProcessor");
var argsExtract_1 = require("./utils/argsExtract");
var settings_1 = require("./config/settings");
var logReader_1 = require("./utils/logReader");
var logWriter_1 = require("./utils/logWriter");
var logParser_1 = require("./utils/logParser");
function main() {
    var argv = new argsExtract_1.ArgsExtractor().getCommandLineArgs();
    var regexFilters = new settings_1.AppConfig().getRegexConfig();
    var processor = new logProcessor_1.AppLogProcessor(regexFilters, new logReader_1.AppLogReader(), new logWriter_1.AppLogWriter(), new logParser_1.AppParserLog());
    if (processor.processLog(argv.input, argv.output)) {
        console.log("File " + argv.output + " created with success");
    }
    else {
        console.log("Fail on create file " + argv.output);
    }
}
main();
