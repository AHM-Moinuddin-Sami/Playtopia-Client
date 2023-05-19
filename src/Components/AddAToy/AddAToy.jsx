import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const handleToyAddition = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const toy = {
            toyName,
            sellerName,
            sellerEmail,
            price,
            rating,
            quantity,
            description,
            photo
        }

        console.log(toy);
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
                    <input name='sellerName' type="text" placeholder="Jane Doe" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Seller Email</span>
                    </label>
                    <input name='email' type="email" required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Price</span>
                    </label>
                    <input name='price' type="number" required placeholder="0.00$" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Rating</span>
                    </label>
                    <input name='rating' type="number" min={0} max={5} step={0.5} required placeholder="Enter rating" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Quantity</span>
                    </label>
                    <input name='quantity' type="number" required placeholder="Enter the number of available toys" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Description</span>
                    </label>
                    <input name='description' type="text" required placeholder="Enter toy description here" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input name='photo' type="text" required placeholder="http://www.imgurl.com" className="input input-bordered" />

                    <button type='submit' className="btn mt-3">Register</button>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;