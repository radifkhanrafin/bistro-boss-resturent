
import {  FaHome, FaUsers, FaUtensils, } from 'react-icons/fa';
import { HiBars3BottomRight, HiBookmark,  } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import useCart from '../../customHooks/useCart';

const Admin = () => {
    const [cart] = useCart();
    return (
        <>
            <li><NavLink to='/dashbord/home'><FaHome /> admin home </NavLink></li>
            <li><NavLink to='/dashbord/reservation'> <FaUtensils /> Add items </NavLink></li>
            <li><NavLink to='/dashbord/history'> <HiBars3BottomRight /> Manage items </NavLink></li>
            <li className=""><NavLink to='/dashbord/mycart'> <HiBookmark /> manage booking<span className="badge text-white bg-pink-500 border-0 -ml-2 ">+{cart?.length || 0}</span>  </NavLink>

            </li>
            <li><NavLink to='/dashbord/allusers' ><FaUsers />  All users </NavLink></li>
        </>
    );
};

export default Admin;