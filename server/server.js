const serverPort = 3000;
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public_html');
const http = require('http');

app.use(express.static(publicPath));
app.listen( serverPort, () => { console.log('friba-db is alive!'); } );

//http.createServer(app).listen( serverPort, () => { console.log('friba-db is alive!'); });