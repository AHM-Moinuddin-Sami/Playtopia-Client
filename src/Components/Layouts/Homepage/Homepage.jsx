import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";

const Homepage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;