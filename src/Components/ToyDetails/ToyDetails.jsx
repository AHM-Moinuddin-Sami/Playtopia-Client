import { useLoaderData } from "react-router-dom";
import useTitle from "../CustomHooks/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { toyName, photo, price, rating, sellerName, sellerEmail, quantity, description } = toyDetails;
    useTitle(toyName);
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row bg-white p-10 rounded-lg">
                <img src={photo} className="w-96 h-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl py-2 font-bold">{toyName}</h1>
                    <p className="text-xl">Seller: {sellerName} Email:<span className="text-gray-600">{sellerEmail}</span></p>
                    <p className="py-6">{description}</p>
                    <div className="flex items-center"><span className='mr-2 text-xl'>Rating:</span><Rating
                        style={{ maxWidth: 150 }}
                        value={rating}
                        readOnly
                    /> <span className='mr-2 text-xl'>Available Quantity: {quantity}</span> </div>
                    <p className="text-xl font-semibold">Price: {price} $</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;