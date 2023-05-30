import { FaCalendarAlt, FaHome, FaRegBookmark, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCart from "../../customHooks/useCart";

const UserNavbars = () => {
    const [cart] = useCart();
    return (
        <>
            <li><NavLink to='/dashbord/home'><FaHome /> USER HOME </NavLink></li>
            <li><NavLink to='/dashbord/reservation'> <FaCalendarAlt /> RESERVATION </NavLink></li>
            <li><NavLink to='/dashbord/history'> <FaWallet />  PAYMENT HISTORY </NavLink></li>
            <li className=""><NavLink to='/dashbord/mycart'> <FaShoppingCart /> MY CARTS<span className="badge text-white bg-pink-500 border-0 -ml-2 ">+{cart?.length || 0}</span>  </NavLink>

            </li>
            <li><NavLink to='/dashbord/addreview' ><FaStar />  ADD REVIEW </NavLink></li>
            <li><NavLink to='/dashbord/booking'> <FaRegBookmark /> MY BOOKING </NavLink></li>
        </>
    );
};

export default UserNavbars;