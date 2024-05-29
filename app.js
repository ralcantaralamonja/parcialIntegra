const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('./public/js/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//app.all('/user', (req, res, next) => {
    //console.log('Paso por aqui')
    //next()
//})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/public/service.html')
})


app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})



app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:8080`)
})