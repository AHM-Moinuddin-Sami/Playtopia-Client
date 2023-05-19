
const AddAToy = () => {
    return (
        <div>
            <div className='mx-auto w-11/12 md:w-1/2 bg-white p-8 mt-2 rounded'>
                <h3 className='text-center font-semibold text-4xl'>Add a Toy</h3>
                <form className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Toy Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Jane Doe" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text text-xl">Seller Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Jane Doe" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Seller Email*</span>
                    </label>
                    <input name='email' type="email" required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Price*</span>
                    </label>
                    <input name='email' type="number" required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Rating*</span>
                    </label>
                    <input name='email' type="range" required placeholder="example@mail.com" className="input input-bordered" />
                    
                    <label className="label">
                        <span className="label-text text-xl">Quantity*</span>
                    </label>
                    <input name='email' type="number" required placeholder="example@mail.com" className="input input-bordered" />
                    
                    <label className="label">
                        <span className="label-text text-xl">Description*</span>
                    </label>
                    <input name='email' type="text" required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input name='photo' type="text" placeholder="http://www.imgurl.com" className="input input-bordered" />

                    <button type='submit' className="btn mt-3">Register</button>


                </form>
            </div>
        </div>
    );
};

export default AddAToy;