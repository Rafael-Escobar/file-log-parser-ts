"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserLogApp = exports.RegexCheck = void 0;
var RegexCheck = /** @class */ (function () {
    function RegexCheck() {
    }
    RegexCheck.prototype.validateWithRegex = function (content, rule) {
        return rule.test(content);
    };
    return RegexCheck;
}());
exports.RegexCheck = RegexCheck;
var ParserLogApp = /** @class */ (function () {
    function ParserLogApp(regexFilter) {
        this.regexFilter = regexFilter;
    }
    ParserLogApp.prototype.extractTimeStamp = function (log) {
        return this.regexFilter["regexTimeStamp"].exec(log)[0];
    };
    ParserLogApp.prototype.extractTypeLog = function (log) {
        return this.regexFilter["regexType"].exec(log)[0].replace(" -", "").replace("- ", "");
    };
    ParserLogApp.prototype.extractDataObject = function (log) {
        return this.regexFilter["regexJsonObject"].exec(log)[0];
    };
    ParserLogApp.prototype.filterLineOfLog = function (validLine, filerLine) {
        return function (element) {
            var checkRegex = new RegexCheck();
            return (checkRegex.validateWithRegex(element.trim(), validLine) &&
                checkRegex.validateWithRegex(element.trim(), filerLine));
        };
    };
    ParserLogApp.prototype.parserToObject = function (log) {
        var timeStampString = this.extractTimeStamp(log);
        var type = this.extractTypeLog(log);
        var dataObject = JSON.parse(this.extractDataObject(log));
        var timeStamp = new Date(timeStampString);
        return {
            "timestamp": timeStamp.getTime(),
            "loglevel": type,
            "transactionId": dataObject.transactionId || "",
            "err": dataObject.details || ""
        };
    };
    ParserLogApp.prototype.filterAndParser = function (linesOfLog) {
        var _this = this;
        var filteredLinesOfLog = linesOfLog.filter(this.filterLineOfLog(this.regexFilter["regexValidLineOfLog"], this.regexFilter["regexFilterLine"]));
        var listOfObjects = filteredLinesOfLog.map(function (lineOfLog) {
            return _this.parserToObject(lineOfLog);
        });
        return listOfObjects;
    };
    return ParserLogApp;
}());
exports.ParserLogApp = ParserLogApp;
