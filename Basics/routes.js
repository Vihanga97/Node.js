const fs = require('fs');
const http = require('http');

const requestHander = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>message</title></head>');
        res.write('<body><form action="/message" action="/message" method="POST"><input type="text" name="secret message"><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const secretMessage = parsedBody.split('=')[1];
            fs.writeFile('Basics/message.txt', secretMessage, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Server Page</title>');
    res.write('<body><h1>Hi! This is the Node.js Server</h1></body></html>');
    //res.end();
};

// module.exports = requestHander;

// module.exports = {
//     handler: requestHander,
//     text: 'Hard coded text'
// };

module.exports.handler = requestHander;
module.exports.text = 'Hard coded text';