
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../SharedLayout/Header/Navbar';
import Footer from '../SharedLayout/Footer/Footer';

const Main = () => {
    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className='container mx-auto max-w-7xl'>
           {noHeaderFooter || <Navbar></Navbar>}
            <div className='min-h-[calc(100vh-128px)]'>
                <Outlet></Outlet>
            </div>
          { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;

// className='btn btn-outline mt-4 border-0 border-b-2 border-l-2 bg-transparent hover:border-0  hover:border-t-2  hover:border-r-2  hover:bg-transparent hover:text-red-700'