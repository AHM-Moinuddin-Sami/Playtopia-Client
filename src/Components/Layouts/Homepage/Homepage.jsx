import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";
import useTitle from "../../CustomHooks/useTitle";

const Homepage = () => {
    useTitle("Home");
    return (
        <div className="bg-gradient-to-b from-blue-600 via-blue-300 to-blue-600">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;