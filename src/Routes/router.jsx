
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Food_Menu from '../Pages/Food_Menu/Food_Menu';
import Our_Shop from '../Pages/Our_Shop/Our_Shop';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Dashbord from '../Layout/Dashbord';
import My_Cart from '../Dashbord/My_Cart/My_Cart';
import PrivateRoutes from './PrivateRoutes';
import AllUsers from '../Dashbord/AllUsers/AllUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Food_Menu></Food_Menu>
      },
      {
        path: '/our_shop/:category',
        // element: <PrivateRoutes> <Our_Shop></Our_Shop></PrivateRoutes>
        element: <Our_Shop></Our_Shop>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: '/dashbord',
    element: <PrivateRoutes><Dashbord></Dashbord></PrivateRoutes>,

    children: [
      {
        path: 'mycart',
        element: <My_Cart></My_Cart>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      }

    ]
  }
]);

export default router;