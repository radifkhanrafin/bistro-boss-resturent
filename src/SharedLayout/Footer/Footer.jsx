
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-12'>
            <footer className="footer gap-0  text-white">
                <div className='bg-[#272d36] w-full h-[400px] flex justify-end pe-36 items-center'>
                    <div className='space-y-2'>
                        <h3 className='text-3xl font-semibold'>CONTACT US</h3>
                        <p>123 ABS Street, Uni 21, Bangladesh </p>
                        <p>+88 123456789 </p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00 </p>
                    </div>
                </div>
                <div className='bg-[#111827] w-full h-[400px] flex justify-start ps-36 items-center'>
                    <div className='space-y-2'>
                        <h3 className='text-3xl font-semibold'>Follow US</h3>
                        <p>Join us on social media</p>
                        <div className='flex gap-3'>
                            <FaTwitter />
                            <FaInstagram />
                            <FaFacebookF />
                        </div>
                    </div>


                </div>
            </footer>
            <footer className="footer footer-center p-4  text-white bg-neutral">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;