import { React, useState } from 'react'
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';
import { Link} from 'react-router-dom';


function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isNull, setisNull] = useState(false)
  const {login } = useAuth()
  

  const loginuser = async (e) => {
    e.preventDefault()
    if (!Email || !Password) setisNull(true);

    else {
      setisNull(false);
      await login(Email, Password)
      console.log("Sent inn")
      
     }
  }



  return (
   <Layout>
       
      <div className=" h-5/6 w-11/12 md:ml-16 text-gray-800 antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className=" relative py-10 w-10/12 md:w-4/12  mx-auto text-center">
          <div className="bg-purple-600 md:relative mt-4  shadow-lg w-100 sm:rounded-lg text-left">
           
            
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl text-white">LOG IN</h1>
            
              <div className="mb-2 md:mb-4">
                <label className="block  text-white text-xs md:text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-2 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="email "
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
              </div>
              <div className="mb-1 md:mb-4">
                <label className="block  text-white text-xs md:text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password "
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }} />
                {isNull && <span className="text-red-600 text-xs md:text-sm">*All fields are required</span>}
              </div>
              <div className="flex mt-3 md:mt-0 items-center justify-center">
                <button
                  className="bg-white hover:bg-purple-500 text-black h-8  md:h-10 text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={loginuser} >
                  Login
                </button>
               
              </div>
              <div className="flex justify-between items-baseline py-2 md:pr-5">
                <span className="text-xs  text-white md:text-sm hover:text-black md:pr-0">  <Link to='/forgotpassword'>Forgot password?</Link></span>
                <span className="text-xs text-white  md:text-sm hover:text-black md:pl-5" > <Link to='/register'>Signup</Link></span>
              </div>
            </div> </div></div></div>
            </Layout>
  );
}

export default Login