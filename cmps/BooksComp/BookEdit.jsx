
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

            if(field === 'isOnSale'){
                return {
                    ...prevBook,
                    listPrice: {
                        ...prevBook.listPrice,
                        [field]: value,
                    },
                }
            }

            if(field === 'currencyCode'){
                return {
                    ...prevBook,
                    listPrice: {
                        ...prevBook.listPrice,
                        [field]: value,
                    },
                }
            }

            if (field === "authors") {
                return { ...prevBook, [field]: value.split(",").map((author) => author.trim()) };
            }

            if (field === "categories") {
                return { ...prevBook, [field]: value.split(",").map((category) => category.trim()) };
            }

            return {
                ...prevBook,
                [field]: value,
            }
        })
   
    }

    const {title, description,pageCount,subtitle, publishedDate,authors,categories,language, listPrice: {amount,currencyCode,isOnSale}} = bookToEdit
    

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


                <label htmlFor="title">Book Title:</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />  

                <label htmlFor="subtitle">Book Sub Title:</label>
                <input onChange={handleChange} value={subtitle} type="text" name="subtitle" id="subtitle" />

                <label htmlFor="publishedDate">Publish Year:</label>
                <input  onChange={handleChange} value={publishedDate} type="text" name="publishedDate" id="publishedDate" /> 

                <label htmlFor="description">Description:</label>
                <input onChange={handleChange} value={description} type="text" name="description" id="description" />

                <label htmlFor="authors">Autors:</label>
                <input onChange={handleChange} value={authors.join(",")} type="text" name="authors" id="authors" />

                <label htmlFor="categories">Categories:</label>
                <input onChange={handleChange} value={categories.join(",")} type="text" name="categories" id="categories" />

                <label htmlFor="language">Language:</label>
                <input onChange={handleChange} value={language} type="text" name="language" id="language" /> 

                <label htmlFor="amount">Price:</label>
                <input onChange={handleChange} value={amount} type="number" name="amount" id="amount" />

                <label htmlFor="currencyCode">Currency Code:</label>
                <input onChange={handleChange} value={currencyCode} type="text" name="currencyCode" id="currencyCode" />

                <label htmlFor="pageCount">Amount of Pages:</label>
                <input onChange={handleChange} value={pageCount} type="number" name="pageCount" id="pageCount" />

                <label htmlFor="isOnSale">Is on Sale:</label>
                <input onChange={handleChange} checked={isOnSale} type="checkbox" name="isOnSale" id="isOnSale" />

                <button>Save</button>

            </form>
        </section>
    )
}