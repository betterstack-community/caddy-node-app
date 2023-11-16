const http = require('http');
const lorem = require('lorem-ipsum');
const {loremIpsum} = require("lorem-ipsum");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url !== '/hello') {
        res.end(JSON.stringify({error: "404 Not Found"}));
        return
    }

    const jsonResponse = {
        word: loremIpsum({units: "word"})
    }
    const jsonString = JSON.stringify(jsonResponse);
    res.end(jsonString);
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
