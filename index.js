const http = require("http");
const handleRequest = (req, res) => {
    res.writeHead(200);
    return res.send("hello world");
}

const app = http.createServer(handleRequest);

app.listen(4000);

