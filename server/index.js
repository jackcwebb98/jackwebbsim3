require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')
const session = require('express-session')

const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000000000000000
  }
}))

massive(CONNECTION_STRING).then((db) =>{
  app.set('db',db)
  console.log('database connected')
  app.listen(SERVER_PORT, ()=> console.log(`listeing on ${SERVER_PORT}`))
}).catch((err) => {
  console.log(err)
})

app.post(`/auth/register`, ctrl.register)
app.post(`/auth/login`, ctrl.login)

