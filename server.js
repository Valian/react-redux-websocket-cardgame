var webpack = require('webpack')
var http = require('http');
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./cardgame-client/webpack.config')

var createServerStore = require('./cardgame-server/store/configureStore')
var startServerSocket = require('./cardgame-server/socket')

var port = 3000

var store = createServerStore()
var app = new express();
var server = http.createServer(app);


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(function(req, res) {
    res.sendFile(__dirname + '/cardgame-client/index.html')
})

server.listen(port, '0.0.0.0', function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})

startServerSocket(server, store, port)