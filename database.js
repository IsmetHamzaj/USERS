const Sequelize = require('sequelize')

const db = new Sequelize('platforma' , "root" , "" , {
    host: "localhost",
    dialect: "mysql",
})


db.authenticate()
.then(() => {
    console.log("connection successful")
})
.catch((err) => {
    console.log("cant connect")
})

module.exports = db