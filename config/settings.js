"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
var fs = require('fs');
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.prototype.getRegexConfig = function () {
        return {
            "regexValidLineOfLog": /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)? -\s[a-zA-Z]+ - \{.*\}[ ]*$/i,
            "regexTimeStamp": /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?/i,
            "regexType": /-\s[a-zA-Z]+ -/i,
            "regexJsonObject": /\{.*\}/i,
            "regexFilterLine": /- error -/i,
        };
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
