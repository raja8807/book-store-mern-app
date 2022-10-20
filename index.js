const express = require('express')
const app = express()
const storeRouter = require('./routes/store')

app.set('views engine', 'ejs')
app.use('/store', storeRouter)

app.get('/', (req, res) => {
    const books = require('./data/booksData').books
    res.render('home.ejs', {books})
})

app.listen(5000, (err) => {
    if (err) { throw err }
    console.log("server started")
})