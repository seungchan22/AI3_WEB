
 import express from 'express'
const express = require('express')
// const express = require('express') // Uncomment this line if using CommonJS
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    if(name === 'dog') {
        res.json('{"sound": "멍멍"}')
    } else if(name === 'cat') {
        res.json('{"sound": "야옹"}')
    }else {
        res.json('{"sound": "animal"}')
    }
    // const q = req.query
    // console.log(q)

    // res.json({ 'UserID': q.id })
})

app.get('/cat', (req, res) => {
  res.send('{"sound": "야옹"}')
})

// app.listen(3000)