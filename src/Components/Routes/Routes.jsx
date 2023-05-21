import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Layouts/Homepage/Homepage";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Blog from "../Blog/Blog";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AddAToy from "../AddAToy/AddAToy";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ToyDetails from "../ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
        children: [
            {
                path: "/",
                element: <Main></Main>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addToys",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch("https://playtopia-server.vercel.app/toys")
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/toys/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://playtopia-server.vercel.app/toys/${params.id}`)
            }

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;