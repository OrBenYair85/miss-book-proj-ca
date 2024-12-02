export function BooksPreview({book}){

    return (
        <article className="book-preview-container">
                <h1>{book.title}</h1>
                <img src={book.thumbnail} />
                <h4>{book.authors}</h4>
                
        </article>
    )
}