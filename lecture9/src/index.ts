import http, { IncomingMessage, ServerResponse } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { studentRouter } from './routes/student';

let app = express();



let ListOfKids: string[] = ['Johnny', 'Paul', 'Mike', 'Stephen']

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.use("/Students", studentRouter);

app.get('/ListOfKids', (req, res, next) => {
    res.send(ListOfKids);
});

app.get('/NewKid', (req, res, next) => {
    res.send('<form method="POST" Action="Kids"><input type="text" name="Name"/><input type="submit"/></form>')
});

app.post('/Kids', (req, res, next) => {
    console.log(ListOfKids);
    console.log(req.body);
    ListOfKids.push(req.body.Name);
    res.send(req.body.Name);

});

// app.post('/Kids', (req, res, next) =>{
//     console.log('Triggered Kids Post');
//     console.log(req.body);
// });



app.use('/', (req, res, next) => {
    res.status(404).send("Sorry the page is not found...");

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