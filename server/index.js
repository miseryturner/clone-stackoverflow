require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server start on port '+PORT))
    } catch (e) {
        console.log(e)
    }
}

start()