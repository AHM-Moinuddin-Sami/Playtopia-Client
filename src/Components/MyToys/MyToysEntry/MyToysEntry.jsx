import { Link } from "react-router-dom";

const MyToysEntry = ({ id, name, no, seller, email, price, quantity, subCategory, photo, description }) => {
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
        <tr className="w-full text-center overflow-hidden">
            <th>{no + 1}</th>
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
            {
                seller ?
                    <>
                        <td>{seller}</td>
                    </>
                    :
                    <>
                        <td>Anonymous Seller</td>
                    </>
            }
            <td>{email}</td>
            <td>{category}</td>
            <td className="overflow-x-scroll whitespace-nowrap max-w-[450px]">{description}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td><label htmlFor="my-modal" className="btn">open modal</label></td>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form action="">
                        <input type="text" />
                    </form>
                </div>
            </div>
        </tr>
    );
};

export default MyToysEntry;