import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaMailBulk, FaShoppingBag,    } from "react-icons/fa";
import Admin from "../Dashbord/NavMenu/Admin";
import UserNavbars from "../Dashbord/NavMenu/UserNavbars";


const Dashbord = () => {
    const isAdmin = true;
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
                    <ul className="menu p-4 w-80 bg-[#D1A054] uppercase text-base-content space-y-1">
                        {/* <!-- Sidebar content here --> */}

                        {isAdmin ? <Admin></Admin> : <UserNavbars></UserNavbars>}

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