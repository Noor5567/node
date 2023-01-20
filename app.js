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

    let query = `select * from node `;
    connection.query(query, (error, results, fields) => {
        res.json(results);
    })
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

/*
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
})*/
//let id = 4;

/*let id = process.argv[2]
let query = `select * from node where id=` + id;
connection.query(query, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    console.log(results);
})
connection.end();
/*
let insertQuery = `insert into node(name,password) values('ibrahim','5567')`;
connection.query(insertQuery);
connection.end();
*/
var fs = require('fs');

// json file with the data
/*
var data = fs.readFileSync('sample.json');
var elements = JSON.parse(data);
//console.log(elements.Hydrogen.boil);
for (var attributename in elements) {
    console.log(elements[attributename].appearance)
}*/
/*
let jsonData=fs.readFileSync('test.json');
let jsonelement=JSON.parse(jsonData);
let jsonData2=fs.readFileSync('test2.json');
let jsonElement2=JSON.parse(jsonData2);
*/

/*
for(var elements in jsonelement)
{
    console.log(jsonelement[elements]);
}
*/

/*
for(const[key,value] of Object.entries(jsonelement))
{
    console.log(`${key}: ${value}`);
}
function compare(jsonElement2,jsonelement)
{
    var keys=Object.keys(jsonelement);
    for(var i=0;i<keys.length;i++)
    {
        var index=keys[i];
        console.log(index)

        if(jsonelement[index] !=jsonElement2[index])
        {
            console.log(index + "value" +jsonelement[index]  )
        }
    }
}*/

//compare(jsonElement2,jsonelement);

/*
var jsonString1 = '{"Name":"ABC","Work":"Programmer","State":"123"}';
var jsonString2 = '{"Name":"XYZ","Work":"Engineer","State":"456"}';

var jsonObject1 = JSON.parse(jsonString1);
var jsonObject2 = JSON.parse(jsonString2);

var keys = Object.keys(jsonObject1);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (jsonObject1[key] != jsonObject2[key]) {
    console.log(key + " value changed from '" + jsonObject1[key] + "' to '" + jsonObject2[key] + "'");
  }
}*/