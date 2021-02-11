import express from 'express';

const studentRouter = express.Router();

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

})

export {studentRouter};