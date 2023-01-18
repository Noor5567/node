const express = require('express')
const app = express()
const port = 3000
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});
app.get('/', (req, res) => {

    /*res.send.connection.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.');
    }
    connection.connect(function (err) {
        if (err) {
            res.send('error' + err.message);
        }
        res.send('Connected to the MySQL server.');
    })*/
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    let createTable = `create table if not exists node (
        id int primary key auto_increment,
        name varchar(255) not null,
        password varchar(255) not null
    )`;
    connection.query(createTable, function (err, result, fields) {
        if (err) {
            console.log(err.message);
        }
    })
    connection.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });

})

