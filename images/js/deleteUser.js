const axios  = require("axios")


const container = document.querySelector(".container")

container.addEventListener('click' , function(e){
    if(e.target.className == "btn-delete"){
        let parent = e.target.parentNode
        let id = parent.getAttribute("id")

    axios.delete(`http://localhost:3000/api/persons/${id}`)

    container.removeChild(parent)
    }
})