"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(serverReq);
function serverReq(req, res) {
    console.log(req);
    // res.write('Hello World');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}
server.listen(3000);
// console.log('Hello World...')
//# sourceMappingURL=server.js.map