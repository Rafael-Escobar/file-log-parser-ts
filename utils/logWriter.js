"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogWriter = void 0;
var AppLogWriter = /** @class */ (function () {
    function AppLogWriter() {
    }
    AppLogWriter.prototype.writeLogFile = function (filePath, data) {
        var fs = require('fs');
        var jsonString = JSON.stringify(data);
        return fs.writeFile(filePath, jsonString, function (err) {
            if (err) {
                console.log('Error writing file', err);
                return false;
            }
            else {
                console.log('Successfully wrote file');
                return true;
            }
        });
    };
    return AppLogWriter;
}());
exports.AppLogWriter = AppLogWriter;
