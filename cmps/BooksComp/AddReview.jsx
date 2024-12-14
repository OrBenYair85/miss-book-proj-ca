
const { useState} = React 

export function AddReview(){

    const [hoverStar, setHoverStar] = useState(null)
    const [selectedRating, setSelectedRating] = useState(0)

    const handleMouseEnter = (index) => {
        setHoverStar(index)
    }

    const handleMouseLeave = () => {
        setHoverStar(null)
    }

    const handleClick = (index) => {
        setSelectedRating(index)
        if(onRatingChange) onRatingChange(index)
    }

    return(
        <section className="review-container">
            <form>

                <label htmlFor="revName">Book Title:</label>
                <input type="text" name="revName" id="revName" />  


                <label htmlFor="rating">Book Title:</label>
                <input type="text" name="rating" id="rating" />
                
            </form>
        </section>
    )
}