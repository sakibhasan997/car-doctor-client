import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        const newUser = {email, password}
        console.log(newUser);

        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });

    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" mr-12 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Login now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-red-600 text-white border-none" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        <p className='text-center py-5'>New to Car Doctors <Link to='/signup' className='text-red-600 font-bold '>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;