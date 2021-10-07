interface RegexParser {
    validateWithRegex(content: string, rule: RegExp):boolean;
}

interface ParserLog{
    extractTimeStamp(log: string): string;
    extractTypeLog(log: string): string;
    extractDataObject(log: string): string;
    filterAndParser(linesOfLog: Array<string>): Array<object>;
    filterLineOfLog(validLine: RegExp, filerLine: RegExp): any
}

export class RegexCheck implements RegexParser {
    public validateWithRegex(content: string, rule:RegExp):boolean {
        return rule.test(content);
    }
}

export class ParserLogApp implements ParserLog {
    public regexFilter:object
    constructor(regexFilter: object) {
        this.regexFilter = regexFilter
    }
    
    public extractTimeStamp(this,log: string): string{
        return this.regexFilter["regexTimeStamp"].exec(log)[0]
    }
    public extractTypeLog(this,log: string): string{
        return this.regexFilter["regexType"].exec(log)[0].replace(" -", "").replace("- ", "")
    }
    public extractDataObject(this,log: string): string{
        return this.regexFilter["regexJsonObject"].exec(log)[0]
    }

    public filterLineOfLog(validLine:RegExp,filerLine:RegExp): any{
        return function (element) {
            let checkRegex = new RegexCheck()
            return (checkRegex.validateWithRegex(element.trim(), validLine) && 
                checkRegex.validateWithRegex(element.trim(), filerLine))
        }
    }

    public parserToObject(this,log:string):object{
        let timeStampString = this.extractTimeStamp(log)
        let type = this.extractTypeLog(log)
        let dataObject = JSON.parse(this.extractDataObject(log))
        let timeStamp = new Date(timeStampString)
        return { 
            "timestamp": timeStamp.getTime(),
            "loglevel": type,
            "transactionId": dataObject.transactionId || "",
            "err": dataObject.details || "" 
        }
    }

    public filterAndParser(this,linesOfLog: Array<string>):Array<object>{
        let filteredLinesOfLog = linesOfLog.filter(this.filterLineOfLog(
            this.regexFilter["regexValidLineOfLog"],
            this.regexFilter["regexFilterLine"]
        ))
        let listOfObjects = filteredLinesOfLog.map( lineOfLog => {
            return this.parserToObject(lineOfLog)
        })
        return listOfObjects
    }

}