const { Router } = require('express')

const route = Router()

route.get('/', (req,res) => {
    res.send({
        "user":{
            "name" : "piyush",
            "email": "bluespex",
            "number" : "9582296347"
        }
    })
})

module.exports = route