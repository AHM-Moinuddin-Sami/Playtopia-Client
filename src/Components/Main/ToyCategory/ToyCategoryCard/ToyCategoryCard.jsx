import { Link } from "react-router-dom";

const ToyCategoryCard = ({ photo, name, price, rating, id }) => {
    return (
        <div className="card w-96 bg-base-200 my-3">
            <figure><img className="h-72 w-full object-fit" src={photo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} $ Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toys/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCategoryCard;