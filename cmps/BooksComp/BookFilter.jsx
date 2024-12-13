import { bookService } from "../../services/bookService.js";
import { debounce } from "../../services/util.service.js";


const {useState, useRef, useEffect} = React

export function BookFilter({defaultFilter,onSetFilter}){

    const [filterType, setFilterType] = useState(defaultFilter)
    const onSetFilterDebounce = useRef(debounce(onSetFilter)).current

    useEffect(() => {
        onSetFilterDebounce(filterType)
    },[filterType])


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
        setFilterType((prevFilter) => ({...prevFilter, [field]: value}))
        
    }


    function onSubmitFilter(ev){
        ev.preventDefault()
        console.log('filtertoEdit',filterType);
        
        
    }


    const {txt,price,sale} = filterType

    return (
        <section>
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Book Name:</label>
                <input value={txt} onChange={handleChange} type="text" name="txt" id="txt" />

                <label htmlFor="price">Price</label>
                <input value={price || ''} onChange={handleChange} type="number" name="price" id="price" />

                <label htmlFor="sale">On Sale</label>
                <input value={sale} onChange={handleChange} type="checkbox" id="sale" name="sale" />
                <button>Search</button>

            </form>
        </section>
    )

}