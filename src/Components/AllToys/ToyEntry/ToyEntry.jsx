import { Link } from "react-router-dom";

const ToyEntry = ({ id, name, no, seller, price, quantity, subCategory, photo }) => {

    let category;

    switch (subCategory) {
        case "traditional":
            category = "Traditional Boardgame";
            break;
        case "tabletop":
            category = "Tabletop Boardgame";
            break;
        case "puzzle":
            category = "Puzzle";
            break;
    }

    return (
        <tr className="w-full text-center">
            <th>{no + 1}</th>
            {
                seller ?
                    <td>{seller}</td>
                    :
                    <td>Anonymous Seller</td>
            }
            <td className="flex items-center">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td><Link to={`/toys/${id}`}><button className="btn btn-ghost btn-xs">View details</button></Link></td>
        </tr>
    );
};

export default ToyEntry;