"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogProcessor = void 0;
var AppLogProcessor = /** @class */ (function () {
    function AppLogProcessor(regexFilter, logReader, logWriter, logParser) {
        this.logReader = logReader;
        this.logWriter = logWriter;
        this.logParser = logParser;
        this.logParser.setRegexFilter(regexFilter);
    }
    AppLogProcessor.prototype.extractLog = function (filePathInput) {
        return this.logReader.readLogFile(filePathInput).split("\n");
    };
    AppLogProcessor.prototype.exportLog = function (filePathOutput, data) {
        return this.logWriter.writeLogFile(filePathOutput, data);
    };
    AppLogProcessor.prototype.processLog = function (filePathInput, filePathOutput) {
        var linesOfLog = this.extractLog(filePathInput);
        var objectList = this.logParser.filterAndParser(linesOfLog);
        console.log(objectList);
        return this.exportLog(filePathOutput, objectList);
    };
    return AppLogProcessor;
}());
exports.AppLogProcessor = AppLogProcessor;
