import { BooksPreview } from "./BooksComp/BookPreview.jsx"


export function BooksIndex(){
    return (
        <section className="book-index-container">
            <section className="book-index">
            <h1>Our Books</h1>
            <BooksPreview />
            </section>

        </section>
    )
}