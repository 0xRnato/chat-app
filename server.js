// Modues =================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Settings ===============================================
const configs = require('./app/configs');// config file
const port = process.env.PORT || configs.PORT;
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// Routes =================================================
require('./app/routes')(app);

// Socket.IO ==============================================
let users = [];
require('./app/socket.js')(io, users);

// Start app ==============================================
http.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});
// exports = module.exports = app;