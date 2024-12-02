import { bookService } from "../services/bookService.js"

const {useState, useEffect} = React 
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails(){

    const [book,setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

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
            <img src={book.thumbnail} />
            <h4>{book.subtitle}</h4>
            <h4>Genere: {book.categories}</h4>
            <h4>Price: {`${book.listPrice.amount} ${book.listPrice.currencyCode}`}</h4>
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