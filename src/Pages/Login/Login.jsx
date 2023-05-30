import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocalLogin from '../../SharedLayout/SocalLogin/SocalLogin';
import authentication from "../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvaiders/AuthProvaiders';
import Swal from 'sweetalert2'


const Login = () => {
  const { signIn } = useContext(AuthContext)
  const [disabled, setDisable] = useState(true)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    loadCaptchaEnginge(6);

  }, []);

  const handleLogin = (event) => {
    console.log('bal')
    event.preventDefault()
    const form = event.target;
    const Useremail = form.email.value;
    const password = form.password.value;
    console.log(Useremail, password)
    signIn(Useremail, password)
      .then(result => {
        console.log(result)
        Swal.fire({
          title: 'User Login Successfull',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from, { replace: true });
      })
      .catch(err => console.log(err))
  }

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false)
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-base-200 rounded-md mt-8 p-5'>
      <div className='relative'>
        <img src={authentication} alt="" />
        <button className='absolute bottom-14 right-60 btn-hover-style rounded-full p-2'>
          <Link to='/'>Back to home</Link>
        </button>
      </div>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  dark:text-gray-100">
        <div className='text-black'>
          <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
          <p className="text-sm text-center dark:text-gray-400">Dont have account?
            <Link to='/signup' href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
          </p>
        </div>

        {/* <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input type="email" name="userEmail" placeholder="123@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            </div>
          </div>
          <div className="space-y-2">
            <LoadCanvasTemplate />
            <input  type="text" onBlur={handleVerify} placeholder="type the lucky code" className="text-black w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400" />
            
          </div>
          {disable ? '' :
            <input className="w-full hover:cursor-pointer  px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900" type="submit"
              value={disable ? 'Please verify' : 'Login'}
            />
          }
        </form> */}
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered text-black" />

          </div>
          <div className="form-control mt-6">
            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <SocalLogin></SocalLogin>
      </div>
    </div>
  )
}

export default Login;