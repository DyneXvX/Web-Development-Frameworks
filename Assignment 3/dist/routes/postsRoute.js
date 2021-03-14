"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = exports.postsArray = void 0;
const express_1 = __importDefault(require("express"));
const post_1 = require("../models/post");
const postsRouter = express_1.default.Router();
exports.postsRouter = postsRouter;
let postsArray = [];
exports.postsArray = postsArray;
let firstPost = new post_1.post(1, new Date("March 14, 2021"), 'First Post', 'Yeah I do not get this', '1', 'headerImage', new Date(2021, 4, 17));
postsArray.push(firstPost);
postsRouter.get('/', (req, res, next) => {
    res.status(200).send(postsArray);
});
postsRouter.get('/:postId', (req, res, next) => {
    let foundPost = null;
    for (let i = 0; i < postsArray.length; i++) {
        if (postsArray[i].postId == +req.params.postId) {
            foundPost = postsArray[i];
            break;
        }
    }
    if (foundPost) {
        res.status(200).send(postsArray);
    }
    else {
        res.status(404).send({ message: `Post doesn't exist.` });
    }
});
//# sourceMappingURL=postsRoute.js.map