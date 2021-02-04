import http, { IncomingMessage, Server, ServerResponse } from 'http';
import fs from 'fs'; //file system access!
import path from 'path';

let myHtmlData = 'No file Read yet';//fs.readFileSync(path.join(process.cwd(),'views','index.html'));
const server = http.createServer(reqListener);

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

function reqListener(req: IncomingMessage, res: ServerResponse) 
{
    console.log(req.url);
    if (req.url !== '/') 
    {
        let myUrl = req.url as string;
        //let myHtmlData = fs.readFileSync(process.cwd()+'\\views\\index.html');
        fs.readFile(path.join(process.cwd(),'views',myUrl.substring(1)), (err,data) =>{

            myHtmlData = data.toString();
            res.write(myHtmlData.toString());
            res.statusCode = 200;
            res.end();               
        });              
    }
    else if (req.url === '/Data') {
        const body: any[] = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        let userName = 'No Name';
        req.on('end', () => {
            console.log(body);
            let parsedBody = Buffer.concat(body).toString();
            userName = parsedBody.split('&')[0].split('=')[1]
            console.log(userName);
            console.log(parsedBody);
        });

        res.write('<html>');
        res.write('<body>');
        res.write(`<h1>Hello: ${userName}, Welcome to my page.</h1>`);
        res.write('</body>');
        res.write('</html>');
    }
    else {
        res.statusCode = 404;
        res.end();
    }
}

server.listen(3000);
