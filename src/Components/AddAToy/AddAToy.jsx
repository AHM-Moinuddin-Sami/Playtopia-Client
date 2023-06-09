import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../CustomHooks/useTitle";

const AddAToy = () => {

    useTitle("Add A Toy");

    const { user } = useContext(AuthContext);

    console.log(user);

    const handleToyAddition = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const toy = {
            toyName,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description,
            photo
        }

        console.log(toy);

        fetch('https://playtopia-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Toy added successfully',
                        text: "The product has been added to the database!",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Okay'
                    })
                }
            })


    }

    return (
        <div>
            <div className='mx-auto w-11/12 md:w-1/2 bg-white p-8 mt-2 rounded'>
                <h3 className='text-center font-semibold text-4xl'>Add a Toy</h3>
                <p className="text-center">Add the fields below needs to be filled to add a toy</p>
                <form onSubmit={handleToyAddition} className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Toy Name</span>
                    </label>
                    <input name='toyName' type="text" placeholder="Checkers" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text text-xl">Seller Name</span>
                    </label>
                    <input name='sellerName' type="text" defaultValue={user.displayName} placeholder="Jane Doe" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Seller Email</span>
                    </label>
                    <input name='email' type="email" defaultValue={user.email} required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Sub Category</span>
                    </label>
                    <select className="input input-bordered" required name="subCategory">
                        <option value="traditional">Traditional Boardgame</option>
                        <option value="tabletop">Tabletop Boardgame</option>
                        <option value="puzzle">Puzzle</option>
                    </select>

                    <label className="label">
                        <span className="label-text text-xl">Price</span>
                    </label>
                    <input name='price' type="number" step={0.01} required placeholder="0.00$" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Rating</span>
                    </label>
                    <input name='rating' type="number" min={0} max={5} step={0.1} required placeholder="Enter rating" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Quantity</span>
                    </label>
                    <input name='quantity' type="number" min={0} required placeholder="Enter the number of available toys" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Description</span>
                    </label>
                    <input name='description' type="text" required placeholder="Enter toy description here" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input name='photo' type="text" required placeholder="http://www.imgurl.com" className="input input-bordered" />

                    <button type='submit' className="btn mt-3">Add Product</button>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;