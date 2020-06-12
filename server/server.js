const staticPort = 3000;
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public_html');
//const http = require('http');
const port = process.env.PORT || staticPort;

app.use(express.static(publicPath));
app.listen( port, () => { console.log('friba-db is alive!'); } );

//http.createServer(app).listen( serverPort, () => { console.log('friba-db is alive!'); });