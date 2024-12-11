
import { BookList } from "../cmps/BooksComp/BookList.jsx"
import { bookService } from "../services/bookService.js"
import { BookFilter } from "../cmps/BooksComp/BookFilter.jsx"
import { BookEdit } from "../cmps/BooksComp/BookEdit.jsx"

const { useEffect, useState } = React
const {Link} = ReactRouterDOM


export function BooksIndex(){

    const [books, setBooks] = useState()
    const [filterBy, setFilterType] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks(){
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('We faced a problem during loading books', err)
            })
    }

    function onRemoveBook(bookId){
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => bookId !== book.id))
            })
            .catch(err=> {
                console.log("Failed during removing book:", err)
            })
    }

    function onSetFilter(filterBy){
        setFilterType(prevFilter => ({...prevFilter, ...filterBy}))

    }

    



    if(!books) return <div>Loading...</div>
    return (
        <section className="book-index-container">
            <section className="book-index">
            <h1>Our Books</h1>
            <BookFilter defaultFilter={filterBy} onSetFilter={onSetFilter}/>
            <section className="book-add">
                <button><Link to='/books/edit'>Add Book</Link></button>
            </section>
            <BookList  books={books} onRemoveBook={onRemoveBook}/>
            </section>

        </section>
    )
}