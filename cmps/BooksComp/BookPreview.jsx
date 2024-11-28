import { bookService } from "../../services/bookService.js"


export function BooksPreview(){

    const demoBook = {id:'1', title:'Demo Book', author:'Or Ben Yair'}



    return (
        <section className="book-preview-container">
            <section className="book-preview">
                <h1>{demoBook.title}</h1>
                <img src={`./assets/img/BooksImages/${demoBook.id}.jpg`} />
                <h4>{demoBook.author}</h4>
                <button className="book-button">Details</button>
                <button className="book-button">Remove</button>
            </section> 

        </section>
    )
}