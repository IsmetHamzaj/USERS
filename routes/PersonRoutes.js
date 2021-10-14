const express = require('express')

const router = express.Router()
const { getPersons , getPerson, updatePerson, deletePerson , createPerson}  = require('./../controllers/PersonController')



 router.route("/").get(getPersons).post(createPerson)
 router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson)
//  .post()

// router.route("/:id").patch().delete()

module.exports = router