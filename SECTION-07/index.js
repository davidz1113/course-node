const express = require("express");
const server = express();

const fs = require("fs");

const html = fs.readFileSync("./index.html");

server.get

server.listen(8080, () => {
    console.log('Server is running on port ' + 8080);
});
