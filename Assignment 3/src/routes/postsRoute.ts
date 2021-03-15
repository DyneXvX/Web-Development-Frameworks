import express from 'express';
import { post } from '../models/post';


const postsRouter = express.Router();
let postsArray: post[] = [];
let firstPost = new post(1, new Date("March 14, 2021"), 'First Post', 'Yeah I do not get this', '1', 'headerImage', new Date(2021, 4, 17))
postsArray.push(firstPost);

// let secondPost = new post(2, new Date("March 14, 2021"), 'Second Post', 'Yeah I do not get this again', '1', 'headerImage', new Date(2021, 4, 17))
// postsArray.push(secondPost);

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
    if(req.headers.authorization){
        //Do they have a bearer authorization?
        if(req.headers.authorization.startsWith("Bearer "))
        {            
            let newPost = new post(++lastPost, req.body.createdDate, req.body.title, req.body.content, req.body.userId, req.body.headerImage, req.body.lastUpdated);
            postsArray.push(newPost);
            res.status(201).send(newPost);
        }else{
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }else{
        res.status(401).send({ message: `Missing Authorization` });
    }
})

//PATCH Request - Edit MVC
postsRouter.patch('/:postId', (req, res, next) => {
    let foundPost: post | null = null;
    if(req.headers.authorization) {
        if(req.headers.authorization.startsWith("Bearer ")) {
            for (let i = 0; i < postsArray.length; i++) {
                if (postsArray[i].postId === +req.params.postId) {
                    foundPost = postsArray[i];                    
                    break;                    
                }
            }
            if (foundPost == null) {
                res.status(404).send({ message: `Post was not found.` });
            }
            else {
                res.status(200).send(foundPost);
            }
        }else{
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }else{
        res.status(401).send({ message: `Missing Authorization` });
    }
});







export { postsArray }
export { postsRouter }