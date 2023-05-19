import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card w-6/12 mx-auto bg-base-100 shadow-xl my-3 ">
            <div className="card-body items-center">
                {/* <h2 className="card-title text-8xl text-red-500">404 Not Found</h2> */}
                <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=1380&t=st=1683218595~exp=1683219195~hmac=4b397d8c7c1871634e5a8c73d1d18186988e24d153201cfb019d8dd38655f39d" alt="" />
                <p>The page you were trying to access does not exist. Please press the button below to return to the homepage.</p>
                <div className="card-actions justify-end">
                    <Link to={`/`}><button className="btn">Return to Homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;