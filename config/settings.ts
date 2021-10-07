interface config {
    getRegexConfig(filePath: string): object;
}
var fs = require('fs');

export class AppConfig implements config {
    constructor() {
    }
    public getRegexConfig(): object {
        return {
            "regexValidLineOfLog": /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)? -\s[a-zA-Z]+ - \{.*\}[ ]*$/i,
            "regexTimeStamp": /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?/i,
            "regexType": /-\s[a-zA-Z]+ -/i,
            "regexJsonObject": /\{.*\}/i,
            "regexFilterLine": /- error -/i,
        }
    }
}