const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')
const app = express();
const session = require('express-session');
dotenv.config({ path: './.env' })
app.set('view engine', 'hbs')
const path = require("path")
const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
const bcrypt = require("bcryptjs");
const e = require('express');
app.use(session({
    secret: "noor",
    saveUninitialized: true,
    resave: true
}));
app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
})
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})
app.get("/", (req, res) => {
    if (req.session.view) {

        // The next time when user visits,
        // he is recognized by the cookie
        // and variable gets updated.
        req.session.view++;
        res.send("You visited this page for "
            + req.session.view + " times");
    }
    else {

        // If user visits the site for
        // first time
        req.session.view = 1;
        res.send("You have visited this page"
            + " for first time ! Welcome....");
    }
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.get('/login', (req, res) => {
    res.render("login")
})
app.post("/auth/register", (req, res) => {
    const { name, email, password, password_confirm } = req.body
    db.query(`select email from node where email =?`, [email], async (error, result) => {
        if (error) {
            console.log(error)
        }
        if (result.length > 0) {
            res.render('register', {
                message: "email already register"
            })
        } else {
            let hashedPassword = await bcrypt.hash(password, 8)
            db.query(`insert into node set ?`, { name: name, email: email, password: hashedPassword }, (error, result) => {
                if (error) {
                    console.log(error)
                }
                else {
                    res.render("register"), {
                        message: "register succesfully"
                    }
                }

            })
        }

    })
})
app.post("/auth/login", (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let hashedPassword = bcrypt.hash(password, 8)
    db.query(`select * from node where email=? and password=?`, [email, password], (error, result) => {
        if (error) {
            console.log(error)
        }
        if (result.length > 0) {
            res.render("home"), {
                message: res.json(result)
            }
        }
    })
})
app.listen(5000, () => {
    console.log("server started on port 5000")
})