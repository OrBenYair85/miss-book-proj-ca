import { ReviewPreview } from "./ReviewPreview.jsx";

export function ReviewList({reviews, onRemoveReview}){

    return (
        <div>
            {!!reviews.length && <h3>Users Recommend:</h3>}
            {reviews.map(review => 
                <ReviewPreview 
                key = {review.id}
                review = {review}
                onRemoveReview = {onRemoveReview}
                />
            )}
        </div>
    )

}