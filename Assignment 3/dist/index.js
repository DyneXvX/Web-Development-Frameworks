"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const postsRoute_1 = require("./routes/postsRoute");
const usersRoute_1 = require("./routes/usersRoute");
let app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use('/Users', usersRoute_1.usersRouter);
app.use('/Post', postsRoute_1.postsRouter);
app.use('/', (req, res, next) => {
    res.sendFile(path_1.default.join(process.cwd() + '/public/views/index.html'));
});
app.listen(3000);
//# sourceMappingURL=index.js.map