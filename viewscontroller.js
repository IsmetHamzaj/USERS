const axios = require('axios')

const getPersons = async (req , res) => {
   const test = await axios.get("http://localhost:3000/api/persons").then(items => {
    res.render('index' , {data: items})

    }).catch(err => {
        res.render('index' , {data: err})

    })
    
}
const createPerson = async(req,res) => {
    const person = await axios.post("http://localhost:3000/api/persons", {
        name: req.body.name,
        surname: req.body.surname,
        proffesion: req.body.proffesion,
        email: req.body.email,
        image: req.body.image,
    });
    res.render("register" , {message: "User register"})
}
const getRegisterViews = (req, res) => {
    res.render("register")
}



const getUpdateView = async (req,res) => {
    res.render("update")
    const id = req.params.id

    const test = await axios.get(`http://localhost:3000/api/persons/${id}`).then(items => {
    res.render('update' , {data: items})

    }).catch(err => {
        res.render('update' , {data: err})

    })
}



const updatePerson = async (req,res) => {
    const id = req.params.id

    const test = await axios.patch(`http://localhost:3000/api/persons/${id}`,{
        name: req.body.name,
        surname: req.body.surname,
        proffesion: req.body.proffesion,
        email: req.body.email,
        image: req.body.image,
    })

}
module.exports = {getPersons , getRegisterViews , getUpdateView , createPerson} 