import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";
import useTitle from "../../CustomHooks/useTitle";

const Homepage = () => {
    useTitle("Home");
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;