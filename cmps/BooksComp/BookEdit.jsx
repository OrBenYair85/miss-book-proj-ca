
import { bookService } from "../../services/bookService.js";


const {useState, useEffect} = React
const { useNavigate, useParams} = ReactRouterDOM

export function BookEdit(){
    
    const [bookToEdit,setBookToEdit] =  useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()
    
    useEffect(() => {
        if(bookId) loadBook()
    }, [])

    function loadBook(){
        bookService.get(bookId)
            .then(setBookToEdit)
            .catch(err => [
                console.log('problem with loading book', err)
            ])
    }
    

    function handleChange({target}){
        let {value, name: field} = target
        switch(target.type){
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }

        setBookToEdit((prevBook) => {
            if(field === 'amount'){
                return {
                    ...prevBook,
                    listPrice: {
                        ...prevBook.listPrice,
                        [field]: value,
                    },
                }
            }

            return {
                ...prevBook,
                [field]: value,
            }
        })
   
    }

    const {title , listPrice: {amount}} = bookToEdit
    

    function onSaveBook (ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => navigate('/books'))
            .catch(err => {
                console.log('Cannot save book', err)
            })
    }
    

    return (
        <section className="book-edit">
            <h1>{bookId ? 'Edit': 'Add'}</h1>

            
            <form onSubmit={onSaveBook}>

                {/* <label htmlFor="title">Book Title:</label>
                <input type="text" name="title" id="title" />

                <label htmlFor="subtitle">Book Subtitle:</label>
                <input type="text" name="subtitle" id="subtitle" />

                <label htmlFor="autors">Autors:</label>
                <input type="text" name="autors" id="autors" placeholder="Separate the Autors with a ," />

                <label htmlFor="year">Publish Year:</label>
                <input type="year" name="year" id="year" /> */}

                <label htmlFor="title">Book Title:</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" /> 
                
                <label htmlFor="amount">Price:</label>
                <input onChange={handleChange} value={amount} type="number" name="amount" id="amount" />

                <button>Save</button>


                
                
                
                {/* book publish date year / string 
                book description string 
                book pagecount number
                book catgory array
                book tunmbnail url / string
                book language string
                book list price object
                    list price currency code string 
                    list price amount number
                    list price is on sale? Boolean */}
            </form>
        </section>
    )
}