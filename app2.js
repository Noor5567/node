const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')
const app = express();
dotenv.config({ path: './.env' })
app.set('view engine', 'hbs')
const path = require("path")
const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
const bcrypt = require("bcryptjs");
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
    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
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
app.listen(5000, () => {
    console.log("server started on port http://localhost:5000")
})
