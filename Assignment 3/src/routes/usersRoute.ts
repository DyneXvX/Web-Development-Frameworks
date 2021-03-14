import express from 'express';
import { users } from '../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const usersRouter = express.Router();
const key = '3165131651320';

let usersArray: users[] = [];

//Default Master User
bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash('Password', salt, function (err, hash) {
        let newUser = new users(1, 'Justin', 'Thoms', 'n01414359@unf.edu', hash);
        usersArray.push(newUser);        
    })

})

//GET Request
//Return Users without their password field.
usersRouter.get('/', (req, res, next) => {
    res.status(200).send(usersArray);
});

//Login and verify for JWT..
usersRouter.get('/:userId/:password', (req, res, next) => {
    let foundUser: users | null = null;
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userId === +req.params.userId) {
            foundUser = usersArray[i];
            bcrypt.compare(req.params.password, foundUser.password, function (err, results) {
                let token = jwt.sign({ userId: foundUser?.userId, firstName: foundUser?.firstName }, key, { expiresIn: 3600, subject: foundUser?.firstName });
                res.status(200).send(token);
            })
        }
    }
    if (!foundUser) {
        res.status(404).send({ message: `User Not Found` })
    }
})

//GET by userId
//Return all but Password
usersRouter.get('/:userId', (req, res, next) => {

    let foundUser: users | null = null;
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userId === +req.params.userId) {
            foundUser = usersArray[i];
            break;
        }
    }
    if (foundUser == null) {
        res.status(404).send({ message: `That user was not found.` })
    }
    else {
        res.status(200).send(foundUser);
    }
});


//POST Request
usersRouter.post('/', (req, res, next) => {

    //Should be error checking to ensure that the userID doesn't already exist? 
    //If userID is inputted it takes you to home page... Not sure what this means.
    let lastUser = usersArray[usersArray.length - 1].userId;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            let newUser = new users(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, hash);
            usersArray.push(newUser);
            res.status(201).send(newUser)
        })
    })
});

//PATCH Request - Edit MVC
usersRouter.patch('/:userId', (req, res, next) => {
    let foundUser: users | null = null;
    if(req.headers.authorization)
    {
        if(req.headers.authorization.startsWith("Bearer "))
        {
            for (let i = 0; i < usersArray.length; i++) {
                if (usersArray[i].userId === +req.params.userId) 
                {
                    foundUser = usersArray[i];
                    foundUser.firstName = req.body.firstName;
                    foundUser.lastName = req.body.lastName;
                    foundUser.emailAddress = req.body.emailAddress;
                    bcrypt.genSalt(10, function(err, salt){
                        bcrypt.hash(req.body.password, salt, function(err, hash){
                            if(foundUser) //this isn't even possible to be null!!.
                            {
                                foundUser.password = hash;
                            }                            
                        });
                    });
                    break;                    
                }
            }
            if (foundUser == null) {
                res.status(404).send({ message: `User was not found.` });
            }
            else {
                res.status(200).send(foundUser);
            }
        }else{
            res.status(401).send({ message: `Unauthorized Token` });
        }
    }else{
        res.status(401).send({ message: `Missing Authorization` });
    }


});

//DELETE Request
usersRouter.delete('/:userId', (req, res, next) => {
    if (req.headers.authorization) {
        if (req.headers.authorization.startsWith("Bearer ")) {
            var authorization = req.headers.authorization.substring(7, req.headers.authorization.length);
            try {
                let tokenPayLoad = jwt.verify(authorization.toString(), key) as { userId: number, firstName: string, iat: number, exp: number, sub: string };
                console.log(tokenPayLoad);
                if (tokenPayLoad.userId === +req.params.userId) {
                    let foundUser: users | null = null;
                    for (let i = 0; i < usersArray.length; i++) {
                        if (usersArray[i].userId === +req.params.userId) {
                            foundUser = usersArray[i];
                            usersArray.splice(i);
                            res.status(200).send({ message: `User Deleted.` });
                            break;
                        }
                    }
                    if (!foundUser) {
                        res.status(404).send({ message: `User Not Found` });
                    }
                } else {
                    res.status(404).send({ message: `You can only delete your account.` })
                }
            } catch (ex) {
                console.log(ex);
                res.status(401).send({ message: `Invalid Web Token` })
            }
        } else {
            res.status(401).send({ message: `Unauthorized Token` });
        }
    } else {
        res.status(401).send({ message: `Missing Authorization` });
    }
});




//route exports
export { usersArray }
export { usersRouter };