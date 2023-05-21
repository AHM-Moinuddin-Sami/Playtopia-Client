import ReviewCard from "./ReviewCard/ReviewCard";
import { useEffect, useState } from "react";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://playtopia-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>
            <h3 className='text-center text-6xl text-primary-content my-10 font-semibold'>Check out some reviews from our customers</h3>
            <div className="bg-gradient-to-b from-transparent via-blue-700 to-transparent">
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



        </div>
    );
};

export default Reviews;