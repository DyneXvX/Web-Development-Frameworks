"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs")); //file system access!
const path_1 = __importDefault(require("path"));
let myHtmlData = 'No file Read yet'; //fs.readFileSync(path.join(process.cwd(),'views','index.html'));
const server = http_1.default.createServer(reqListener);
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
function reqListener(req, res) {
    console.log(req.url);
    if (req.url !== '/') {
        let myUrl = req.url;
        //let myHtmlData = fs.readFileSync(process.cwd()+'\\views\\index.html');
        fs_1.default.readFile(path_1.default.join(process.cwd(), 'views', myUrl.substring(1)), (err, data) => {
            myHtmlData = data.toString();
            res.write(myHtmlData.toString());
            res.statusCode = 200;
            res.end();
        });
    }
    else if (req.url === '/Data') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        let userName = 'No Name';
        req.on('end', () => {
            console.log(body);
            let parsedBody = Buffer.concat(body).toString();
            userName = parsedBody.split('&')[0].split('=')[1];
            console.log(userName);
            console.log(parsedBody);
        });
        res.write('<html>');
        res.write('<body>');
        res.write(`<h1>Hello: ${userName}, Welcome to my page.</h1>`);
        res.write('</body>');
        res.write('</html>');
    }
    else {
        res.statusCode = 404;
        res.end();
    }
}
server.listen(3000);
//# sourceMappingURL=index.js.map