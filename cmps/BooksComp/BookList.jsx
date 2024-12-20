import { BooksPreview } from "./BookPreview.jsx";
const { Link } = ReactRouterDOM

export function BookList({books, onRemoveBook}){
    return (
        <ul className="book-list">
            {books.map(book => 
                <li key={book.id}>
                    <BooksPreview  book={book}/>
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                        <button><Link to={`/books/${book.id}`}>Details</Link></button>
                        <button><Link to={`/books/edit/${book.id}`}>Edit</Link></button>
                    </section>
                </li>
            )}
        </ul>
    )
}