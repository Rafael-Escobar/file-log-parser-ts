interface LogWriter {
    writeLogFile(filePath: string, data: object):boolean;
}

export class AppLogWriter implements LogWriter {
    constructor() {
    }
    public writeLogFile(filePath: string, data:object): boolean {
        let fs = require('fs');
        let jsonString = JSON.stringify(data)
        return fs.writeFile(filePath, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
                return false
            } else {
                console.log('Successfully wrote file')
                return true
            }
        })
    }
}
