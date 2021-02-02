import http, { IncomingMessage, Server, ServerResponse } from 'http';

const server = http.createServer(reqListener);

function reqListener(req: IncomingMessage, res: ServerResponse) {
    console.log(req.url);
    if (req.url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write(`<h1>Hello World!</h1>`);
        res.write(`<form method="POST" Action="Data">`);
        res.write(`<label for = "txtName">Enter Your Name</label>`);
        res.write(`<input type = "text" name="txtName" id="txtName">`);
        res.write(`<input type="submit" name="btnSend" id="btnSend" value="Submit" />`)
        res.write(`</form>`);
        res.write('</body>');
        res.write('</html>');

        res.statusCode = 200;
        res.end();
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
