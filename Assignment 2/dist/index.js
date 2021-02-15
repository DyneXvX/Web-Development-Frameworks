"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs")); // file system
const path_1 = __importDefault(require("path")); // for cross platform <--very important.
//stopped at 54 minutes 
//reading the html once and done
const indexData = fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'views', 'index.html'));
//starting the server
const server = http_1.default.createServer(serverReq);
//finding the path location information.
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
function serverReq(req, res) {
    console.log(req);
    if (req.url === '/') {
        console.log(indexData.toString());
        res.write(indexData);
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