export interface LogReader {
    readLogFile(filePath: string): string;
}
var fs = require('fs');

export class AppLogReader implements LogReader {
    constructor() {
    }
    public readLogFile(filePath: string): string {
        console.log("Load log file")
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent
    }
}
