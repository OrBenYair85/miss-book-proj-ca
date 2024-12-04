import { bookService } from "../../services/bookService.js";


const {useState, useReff, useEffect} = React

export function BookFilter({defaultFilter,onSetFilter}){

    const [filterType, setFilterType] = useState(defaultFilter)

    useEffect(() => {
        onSetFilter(filterType)
    },[filterType])


    function handleChnge({target}){
        let {value, name: field} = target
        switch(target.type){
            case 'range':
            case 'number':
                value = target.value
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
                <input value={txt} onChange={handleChnge} type="text" name="txt" id="txt" />

                <label htmlFor="price">Price</label>
                <input value={price} onChange={handleChnge} type="number" name="price" id="price" />

                <label htmlFor="sale">On Sale</label>
                <input value={sale} onChange={handleChnge} type="checkbox" id="sale" name="sale" />
                <button>Search</button>

            </form>
        </section>
    )

}