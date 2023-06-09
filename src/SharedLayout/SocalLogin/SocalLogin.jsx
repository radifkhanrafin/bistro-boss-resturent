import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvaiders/AuthProvaiders';
import { useLocation, useNavigate } from 'react-router-dom';


const SocalLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const userinfo = { name: loggedUser.displayName, email: loggedUser.email, userProfile: loggedUser.photoURL };
                console.log(userinfo)

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then(() => { })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='border-4 border-gray-600 p-4 rounded-lg'>
            <div className="my-2 flex justify-evenly  ">
                <button onClick={handleGoogleLogin}><FaGoogle className='text-3xl text-red-700' /></button>
                <button><FaGithub className='text-3xl text-gray-700' /></button>
                <button><FaFacebookF className='text-3xl text-blue-600' /></button>
            </div>
        </div>
    );
};

export default SocalLogin;
