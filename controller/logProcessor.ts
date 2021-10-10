import { LogReader } from "../utils/logReader";
import { LogWriter } from "../utils/logWriter";
import { LogParser } from "../utils/logParser";

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
    
    private logReader: any
    private logWriter: any
    private logParser: any
    
    constructor(regexFilter: object, logReader: LogReader, logWriter: LogWriter, logParser: LogParser) {
        this.logReader = logReader
        this.logWriter = logWriter
        this.logParser = logParser
        this.logParser.setRegexFilter(regexFilter)
    }
    
    extractLog(filePathInput: string): Array<string>{
        return this.logReader.readLogFile(filePathInput).split("\n")
    }
    
    exportLog(filePathOutput: string,data:object): boolean{
        return this.logWriter.writeLogFile(filePathOutput,data)
    }
    
    processLog(filePathInput: string, filePathOutput:string): boolean{
        let linesOfLog = this.extractLog(filePathInput)
        let objectList = this.logParser.filterAndParser(linesOfLog)
        console.log(objectList)
        return this.exportLog(filePathOutput, objectList)
    }

}