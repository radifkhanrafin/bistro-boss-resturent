import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvaiders/AuthProvaiders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../customHooks/useCart";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const [cart] = useCart()
    const handleLogout = () => {
        logOut()
    }
    const navMenu = <>
        <li><Link>Home</Link></li>
        <li><Link>Contect Us</Link></li>
        <li><Link to='/dashbord'>Dashbord</Link></li>
        {/* <li><Link>
            <button className=" border-4  "> Carts
                <FaShoppingCart className="" />
                <div className="badge w-8 bg-transparent absolute -top-3 -right-7">+{cart?.length || 0}</div>
            </button>
        </Link></li> */}
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/our_shop/salad'>Our Shop</Link></li>

    </>
    return (
        <div className="navbar max-w-7xl fixed z-10 bg-opacity-20  bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <h4>BISTRO BOSS <br /> <span>Restaurant</span></h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <button onClick={handleLogout} className=""><img title="logout" className="w-12 rounded-full" src={user.photoURL} alt="" /></button> :
                    <button className="btn btn-outline"><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;