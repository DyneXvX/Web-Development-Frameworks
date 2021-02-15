import http, { IncomingMessage, ServerResponse } from 'http';


const server = http.createServer(serverReq);

function serverReq(req: IncomingMessage, res: ServerResponse)
{
    console.log(req);
    if(req.url==='/')
    {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello and Welcome</h1>');
        res.write('<form method="POST" action="Data">');
        res.write('<label for="txtName">Enter your name</label>');
        res.write('<input type="text" name="txtName" id="txtName"></input>');
        res.write('<input type="submit" name="btnSubmit" value="Submit"/>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
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