"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(reqListener);
function reqListener(req, res) {
    console.log(req.url);
    if (req.url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write(`<h1>Hello World!</h1>`);
        res.write(`<form method="POST" Action="Data">`);
        res.write(`<label for = "txtName">Enter Your Name</label>`);
        res.write(`<input type = "text" name="txtName" id="txtName">`);
        res.write(`<input type="submit" name="btnSend" id="btnSend" value="Submit" />`);
        res.write(`</form>`);
        res.write('</body>');
        res.write('</html>');
        res.statusCode = 200;
        res.end();
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