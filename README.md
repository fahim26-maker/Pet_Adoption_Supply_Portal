import React, { useState } from 'react';
import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    console.log({email, password});
    signIn( email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // alert(errorCode, errorMessage);
      setError(errorCode);
    });
  };
    return (
        <div className=' flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className=' font-semibold text-2xl text-center mt-4'>Login your account</h1>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && <p className=' text-red-400 text-xs'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        <p className='text-center font-semibold pt-4'>Don't have an account ? <Link to={"/auth/register"} className=' text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;




<!-- register -->

import React, { useState } from 'react';
import { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser} = use(AuthContext)
            const [passwordError, setpasswordError] = useState("");
        const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target ;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
        setpasswordError("Password must be at least 6 characters long.");
        return;
    } else if (!/[a-z]/.test(password)) {
        setpasswordError("Password must include at least one lowercase letter.");
        return;
    } else if (!/[A-Z]/.test(password)) {
        setpasswordError("Password must include at least one uppercase letter.");
        return;
    } else {
        setpasswordError("");
    }

        console.log({name,photo,email,password})
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            // console.log(user);
            updateUser({ displayName: name, photoURL: photo})
            .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            });
            navigate("/")
            .catch((error) => {
                console.log(error);
                setUser(user);
            })

        })
        .catch((error) => {
            const errorMessage = error.errorMessage;
            alert(errorMessage)
        })
    };
    return (
        <div>
             <div className=' flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className=' font-semibold text-2xl text-center mt-4'>Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required/>
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required/>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          {passwordError && <p className='text-xs text-red-400'>{passwordError}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        <p className='text-center font-semibold pt-4'>Already have an account ? <Link to={"/auth/login"} className=' text-secondary'>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import app from '../fireBase/firebase.config';
export const AuthContext = createContext();