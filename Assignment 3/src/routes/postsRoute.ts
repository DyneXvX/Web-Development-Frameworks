import jwt from 'jsonwebtoken';
import express from 'express';
import { post } from '../models/post';
import { key } from './usersRoute';


const postsRouter = express.Router();
let postsArray: post[] = [];
let firstPost = new post(1, new Date("March 14, 2021"), 'First Post', 'This is the content of the first post!', '1', 'headerImage', new Date("March 17, 2025"))
postsArray.push(firstPost);

//show all post in order by created Date (last post should be first) <-- Use post Id
postsRouter.get('/', (req, res, next) => {
    res.status(200).send(postsArray.sort((a, b) => (b.postId - a.postId)));
});

//find post by Id
postsRouter.get('/:postId', (req, res, next) => {
    let foundPost: post | null = null;
    for (let i = 0; i < postsArray.length; i++) {
        if (postsArray[i].postId === +req.params.postId) {
            foundPost = postsArray[i];
            break;
        }
    }
    if (foundPost == null) {
        res.status(404).send({ message: `That post was not found.` })
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
                let tokenPayLoad = jwt.verify(authorization.toString(), key) as { userId: number, firstName: string, iat: number, exp: number, sub: string };
                //needs to post to only that usersId
                req.body.userId = tokenPayLoad.userId;
                let newPost = new post(++lastPost, req.body.createdDate, req.body.title, req.body.content, req.body.userId, req.body.headerImage, req.body.lastUpdated);
                postsArray.push(newPost);
                res.status(201).send(newPost);
            } catch (ex) {
                res.status(401).send({ message: `Not a valid web token.` })
            }
        } else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    } else {
        res.status(401).send({ message: `Missing Authorization` });
    }
})

//PATCH Request
postsRouter.patch('/:postId', (req, res, next) => {
    let foundPost: post | null = null;
    //do they have authorization?
    if (req.headers.authorization) {
        //is it a Bearer Token?
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try{
                //is the Bearer Token valid?
                let tokenPayLoad = jwt.verify(authorization.toString(), key) as { userId: number, firstName: string, iat: number, exp: number, sub: string };
                for (let i = 0; i < postsArray.length; i++) {
                    if (postsArray[i].postId === +req.params.postId) {
                        foundPost = postsArray[i];
                        if(foundPost.userId == tokenPayLoad.userId.toString()){                           
                            foundPost.content = req.body.content;
                            foundPost.headerImage = req.body.headerImage;
                            break;
                        }
                        else{
                            res.status(401).send({message: `You are not authorized to change this post. `})
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
            }catch(ex){
                res.status(401).send({message: `Not a valid web token.`})
            }
        } else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    } else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});

//DELETE
postsRouter.delete('/:postId', (req, res, next)=>{
    let foundPost: post | null = null;
    //Do they have authorization?
    if (req.headers.authorization) {
        //Is it a Bearer Token?
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try {
                //Is the Bearer Token Valid?
                let tokenPayLoad = jwt.verify(authorization.toString(), key) as { userId: number, firstName: string, iat: number, exp: number, sub: string };                
                for(let i = 0; i < postsArray.length; i++)
                {
                    if(postsArray[i].postId == +req.params.postId)
                    {
                        foundPost = postsArray[i];
                        if(foundPost.userId == tokenPayLoad.userId.toString())
                        {
                            postsArray.splice(i, 1);
                            res.status(204).send({message: `Post Deleted`})
                            break;
                        }else{
                            res.status(401).send({message: `You can only delete your own post.`})
                            break;
                        }
                    }
                }
                if (foundPost == null){
                    res.status(404).send({message: `The post was not found.`})
                }                
            } catch (ex) {                
                res.status(401).send({ message: `Invalid Web Token` })
            }
        } else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    } else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});

export { postsArray }
export { postsRouter }