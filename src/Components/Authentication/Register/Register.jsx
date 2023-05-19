import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [terms, setTerms] = useState(false);

    const handleTerms = (event) => {
        setTerms(event.target.checked);
    }

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80")` }}>
            <div className='mx-auto w-11/12 md:w-1/2 bg-white p-8 mt-2 rounded'>
                <h3 className='text-center font-semibold text-4xl'>Registration</h3>
                <form className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Your Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Jane Doe" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Your Email*</span>
                    </label>
                    <input name='email' type="email" required placeholder="example@mail.com" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Your Password*</span>
                    </label>
                    <input name='password' type="password" required placeholder="Must be atleast 6 characters" className="input input-bordered" />

                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input name='photo' type="text" placeholder="http://www.imgurl.com" className="input input-bordered" />

                    <div className="flex mt-3">
                        <span className="mr-3">Accept Terms and Conditions</span>
                        <input onClick={handleTerms} type="checkbox" className="checkbox" />
                    </div>

                    <button type='submit' disabled={!terms} className="btn mt-3">Register</button>

                    <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-semibold' to='/login'>Login</Link></h3>
                </form>
            </div>
        </div>
    );
};

export default Register;