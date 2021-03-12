import express from 'express';
import { users } from '../models/users';

const usersRouter = express.Router();

let usersArray: users[] = [];
usersArray.push(new users(1, 'Justin', 'Thoms', 'n01414359@unf.edu', 'Password'));

//GET Request
//Return Users without their password field.
usersRouter.get('/', (req, res, next) => {   
    res.status(200).send(usersArray);
});

//Login and verify for JWT..
usersRouter.get('/:userId/:password', (req, res, next) =>{

    let found = false;
    for(let i = 0; i<usersArray.length; i++)
    {
        if(usersArray[i].userId === +req.params.userId && usersArray[i].password === req.params.password)
        {
            //Authenticated the user
            found = true;
            res.send('125412851415')
            break;
        }
    }
    if(!found)
    {
        res.status(401).send('Bad userId or password!');
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
    usersArray.push(new users(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password));
    res.status(201).send(usersArray[usersArray.length - 1])
    //201 means created
});

//PATCH Request - Edit MVC
usersRouter.patch('/:userId', (req, res, next) => {
    let foundUser: users | null = null;

    for (let i = 0; i < usersArray.length; i++) {
        //error states will always be false. However, checked in the video he says
        //because of the magic of javascript we just add a '+',no clue why.
        if (usersArray[i].userId === +req.params.userId) {
            foundUser = usersArray[i];
            foundUser.firstName = req.body.firstName;
            foundUser.lastName = req.body.lastName;
            foundUser.emailAddress = req.body.emailAddress;
            foundUser.password = req.body.password;
            break;
        }
    }

    if (foundUser == null) {
        res.status(404).send({ message: `User was not found.` });
    }
    else {
        res.status(200).send(foundUser);
    }

});

//DELETE Request
usersRouter.delete('/:userId', (req, res, next) => {

    let foundUser: users | null = null;

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userId === +req.params.userId) {
            foundUser = usersArray[i];
            usersArray.splice(i);
            break;
        }
    }

    if (foundUser == null) {
        //Not found
        res.status(404).send({ message: `The user was not found.` });
    }
    else {
        //No content
        res.status(204).send({ message: `User Deleted.` });
    }

});




//route exports
export { usersArray }
export { usersRouter };