'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, response) {
    response.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);


// var http = require('http');
//
// http.createServer(function(request, response) {
//     var headers = request.headers;
//     var method = request.method;
//     var url = request.url;
//     var body = [];
//     request.on('error', function(err) {
//         console.error(err);
//     }).on('data', function(chunk) {
//         body.push(chunk);
//     }).on('end', function() {
//         body = Buffer.concat(body).toString();
//         // At this point, we have the headers, method, url and body, and can now
//         // do whatever we need to in order to respond to this request.
//     });
// }).listen(8080); // Activates this server, listening on port 8080.