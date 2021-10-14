const Sequelize = require('sequelize')
const db = require("./../database")

const Person = db.define("person" , {
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    profession: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
module.exports = Person