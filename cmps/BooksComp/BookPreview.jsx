export function BooksPreview({book}){

    // const demoBook = {id:'1', title:'Demo Book', author:'Or Ben Yair'}
    // const demoBooks = [{id:'1', title:'Demo Book', author:'Or Ben Yair'},{id:'2', title:'Demo Book2', author:'Or Ben Yair'}
    //     ,{id:'3', title:'Demo Book3', author:'Or Ben Yair'},{id:'4', title:'Demo Book4', author:'Or Ben Yair'}
    // ]



    return (
        <article className="book-preview-container">
                <h1>{book.title}</h1>
                <img src={`./assets/img/BooksImages/${book.id}.jpg`} />
                <h4>{book.author}</h4>
        </article>
    )
}