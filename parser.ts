
import { AppLogProcessor } from "./controller/logProcessor";
import { ArgsExtractor } from "./utils/argsExtract";
import { AppConfig } from "./config/settings";
import { AppLogReader } from "./utils/logReader";
import { AppLogWriter } from "./utils/logWriter";
import { AppParserLog } from "./utils/logParser";

function main() {
    
    const argv = new ArgsExtractor().getCommandLineArgs()

    const regexFilters = new AppConfig().getRegexConfig()

    var processor = new AppLogProcessor(regexFilters, new AppLogReader(), new AppLogWriter(), new AppParserLog())

    if (processor.processLog(argv.input, argv.output)) {
        console.log(`File ${argv.output} created with success`)
    } else {
        console.log(`Fail on create file ${argv.output}`)
    }
}

main()