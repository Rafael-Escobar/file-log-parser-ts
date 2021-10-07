import { AppLogReader } from "../utils/logReader";
import { AppLogWriter } from "../utils/logWriter";
import { ParserLogApp, RegexCheck } from "../utils/logParser";

interface LogExtractor {
    extractLog(filePathInput: string): Array<string>;
}

interface LogExport {
    exportLog(filePathOutput: string, data: object): boolean;
}

interface LogProcessor {
    processLog(filePathInput: string, filePathOutput: string):boolean;
}

export class AppLogProcessor implements LogExtractor, LogExport, LogProcessor {
    
    private regexFilter: object
    
    constructor(regexFilter: object) {
        this.regexFilter = regexFilter
    }
    
    extractLog(filePathInput: string): Array<string>{
        let reader = new AppLogReader()
        return reader.readLogFile(filePathInput).split("\n")
    }
    
    exportLog(filePathOutput: string,data:object): boolean{
        let writer = new AppLogWriter()
        return writer.writeLogFile(filePathOutput,data)
    }
    
    processLog(filePathInput: string, filePathOutput:string): boolean{
        let linesOfLog = this.extractLog(filePathInput)
        let parser = new ParserLogApp(this.regexFilter)
        let objectList = parser.filterAndParser(linesOfLog)
        console.log(objectList)
        return this.exportLog(filePathOutput, objectList)
    }

}