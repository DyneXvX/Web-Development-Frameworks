import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer(serverReq)

function serverReq(req: IncomingMessage, res: ServerResponse)
{
    console.log(req);

    // res.write('Hello World');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

server.listen(3000);

// console.log('Hello World...')