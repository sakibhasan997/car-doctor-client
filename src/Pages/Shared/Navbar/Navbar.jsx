import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {user?.email ?
         <>

        <li><Link to='/bookings'>My Bookings</Link></li>
        <li><button onClick={handleLogOut}>Log Out</button></li>
        </> :
            <li><Link to='/login'>Login</Link></li> 
            
        }
        {/* <li><Link to='/contact'>Contact</Link></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='flex gap-4 items-center px-5 '>
                        <FaShoppingBag className='text-slate-500' />
                        <FaSearch className='text-slate-500'/>
                    </span>
                    <button className="btn btn-outline btn-error">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;