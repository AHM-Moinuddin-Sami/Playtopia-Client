import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Layouts/Homepage/Homepage";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;