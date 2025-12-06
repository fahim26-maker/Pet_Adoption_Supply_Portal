import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import profile from "../assets/free-user-icon-3296-thumb.png"

const Navbar = () => {
     
    const {user, logOut} = use(AuthContext);
    const handleLogOut =() =>{
        console.log("user trying to logout")
        logOut()
        .then(() => {
            alert("Logged out successful")
        })
        .catch((error) => {
            console.log(error);
        });
    } ;
    return (
        <div className=' flex justify-between p-4 px-30 bg-base-100 border border-base-300'>
            <div className=' flex'>
                <button className="btn btn-circle bg-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
                <p className=' text-2xl font-bold text-orange-500 ml-2'>PawMart</p>
            </div>
            <div className=' space-x-2'>
                <Link to={"/"}><button
                 className="btn btn-soft btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Home</button></Link>
                <Link><button
                 className="btn btn-soft btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Pets & Supplies</button></Link>
            </div>
            <div className=' space-x-2 flex'>
                <img
  className='h-8 rounded-full'
  src={user ? user.photoURL : profile}
  alt="User profile"
  title={user ? user.displayName : "Guest User"}/>
                {user ? <button onClick={handleLogOut} className="btn btn-neutral">Logout</button> :  <><Link to={"/auth/login"}><button className="btn bg-white text-orange-400 border-[#e5e5e5]  btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
                  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                  Login
                </button></Link>
                <Link to={"/auth/register"}><button className="btn bg-white text-orange-400 border-[#e5e5e5]  btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
                  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                  Register
                </button></Link></>}
                                
            </div>
        </div>
    );
};

export default Navbar;