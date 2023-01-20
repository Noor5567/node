/*const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.sendfile('index.html');
});
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})
server.listen(port, function () {
    console.log(`Listening on port  http://localhost:${port}`);
});*/

const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000
let mysql = require('mysql');
const { Socket } = require('socket.io');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

let count = 0;

io.on('connection', (socket) => {

    let sql = `insert into node (name) value('noor')`;
    connection.query(sql);
    count++;
    console.log(count);
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})
server.listen(port, function () {
    console.log(`Listening on port http://localhost:${port}`);
});

