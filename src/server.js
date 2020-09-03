const express = require('express')

const {db} = require('./models')

const app = express()

//for post req
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api' , require('./routes/api'))


db.sync()
    .then( () => {
        app.listen(7788 , () => {
            console.log('Server started on http://localhost:7788/')
        })
    })
    .catch( (err) => {
        console.log(err)
    })

