const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.end("ok")
})

router.get('/description/:id', (req, res) => {
    const books = require('../data/booksData').books
    let currentBook = books.find((book)=>{
        return book.id == req.params.id
    })
    res.render('description.ejs',{book:currentBook})
})

router.get('/new',(req,res)=>{
    res.render('addBook.ejs')
})

module.exports = router