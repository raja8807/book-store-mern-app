const express = require('express')
const storeRouter = require('./routes/store')
const app = express()
const books = require('./data/books').books


app.set('view engine', 'ejs')

app.use('/store', storeRouter)


app.get('/', (req, res) => {
    res.render('home.ejs', { books })
})

app.post('/', (req, res) => {
    const add = require('./data/books').addBook
    add({name:"post ok"})
    res.render('home.ejs', { books })
    res.end()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    if (err) { throw err }
    console.log("server started at " + PORT);
})