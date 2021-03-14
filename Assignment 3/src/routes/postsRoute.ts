import express from 'express';
import { post } from '../models/post';


const postsRouter = express.Router();
let postsArray: post[] = [];
let firstPost = new post(1, new Date("March 14, 2021"), 'First Post', 'Yeah I do not get this', '1', 'headerImage', new Date(2021, 4, 17))
postsArray.push(firstPost);

postsRouter.get('/', (req, res, next) =>{
    res.status(200).send(postsArray);
});

postsRouter.get('/:postId', (req, res, next)=> {
    let foundPost: post | null = null;
    for(let i = 0; i < postsArray.length; i++)
    {
        if(postsArray[i].postId == +req.params.postId)
        {
            foundPost = postsArray[i];
            break;
        }
    }
    if(foundPost)
    {
        res.status(200).send(postsArray)
    }else{
        res.status(404).send({message: `Post doesn't exist.`})
    }
   
})







export{postsArray}
export{postsRouter}