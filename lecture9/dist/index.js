"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const student_1 = require("./routes/student");
let app = express_1.default();
let ListOfKids = ['Johnny', 'Paul', 'Mike', 'Stephen'];
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json);
app.use("/Students", student_1.studentRouter);
app.get('/ListOfKids', (req, res, next) => {
    res.send(ListOfKids);
});
app.get('/NewKid', (req, res, next) => {
    res.send('<form method="POST" Action="Kids"><input type="text" name="Name"/><input type="submit"/></form>');
});
app.post('/Kids', (req, res, next) => {
    console.log(ListOfKids);
    console.log(req.body);
    ListOfKids.push(req.body.Name);
    res.send(req.body.Name);
});
// app.post('/Kids', (req, res, next) =>{
//     console.log('Triggered Kids Post');
//     console.log(req.body);
// });
app.use('/', (req, res, next) => {
    res.status(404).send("Sorry the page is not found...");
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