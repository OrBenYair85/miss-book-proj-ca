
import { BookList } from "../cmps/BooksComp/BookList.jsx"
import { bookService } from "../services/bookService.js"

const { useEffect, useState } = React


export function BooksIndex(){

    const [books, setBooks] = useState()

    useEffect(() => {
        loadBooks()
        console.log(books)
    }, [])

    function loadBooks(){
        bookService.query()
            .then(setBooks)
            .catch(err => {
                console.log('We faced a problem during loading books', err)
            })
    }

    



    if(!books) return <div>Loading...</div>
    return (
        <section className="book-index-container">
            <section className="book-index">
            <h1>Our Books</h1>
            <BookList  books={books}/>
            </section>

        </section>
    )
}