import http, { IncomingMessage, ServerResponse } from 'http';
import express from 'express';

let app = express();

app.use('/Student/:nNumber/:nfName/:nlName', (req, res, next) => {
    //res.send(`Hello Students! N Number: ${req.params.nNumber}`);
    res.send(`Hello Student First Name: ${req.params.nfName} and Last Name: ${req.params.nlName}`);


})

app.use('/Students', (req, res, next) => {
    res.send('Hello Students');

})

app.use('/', (req, res, next) => {
    res.status(404).send("Sorry the page is not found.");

})

/*function reqListener(req: IncomingMessage, res: ServerResponse)
{
switch(req.url)
{
    case "/Students":
        {
            res.write("Hello Students!");
            res.end();
        }
        break;
    case "/Teacher":
        {
            res.write("Hello Teacher");
            res.end();
        }
        break;
    default:
        {
            res.statusCode=404;
            res.end();
        }
        break;
}
}*/

let server = http.createServer(app)
server.listen(3000);