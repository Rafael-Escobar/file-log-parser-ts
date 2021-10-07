"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogProcessor = void 0;
var logReader_1 = require("../utils/logReader");
var logWriter_1 = require("../utils/logWriter");
var logParser_1 = require("../utils/logParser");
var AppLogProcessor = /** @class */ (function () {
    function AppLogProcessor(regexFilter) {
        this.regexFilter = regexFilter;
    }
    AppLogProcessor.prototype.extractLog = function (filePathInput) {
        var reader = new logReader_1.AppLogReader();
        return reader.readLogFile(filePathInput).split("\n");
    };
    AppLogProcessor.prototype.exportLog = function (filePathOutput, data) {
        var writer = new logWriter_1.AppLogWriter();
        return writer.writeLogFile(filePathOutput, data);
    };
    AppLogProcessor.prototype.processLog = function (filePathInput, filePathOutput) {
        var linesOfLog = this.extractLog(filePathInput);
        var parser = new logParser_1.ParserLogApp(this.regexFilter);
        var objectList = parser.filterAndParser(linesOfLog);
        console.log(objectList);
        return this.exportLog(filePathOutput, objectList);
    };
    return AppLogProcessor;
}());
exports.AppLogProcessor = AppLogProcessor;
