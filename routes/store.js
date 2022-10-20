const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const add = require('../data/books').addBook

router.get('/',(req,res)=>{
    res.end("STORE")
})


module.exports = router