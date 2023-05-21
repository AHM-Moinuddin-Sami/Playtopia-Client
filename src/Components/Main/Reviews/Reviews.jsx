import ReviewCard from "./ReviewCard/ReviewCard";
import { useEffect, useState } from "react";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541256942802-7b29531f0df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")` }}>
            <div className="md:grid w-9/12 mx-auto md:grid-cols-2 bg-cover gap-3 justify-items-center bg-transparent">
                {
                    reviews.map((review, i) => <ReviewCard
                        key={i}
                        name={review.reviewerName}
                        photo={review.avatar}
                        rating={review.rating}
                        review={review.review}
                        index={i}
                    ></ReviewCard>
                    )
                }
            </div>
        </div>

    );
};

export default Reviews;