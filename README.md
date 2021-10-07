## Usage

To parse the log file is needed to follow commands

> npm run build
> node parser.js --input ./app.log --output ./errors.json

## Input
### Format
```<ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optionall, error description>", ...<additional log information>}```xml

### Example
2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}

## Output
### Format
[{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" }]

### Example
[{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]
