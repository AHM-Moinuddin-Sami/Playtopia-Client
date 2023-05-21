import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";
import useTitle from "../../CustomHooks/useTitle";

const Homepage = () => {
    useTitle("Home");
    return (
        <div className="bg-blue-200">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;