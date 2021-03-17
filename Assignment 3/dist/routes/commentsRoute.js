"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const comments_1 = require("../models/comments");
const postsRoute_1 = require("./postsRoute");
const commentsRouter = express_1.default.Router();
exports.commentsRouter = commentsRouter;
let commentArray = [];
let firstComment = new comments_1.comment(1, 1, "This is Justin's first commit");
commentArray.push(firstComment);
let secondComment = new comments_1.comment(2, 1, "This is Justin's Second commit");
commentArray.push(secondComment);
commentsRouter.get('/', (req, res, next) => {
    res.status(200).send(commentArray);
});
//Return comments associated with a post.
commentsRouter.get('/:postId', (req, res, next) => {
    let foundPost = null;
    let commentArrayReturn = [];
    for (let i = 0; i < postsRoute_1.postsArray.length; i++) {
        if (postsRoute_1.postsArray[i].postId === +req.params.postId) {
            foundPost = postsRoute_1.postsArray[i];
            break;
        }
        else {
            res.status(404).send({ message: `This post was not found.` });
            break;
        }
    }
    for (let i = 0; i < commentArray.length; i++) {
        if (commentArray[i].postId == foundPost?.postId) {
            commentArrayReturn.push(commentArray[i]);
        }
    }
    res.status(200).send(commentArrayReturn);
});
//post a new comment with an associated post
commentsRouter.post('/:postId', (req, res, send) => {
    let foundPost = null;
    let lastComment = commentArray[commentArray.length - 1].commentId;
    for (let i = 0; i < postsRoute_1.postsArray.length; i++) {
        if (postsRoute_1.postsArray[i].postId === +req.params.postId) {
            foundPost = postsRoute_1.postsArray[i];
            let newComment = new comments_1.comment(++lastComment, foundPost.postId, req.body.comment);
            commentArray.push(newComment);
            res.status(201).send({ message: `Comment Created, thank you.` });
        }
    }
    if (foundPost == null) {
        res.status(404).send({ message: `This post was not found.` });
    }
});
//delete a comment with a associated post.
commentsRouter.delete('/:postId/:commentId', (req, res, send) => {
    let foundPost = null;
    for (let i = 0; i < postsRoute_1.postsArray.length; i++) {
        if (postsRoute_1.postsArray[i].postId === +req.params.postId) {
            foundPost = postsRoute_1.postsArray[i];
            break;
        }
    }
    if (foundPost) {
        let foundComment = null;
        for (let i = 0; i < commentArray.length; i++) {
            if (commentArray[i].commentId === +req.params.commentId) {
                foundComment = commentArray[i];
                commentArray.splice(i, 1);
                res.status(202).send({ message: `Comment Deleted.` });
                break;
            }
        }
        if (foundComment == null) {
            res.status(404).send({ message: `This comment was not found.` });
        }
    }
    else {
        res.status(404).send({ message: `This post was not found.` });
    }
});
//# sourceMappingURL=commentsRoute.js.map