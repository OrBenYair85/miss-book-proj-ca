import { bookService } from "../services/bookService.js"

const {useState, useEffect} = React 
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails(){

    const [book,setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const date = new Date()
    const year = (date.getFullYear())
    
    
    

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook(){

        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('failed to load book', err);
                
            })

            
    }

    function onback(){
        navigate('/books')
    }

    
    
   
    
    

    if(!book) return <div>Loading Details...</div>
    return (
        <section className="book-details">
            <h1>{book.title}</h1>
            <h2>{book.authors}</h2>
            {book.pageCount > 500 ? (<h3>Serious Reading</h3>) : book.pageCount > 200 ? (<h3>Descent Reading</h3>) : book.pageCount < 100 ? (<h3>Light Reading</h3>) : null}
            <img src={book.thumbnail} />
            <h4>{book.subtitle}</h4>
            {(year - book.publishedDate > 10) ? <h4>Vintage</h4> : <h4>New</h4>}
            <h4>Genere: {book.categories}</h4>
            <h4 className={
                book.listPrice.amount > 150 ? 'price-red' : book.listPrice.amount < 20 ? 'price-green' : 'price'
            }>Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`}</h4>
            <h6>Publish Date:{book.publishedDate}</h6>
            <p>{book.description}</p>
            <button onClick={onback}>Back</button>
            <section>
                <button><Link to={`/books/${book.prevBookId}`}>Prev Book</Link></button>
                <button><Link to={`/books/${book.nextBookId}`}>Next Book</Link></button>
            </section>
        </section>
    )
}