import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';



const googleProvider = new GoogleAuthProvider();
const Register = () => {
     // google signin
   const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })
    } 

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
           <button onClick={handleGoogleSignIn}
  className="btn bg-white text-black border-[#e5e5e5] mt-1 flex items-center gap-2">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g>
      <path d="m0 0H512V512H0" fill="#fff"></path>
      <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
      <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
      <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
      <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
    </g>
  </svg>
  Login with Google
</button>

        <p className='text-center font-semibold pt-4'>Already have an account ? <Link to={"/auth/login"} className=' text-secondary'>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;