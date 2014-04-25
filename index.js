var minimist = require('minimist')
  , static = require('node-static')
  , mongoose = require('mongoose')
  , io = require('socket.io')
  , http = require('http');


// get port from cli args
var args = minimist(process.argv.slice(2))
  , port = parseInt(args.p || args.port || 8000);

// serve static files
var fileServer = new static.Server('./public')

var httpServer = http.createServer(function (req, res) {
  req.addListener('end', function() {
    fileServer.serve(req, res);
  }).resume();
});

httpServer.listen(port);

// Serve socket.io files
io.listen(httpServer);

console.log('Application statred at : http://localhost:' + port);