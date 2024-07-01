
import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Add from "../Components/Add/Add";
import All from "../Components/AllSpot/All";
import ContactPage from "../Components/Contact/Contact";
import Details from "../Components/Details/Details";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Mylist from "../Components/Mylist/Mylist";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";
import Update from "../Components/Update/Update";
import PrivateRoute from "./PrivateRoute";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Register></Register>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <PrivateRoute><ContactPage></ContactPage></PrivateRoute>,
            },
            {
                path: "/all",
                element: <All></All>,
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://backend-rust-beta.vercel.app/country/${params.id}`)

            },
            {
                path: 'mylist',
                element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,

            },

            {
                path: 'update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://backend-rust-beta.vercel.app/country/${params.id}`)
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    }
]);

export default router