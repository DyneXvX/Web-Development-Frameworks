"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = exports.postsArray = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const post_1 = require("../models/post");
const usersRoute_1 = require("./usersRoute");
const postsRouter = express_1.default.Router();
exports.postsRouter = postsRouter;
let postsArray = [];
exports.postsArray = postsArray;
let firstPost = new post_1.post(1, new Date("March 14, 2021"), 'First Post', 'This is the content of the first post!', '1', 'headerImage', new Date("March 17, 2025"));
postsArray.push(firstPost);
// let secondPost = new post(2, new Date("March 14, 2021"), 'Second Post', 'Yeah I do not get this again', '1', 'headerImage', new Date(2021, 4, 17))
// postsArray.push(secondPost);
//show all post in order by created Date (last post should be first) <-- Use post Id
postsRouter.get('/', (req, res, next) => {
    res.status(200).send(postsArray.sort((a, b) => (b.postId - a.postId)));
});
//find post by Id
postsRouter.get('/:postId', (req, res, next) => {
    let foundPost = null;
    for (let i = 0; i < postsArray.length; i++) {
        if (postsArray[i].postId === +req.params.postId) {
            foundPost = postsArray[i];
            break;
        }
    }
    if (foundPost == null) {
        res.status(404).send({ message: `That post was not found.` });
    }
    else {
        res.status(200).send(foundPost);
    }
});
postsRouter.post('/', (req, res, next) => {
    let lastPost = postsArray[postsArray.length - 1].postId;
    //do they have authorization?
    if (req.headers.authorization) {
        //Do they have a bearer authorization?
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try {
                //is the Bearer token Valid?
                let tokenPayLoad = jsonwebtoken_1.default.verify(authorization.toString(), usersRoute_1.key);
                //needs to post to only that usersId
                req.body.userId = tokenPayLoad.userId;
                let newPost = new post_1.post(++lastPost, req.body.createdDate, req.body.title, req.body.content, req.body.userId, req.body.headerImage, req.body.lastUpdated);
                postsArray.push(newPost);
                res.status(201).send(newPost);
            }
            catch (ex) {
                res.status(401).send({ message: `Not a valid web token.` });
            }
        }
        else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }
    else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});
//PATCH Request
postsRouter.patch('/:postId', (req, res, next) => {
    let foundPost = null;
    //do they have authorization?
    if (req.headers.authorization) {
        //is it a Bearer Token?
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try {
                //is the Bearer Token valid?
                let tokenPayLoad = jsonwebtoken_1.default.verify(authorization.toString(), usersRoute_1.key);
                for (let i = 0; i < postsArray.length; i++) {
                    if (postsArray[i].postId === +req.params.postId) {
                        foundPost = postsArray[i];
                        if (foundPost.userId == tokenPayLoad.userId.toString()) {
                            foundPost.content = req.body.content;
                            foundPost.headerImage = req.body.headerImage;
                            break;
                        }
                        else {
                            res.status(401).send({ message: `You are not authorized to change this post. ` });
                            break;
                        }
                    }
                }
                if (foundPost == null) {
                    res.status(404).send({ message: `Post was not found.` });
                }
                else {
                    res.status(200).send(foundPost);
                }
            }
            catch (ex) {
                res.status(401).send({ message: `Not a valid web token.` });
            }
        }
        else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }
    else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});
//DELETE
postsRouter.delete('/:postId', (req, res, next) => {
    let foundPost = null;
    //Do they have authorization?
    if (req.headers.authorization) {
        //Is it a Bearer Token?
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try {
                //Is the Bearer Token Valid?
                let tokenPayLoad = jsonwebtoken_1.default.verify(authorization.toString(), usersRoute_1.key);
                for (let i = 0; i < postsArray.length; i++) {
                    if (postsArray[i].postId == +req.params.postId) {
                        foundPost = postsArray[i];
                        if (foundPost.userId == tokenPayLoad.userId.toString()) {
                            postsArray.splice(i, 1);
                            res.status(204).send({ message: `Post Deleted` });
                            break;
                        }
                        else {
                            res.status(401).send({ message: `You can only delete your own post.` });
                            break;
                        }
                    }
                }
                if (foundPost == null) {
                    res.status(404).send({ message: `The post was not found.` });
                }
            }
            catch (ex) {
                res.status(401).send({ message: `Invalid Web Token` });
            }
        }
        else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }
    else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});
//# sourceMappingURL=postsRoute.js.map