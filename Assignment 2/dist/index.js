"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(serverReq);
function serverReq(req, res) {
    console.log(req);
    if (req.url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello and Welcome</h1>');
        res.write('<form method="POST" action="Data">');
        res.write('<label for="txtName">Enter your name</label>');
        res.write('<input type="text" name="txtName" id="txtName"></input>');
        res.write('<input type="submit" name="btnSubmit" value="Submit"/>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.statusCode = 200; // success
        res.end();
    }
    else if (req.url === '/Data') {
        res.write('Welcome to Data.');
        res.statusCode = 200;
        res.end();
    }
    else {
        res.statusCode = 404; // Not found
        res.end();
    }
}
server.listen(3000);
//# sourceMappingURL=index.js.map