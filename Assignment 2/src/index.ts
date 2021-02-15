import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs'; // file system
import path from 'path'; // for cross platform <--very important.


//stopped at 54 minutes 
//reading the html once and done
const indexData = fs.readFileSync(path.join(process.cwd(), 'views', 'index.html'));

//starting the server
const server = http.createServer(serverReq);

//finding the path location information.
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

function serverReq(req: IncomingMessage, res: ServerResponse)
{
    console.log(req);
    if(req.url==='/')
    {
        
        console.log(indexData.toString());
        res.write(indexData)
  
        res.statusCode = 200; // success
        res.end();
    }
    else if(req.url==='/Data')
    {
        res.write('Welcome to Data.');
        res.statusCode = 200;
        res.end();
    }
    else
    {
        res.statusCode = 404; // Not found
        res.end();
    }
}

server.listen(3000);