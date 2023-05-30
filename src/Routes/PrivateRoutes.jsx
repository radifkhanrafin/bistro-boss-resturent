import  { useContext } from 'react';
import { AuthContext } from '../AuthProvaiders/AuthProvaiders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>
            <div className="py-4 pt-12 rounded-full shadow-md w-full h-[70vh] animate-pulse dark:bg-gray-600">
                <div className="flex p-4  space-x-4 sm:px-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
                    <div className="flex-1 justify-center items-center py-2 space-y-4">
                        <div className="w-full  rounded dark:bg-gray-700"></div>
                        <div className="w-5/6  rounded dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="p-4 space-y-4 sm:px-8">
                    <div className="w-full h-4 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-4 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-4 rounded dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;