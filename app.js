const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    let currentTime = new Date().getUTCMilliseconds().toLocaleString();
    res.write(`Hi ${currentTime}`);
    res.end();
});

server.listen(port);
console.log(`Server is running at port: ${port}`);