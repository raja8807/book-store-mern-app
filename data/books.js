let books = [
    {
        name:"book1"
    },
    {
        name:"book2"
    },
    {
        name:"book3"
    },
    {
        name:"book4"
    }
]

const addBook = (book)=>{
    books.push(book)
}

module.exports = {books,addBook}