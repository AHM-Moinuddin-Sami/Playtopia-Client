import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyToysEntry = ({ id, name, no, seller, email, price, quantity, subCategory, photo, description, handleUpdate, handleDelete }) => {
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

    const handleDeleteMedium = event =>{
        event.preventDefault;

        handleDelete(id);
    }

    const handleUpdateMedium = event => {

        event.preventDefault();
        const form = event.target;

        const updatedPrice = form.price.value;
        const updatedDescription = form.description.value;
        const updatedQuantity = form.quantity.value;

        handleUpdate(id, updatedPrice, updatedDescription, updatedQuantity);
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
            <td className="">
                <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">Update</label>
                {/* <Link to={`/update/${id}`} className="btn btn-ghost btn-xs">Update</Link> */}
                <br />
                <button onClick={handleDeleteMedium} className="btn btn-ghost text-red-500 hover:bg-red-400 hover:text-white btn-xs">delete</button>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleUpdateMedium} className="form-control">
                            <h3 className="text-3xl mb-3">Update toy information: <br /> <small>{name}</small></h3>
                            <hr />
                            <p><small>Change the value of the fields you want to update</small></p>
                            <label className="label">
                                <span className="label-text text-xl">Price</span>
                            </label>
                            <input name='price' type="number" defaultValue={price} placeholder="0.00$" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text text-xl">Available Quantity</span>
                            </label>
                            <input name='quantity' type="number" defaultValue={quantity} placeholder="0" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text text-xl">Detail description</span>
                            </label>
                            <textarea name='description' type="text" defaultValue={description} placeholder="Information regarding the toy" className="input input-bordered h-[200px]" />
                            <button type="submit" className="btn mt-3" onClick={() => document.getElementById("my-modal-3").checked = false}>Submit</button>
                        </form>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToysEntry;