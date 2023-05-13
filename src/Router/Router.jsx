import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/Chekout/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><CheckOut/></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-eta-ashy.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings/></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router;