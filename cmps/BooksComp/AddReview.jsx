import {bookService} from  'services/bookService.js'
import {NumberInput} from  'cmps/BooksComp/DynamicComp/NumberInput.jsx'
import {SelectRating} from  'cmps/BooksComp/DynamicComp/SelectRating.jsx'
import {StarRating} from 'cmps/BooksComp/DynamicComp/StarRating.jsx'
import {TextBoxRating} from 'cmps/BooksComp/DynamicComp/TextBoxRating.jsx'

const { useState, useRef, useEffect } = React 

export function AddReview({saveReview, toggleReview}){

    const inputRef = useRef()
    const [review,setReview] = useState(bookService.getEmptyReview())

    const {fullname, date, txt,rating} = review
    const [cmpType,setCmpType] = useState('stars')

    useEffect(() => {
        inputRef.current.focus()
    },[])

    function onAddReview(ev){
        ev.preventDefault()
        saveReview(review)
        toggleReview()
    }

    function handleChange({target}){
        const {value, name:field} = target
        setReview((prevReview) => ({...prevReview, [field]: value}))
    }

    

    return(
        <section className="review-container">
            <form onSubmit={onAddReview} className='review-form'>
                <div className="review-modal">
                    <h1>Add Review</h1>
                    <button className="btn-toggle-modal" onClick={toggleReview}>X</button>
                    <label className='bold-txt' htmlFor='fullname'>Full Name:</label>
                    <input
                        autoFocus
                        ref={inputRef}
                        placeholder='Please enter your name:'
                        name='fullname'
                        type='text'
                        id='fullname'
                        value={fullname}
                        onChange={handleChange}
                        autoComplete='off'
                    />

                    <label className='bold-txt' htmlFor='date'>Date:</label>   
                    <input
                        type='date'
                        id='date'
                        name='date'
                        value={date}
                        onChange={handleChange}
                    />

                    <div className="rate-by-choice">
                        <p className='bold-txt'>select rating type:</p>
                        <input 
                            name='rating'
                            onChange={(ev) => setCmpType(ev.target.value)}
                            id='select'
                            defaultChecked={cmpType === 'select'}
                            type='radio'
                            value='select'
                        />
                        <label htmlFor='select'>Select</label>
                        <input name='rating'
                            onChange={(ev) => setCmpType(ev.target.value)}
                            id='stars'
                            type='radio'
                            defaultChecked = {cmpType === 'stars'}
                            value='stars'
                        />
                        <label htmlFor='stars'>Stars</label>
                        <input name='rating' 
                            onChange={(ev) => setCmpType(ev.target.value)}
                            id='number'
                            type='radio'
                            defaultChecked = {cmpType === 'number'}
                            value='number'
                        />
                        <label htmlFor="number">Number</label>
                    </div>
                    <DynamicCmp type={cmpType} handleChange={handleChange} rating={rating} />
                    <TextBoxRating handleChange={handleChange} txt={txt} />
                    <button>Save</button>

                </div>
    
            </form>
        </section>
    )
}


function DynamicCmp(props) {

    switch(props.type){
        case 'select':
            return <SelectRating {...props} />
        case 'number':
            return <NumberInput {...props} />
        case 'stars':
            return <StarRating {...props} />
    }

}