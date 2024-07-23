import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/Home";
import Errorpage from "../components/errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage />
    }
])

export default router