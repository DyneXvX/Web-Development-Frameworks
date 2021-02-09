"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
let app = express_1.default();
app.use('/Student/:nNumber/:nfName/:nlName', (req, res, next) => {
    //res.send(`Hello Students! N Number: ${req.params.nNumber}`);
    res.send(`Hello Student First Name: ${req.params.nfName} and Last Name: ${req.params.nlName}`);
});
app.use('/Students', (req, res, next) => {
    res.send('Hello Students');
});
app.use('/', (req, res, next) => {
    res.status(404).send("Sorry the page is not found.");
});
/*function reqListener(req: IncomingMessage, res: ServerResponse)
{
switch(req.url)
{
    case "/Students":
        {
            res.write("Hello Students!");
            res.end();
        }
        break;
    case "/Teacher":
        {
            res.write("Hello Teacher");
            res.end();
        }
        break;
    default:
        {
            res.statusCode=404;
            res.end();
        }
        break;
}
}*/
let server = http_1.default.createServer(app);
server.listen(3000);
//# sourceMappingURL=index.js.map