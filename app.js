const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000


app.use(bodyParser.json())


app.use('/api', require('./src/click.router'))


app.use(express.static('client/build'))


const start = async () => {
    try {
        app.listen(PORT, () => { console.log(`Server on localhost:${PORT}`) })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


start()