"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const studentRouter = express_1.default.Router();
exports.studentRouter = studentRouter;
studentRouter.use('/Student/:nNumber/:nfName/:nlName', (req, res, next) => {
    //res.send(`Hello Students! N Number: ${req.params.nNumber}`);
    res.send(`Hello Student First Name: ${req.params.nfName} and Last Name: ${req.params.nlName}`);
});
studentRouter.get('/Students', (req, res, next) => {
    res.send('Hello Students from the get');
});
studentRouter.post('/Students', (req, res, next) => {
    res.send('Hello Students from the post!');
});
studentRouter.patch('/Students', (req, res, next) => {
    res.send('Hello Students from the use...');
});
//# sourceMappingURL=student.js.map