import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const ReviewCard = ({ name, photo, review, index, rating }) => {
    const [fadeDirection, setFadeDirection] = useState('');
    useEffect(() => {
        AOS.init();
        if (index % 2 === 0)
            setFadeDirection('fade-right');
        else
            setFadeDirection('fade-left');

    }, [index])
    return (
        <div data-aos={fadeDirection} data-aos-duration="1000" className="card items-center w-10/12 md:w-96 bg-base-200 my-3">
            <img className="h-20 w-20 mt-3 rounded-full object-fit" src={photo} />
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>{review}</p>
                <div className="flex items-center"><span className='mr-2 md:text-xl'>Rating:</span><Rating
                    style={{ maxWidth: 150 }}
                    value={rating}
                    readOnly
                /> </div>
            </div>
        </div>
    );
};

export default ReviewCard;