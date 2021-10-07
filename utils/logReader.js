"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogReader = void 0;
var fs = require('fs');
var AppLogReader = /** @class */ (function () {
    function AppLogReader() {
    }
    AppLogReader.prototype.readLogFile = function (filePath) {
        console.log("Load log file");
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent;
    };
    return AppLogReader;
}());
exports.AppLogReader = AppLogReader;
