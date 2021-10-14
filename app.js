const express = require('express')
const app = express()
const db = require("./database")
const PersonRoutes = require("./routes/PersonRoutes")
const {getPersons} = require("./controllers/viewscontroller")


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine" , "pug")
app.use('/public', express.static('public'))


db.sync();

app.use("/api/persons" , PersonRoutes)

app.get('/' , getPersons)

app.listen(3000 , () => {
    console.log("server is listening")
})