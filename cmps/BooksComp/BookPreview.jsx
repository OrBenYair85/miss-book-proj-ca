export function BooksPreview({book}){

    return (
        <article className="book-preview-container">
                <h1>{book.title}</h1>
                <img src={book.thumbnail} />
                <h4>Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`}</h4>
                <h5 className={book.listPrice.isOnSale ? "onSale-sticker": ''}>{book.listPrice.isOnSale ? 'On Sale' : '' }</h5>
        </article>
    )
}