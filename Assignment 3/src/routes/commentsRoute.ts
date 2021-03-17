import express from 'express';
import { comment } from '../models/comments';
import { post } from '../models/post';
import { postsArray } from './postsRoute';

const commentsRouter = express.Router();
let commentArray: comment[] = [];
let firstComment = new comment(1, 1, "This is Justin's first commit");
commentArray.push(firstComment);

let secondComment = new comment(2,1, "This is Justin's Second commit");
commentArray.push(secondComment);

commentsRouter.get('/', (req, res, next) => {
    res.status(200).send(commentArray);
});

//Return comments associated with a post.
commentsRouter.get('/:postId', (req, res, next) =>{    
    let foundPost: post | null = null;
    let commentArrayReturn = [];
    for(let i = 0; i < postsArray.length; i++)
    {
        if(postsArray[i].postId === +req.params.postId)
        {
            foundPost = postsArray[i];
            break;
        }
        else{
            res.status(404).send({message: `This post was not found.`})
            break;
        }
    }
    for(let i = 0; i < commentArray.length; i++)
    {
        if(commentArray[i].postId == foundPost?.postId)
        {
            commentArrayReturn.push(commentArray[i]);
        }
    }
    res.status(200).send(commentArrayReturn);
});

//post a new comment with an associated post
commentsRouter.post('/:postId', (req, res, send) =>{
    let foundPost: post | null = null
    let lastComment = commentArray[commentArray.length - 1].commentId;
    for(let i = 0; i < postsArray.length; i++)
    {
        if(postsArray[i].postId === +req.params.postId)
        {
            foundPost = postsArray[i];
            let newComment = new comment(++lastComment, foundPost.postId, req.body.comment);
            commentArray.push(newComment);
            res.status(201).send({message: `Comment Created, thank you.`});
        }       
    }
    if(foundPost == null)
    {
        res.status(404).send({message: `This post was not found.`})
    }
});

//delete a comment with a associated post.
commentsRouter.delete('/:postId/:commentId', (req, res, send)=>{
    let foundPost: post | null = null    
    for(let i = 0; i < postsArray.length; i++)
    {
        if(postsArray[i].postId === +req.params.postId)
        {
            foundPost = postsArray[i];    
            break;        
        }
    }
    if(foundPost)
    {
        let foundComment: comment | null = null
        for(let i = 0; i < commentArray.length; i++)
        {
            if(commentArray[i].commentId === +req.params.commentId)
            {                
                foundComment = commentArray[i];
                commentArray.splice(i, 1);
                res.status(202).send({message: `Comment Deleted.`})
                break;                                
            }
        }
        if(foundComment == null)
        {
            res.status(404).send({message: `This comment was not found.`})
        }
    }else{
        res.status(404).send({message: `This post was not found.`})
    }
});


export {commentsRouter}