const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/angular8-retejs-test-app'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running on port ${port}`));
