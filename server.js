
/*
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

*/
var mysql = require("mysql");
var io = require("socket.io")();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
});

connection.connect();

io.on("connection", function (socket) {
    connection.query(`insert into node(name) value('noor')`, function (error, results, fields) {
        console.log(results)
        if (error) throw error;
        socket.emit("data", results);
    });
});


io.listen(3000);