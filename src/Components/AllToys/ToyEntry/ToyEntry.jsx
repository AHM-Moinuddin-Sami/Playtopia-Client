import { Link } from "react-router-dom";

const ToyEntry = ({ id, name, no, seller, price, quantity, subCategory }) => {

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
        <tr className="w-full">
            <th>{no + 1}</th>
            {
                seller ?
                    <td>{seller}</td>
                    :
                    <td></td>
            }
            <td>{name}</td>
            <td>{category}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td><Link to={`/toys/${id}`}><button className="btn btn-ghost btn-xs">View details</button></Link></td>
        </tr>
    );
};

export default ToyEntry;