import { ParserLogApp } from "../utils/logParser";
import { AppConfig } from "../config/settings";

const regexParser = new AppConfig().getRegexConfig()

var lineOfLog =`2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}`
var timestamp =`2021-08-09T02:12:51.259Z`
var type =`error`
var object =`{"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}`

describe("test add function", () => {
    var parserLogApp = new ParserLogApp(regexParser)
    it("Extract timestamp", () => {
        expect(parserLogApp.extractTimeStamp(lineOfLog)).toBe(timestamp);
    });
    it("Extract type", () => {
        expect(parserLogApp.extractTypeLog(lineOfLog)).toBe(type);
    });
    it("Extract timestamp", () => {
        expect(parserLogApp.extractDataObject(lineOfLog)).toBe(object);
    });

});