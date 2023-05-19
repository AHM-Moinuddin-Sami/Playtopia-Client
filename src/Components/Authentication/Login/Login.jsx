import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { logIn, googleLogin } = useContext(AuthContext);

    function firebaseErrorFormater(error) {
        let errMsg = 'An error occurred.';

        switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/wrong-password':
            case 'auth/user-not-found':
            case 'auth/missing-email':
                errMsg = 'The provided email or password is invalid.';
                break;
        }

        return errMsg;
    }

    const handleLogin = event => {
        event.preventDefault();
        const data = event.target;
        const email = data.email.value;
        const password = data.password.value;

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                setErrorMessage('');
                console.log(result)
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(firebaseErrorFormater(error));
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {

                const loggedUser = result.user;
                navigate(from, { replace: true });
                setErrorMessage('');
            }
            )
            .catch(error => {
                console.log(error);
                setErrorMessage(firebaseErrorFormater(error));
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80")` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <form onSubmit={handleLogin} className="form-control ">
                        <div className="card-body">
                            <h3 className="text-center text-3xl font-semibold">Login</h3>
                            <hr />
                            <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-[#34A853] hover:border-[#34A853]">Log in with Google  <FaGoogle className="ml-1"></FaGoogle></button>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@email.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                {
                                    errorMessage &&
                                    <h3 className='text-red-500'>{errorMessage}</h3>
                                }
                            </div>

                            <h3>Don't have an account?<Link to="/register" className="text-blue-500 font-semibold"> Register</Link></h3>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;
