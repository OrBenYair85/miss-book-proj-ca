export function BooksPreview({book}){

    return (
        <article className="book-preview-container">
                <h1>{book.title}</h1>
                <img src={book.thumbnail} />
                <h4>{book.authors}</h4>
                <h4>Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`}</h4>
                
        </article>
    )
}