import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Others/Layout";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/checkout',
                element: <PrivetRoute><div>Data coming soon </div></PrivetRoute>
            }
        ]
    },
    
])

export default router;