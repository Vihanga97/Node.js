const http =  require('http');

// function reqListener(req, res) {
//     console.log(req);
// }

// http.createServer(reqListener);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Official Declaration of Responsehood</title></head>');
    res.write('<body><h1>Declaration of Love</h1>');
    res.write('<p>I, Responsible Responsive Response, declare my eternal, unchanging and undying state as a response.</p>');
    res.write('</body></html>');
    res.end();
});

server.listen(3000);