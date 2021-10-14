const express = require('express')
const router = express.Router()
const {
    getPersons,
    createPerson,
    getRegisterViews,
    getUpdateView,
    updatePerson
} = require("./../controllers/viewscontroller")

router.route("/").get(getPersons)
router.route("/update/:id").get(getUpdateView).post(updatePerson)
router.route("/register").get(getRegisterViews).post(createPerson)

module.exports = router
