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
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/addToys",
                element:<AddAToy></AddAToy>
            },
            {
                path:"/allToys",
                element:<AllToys></AllToys>
            },
            {
                path:"/myToys",
                element:<MyToys></MyToys>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;