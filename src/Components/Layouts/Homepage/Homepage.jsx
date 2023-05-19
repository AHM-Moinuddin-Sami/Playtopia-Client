import { Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h3>Home</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Homepage;