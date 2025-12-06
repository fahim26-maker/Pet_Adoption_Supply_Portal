import React, {use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../fireBase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const Login = () => {
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
        <div>
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
          <Link onSubmit={handleGoogleSignIn} className='btn btn-neutral bg-white text-black border-[#e5e5e5] mt-1  flex'><button class=" flex">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button></Link>
        <p className='text-center font-semibold pt-4'>Don't have an account ? <Link to={"/auth/register"} className=' text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Login;