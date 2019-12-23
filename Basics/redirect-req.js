const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>message</title></head>');
        res.write('<body><form action="/message" action="/message" method="POST"><input type="text" name="secret message"><button type="submit" name = "submit">Submit</button></form></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'You typed a secret message');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Server Page</title>');
    res.write('<body><h1>Hi! This is the Node.js Server</h1></body></html>');
    //res.end();
});

server.listen(3000);