const Person = require("./../models/person")

const getPersons = (req, res) => {
    Person.findAll()
        .then((persons) => {
            res.status(200).json({
                status: "Success",
                data: persons,
            })
        }).catch((err) => [
            res.status(400).json({
                status: "failed",
                message: err.message,
            })
        ])
}

const getPerson = (req, res) => {
    const id = Number(req.body.id);
    Person.findOne({
        where: {
            id: id,
        },
    }).then((user) => {
        if (user) {
            res.status(200), json({
                status: "successful",
                data: user,
            });

        }
        else {
            res.status(400).json({
                status: "failed",
                message: "this doesnt exist",
            })
        }
    })
}

const updatePerson = (req, res) => {
    let id = req.params.id
    Person.findOne({
        where: {
            id: req.params.id,
        }.then(item => {
            item
                .update({
                    name: req.body.name,
                    surname: req.body.surname,
                    proffesion: req.body.proffesion,
                    email: req.body.email,
                    image: req.body.image,
                }).then((updatedItem) => {
                    res.status(200).json({
                        status: "Success",
                        data: updatedItem,
                    })
                }).catch((err) => {
                    res.status(400).json({
                        status: "Failed",
                        message: err.message,
                    })
                })
        }).catch((err) => {
            res.status(400).json({
                status: "failed",
                message: err.message,
            })
        })
    })
}
const deletePerson = (req, res) => {
    let id = req.params.id

    Person.findOne({
        where: {
            id: id,
        }}).then(person => {
            if (person) {
                person.destroy()
                
                res.status(200).json({
                    status: "success",
                    message: "User deleted !"
                })
            } else {
                res.status(400).json({
                    status: "failed",
                    message: "This user doesn't exists"
                })
            }
        })
            .catch((err) => {
                res.status(400).json({
                    status: "failed",
                    message: err.message,
                })
            })

}
const createPerson = (req , res) => {
    Person.create({
        name: req.body.name,
        surname: req.body.surname,
        proffesion: req.body.proffesion,
        email: req.body.email,
        image: req.body.image,
    })
    .then((item) => {
        res.status(200).json({
            status: "sucsess",
            data: item,
        })
    })
    .catch((err) => {
        res.status(400).json({
            status: "success",
            message: err.message
        })
    })
    
}
module.exports = { getPersons, getPerson, updatePerson, deletePerson , createPerson }
