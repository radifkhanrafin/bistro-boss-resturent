import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaMailBulk, FaRegBookmark, FaShoppingBag, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import useCart from "../customHooks/useCart";


const Dashbord = () => {
    const [cart] = useCart()
    return (
        <div className="container mx-auto max-w-7xl">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-12  ml-8">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content space-y-1">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashbord/home'><FaHome /> USER HOME </NavLink></li>
                        <li><NavLink to='/dashbord/reservation'> <FaCalendarAlt /> RESERVATION </NavLink></li>
                        <li><NavLink to='/dashbord/history'> <FaWallet />  PAYMENT HISTORY </NavLink></li>
                        <li className=""><NavLink to='/dashbord/mycart'> <FaShoppingCart /> MY CARTS<span className="badge text-white bg-pink-500 border-0 -ml-2 ">+{cart?.length || 0}</span>  </NavLink>

                        </li>
                        <li><NavLink to='/dashbord/addreview' ><FaStar />  ADD REVIEW </NavLink></li>
                        <li><NavLink to='/dashbord/booking'> <FaRegBookmark/> MY BOOKING </NavLink></li>


                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome /> HOME</NavLink></li>
                        <li><NavLink to='/menu'><FaShoppingBag /> OUR MENU</NavLink></li>
                        <li><NavLink to='/'><FaMailBulk /> CONTECT</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;