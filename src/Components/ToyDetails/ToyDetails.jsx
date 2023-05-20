import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { toyName, photo, price, rating, sellerName, sellerEmail, quantity, description } = toyDetails;
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row bg-white p-10 rounded-lg">
                <img src={photo} className="w-96 h-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl py-2 font-bold">{toyName}</h1>
                    <p className="text-xl">Seller: {sellerName} Email:<span className="text-gray-600">{sellerEmail}</span></p>
                    <p className="py-6">{description}</p>
                    <p className="py-4">Rating: {rating} Available Quantity: {quantity}</p>
                    <p className="text-xl font-semibold">Price: {price} $</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;