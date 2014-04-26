var minimist = require('minimist')
  , express = require('express')
  , mongoose = require('mongoose')
  , io = require('socket.io')
  , http = require('http');

// get port from cli args
var args = minimist(process.argv.slice(2))
  , port = parseInt(args.p || args.port || 8000);

// Express framework
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(port);

// socket.io listening
io.listen(http.createServer(app));

// display app url in terminal
console.log('Application statred at : http://localhost:' + port);