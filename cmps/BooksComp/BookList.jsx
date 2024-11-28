import { BooksPreview } from "./BookPreview.jsx";

export function BookList({books, onRemoveBook}){
    return (
        <ul className="book-list">
            {books.map(book => 
                <li key={book.id}>
                    <BooksPreview  book={book}/>
                    <section>
                        
                    </section>
                </li>
            )}
        </ul>
    )
}