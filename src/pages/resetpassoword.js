import { React, useState } from 'react'
import { useAuth } from '../userauthcontext';

function Resetpassword() {
  const [Email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)
  const { resetPassword} = useAuth()
  const [isNull, setisNull] = useState(false)



  const resetpassworduser = async (e) => {
    e.preventDefault()
    if (!Email || !loginPassword) setisNull(true);

    else {
      setisNull(false);
      setIsSubmit(true)
     await resetPassword(Email,loginPassword)
    }
  }

  return (
 
      <div className=" h-5/6 w-11/12 md:ml-16  text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 w-10/12 md:w-4/12  mx-auto text-center">
          <div className="bg-purple-800 md:relative mt-4 shadow-lg w-100 sm:rounded-lg text-left">
      
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl  text-white">RESET PASSWORD</h1>
              <div className="mb-2 md:mb-4">
                <label className="block  text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email "
                  type="email"
                  placeholder="Enter valid email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
              </div>
              <div className="mb-6">
                <label className="blocktext-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="New password "
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }} />
                {isNull && <span className="text-red-600 text-sm">*Password field is empty</span>}
              </div>
              <div className="flex mt-3 md:mt-0 items-center justify-center">
                <button
                  className="bg-white hover:bg-purple-500 text-black h-8 md:h-10 text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={resetpassworduser} >
                  Reset Password
                </button>
              </div>

            </div> </div></div></div>

  );
}

export default Resetpassword;