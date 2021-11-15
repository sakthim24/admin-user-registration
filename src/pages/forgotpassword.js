import {React,useState} from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgotpassword() {
    const [loginEmail, setLoginEmail] = useState("");
    const [isNull, setisNull] = useState(false)
    
    const resetpassword = (e) => {
      e.preventDefault();
      if (!loginEmail) setisNull(true);
      else{
      var templateParams = {
        to_mail: loginEmail,
    };
  }
    emailjs.send('service_dkjh3qj', 'template_v0e4zzj', templateParams, 'user_HLty6CSiLYolwFd623J82')
        .then(function(response) {
          toast.info("password reset link sent to your Email")
        }, function(error) {
          toast.error("Oops! something went wrong")
        });

      }
    return (
     
        <div className=" h-5/6 w-11/12 md:ml-16  text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 w-11/12 md:w-4/12  mx-auto text-center">
          <div className="md:relative mt-4 bg-purple-600 shadow-lg w-100 sm:rounded-lg text-left">
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-xl md:text-2xl text-white">FORGOT PASSWORD</h1> 
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
               Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email "
                type="email"
                placeholder="Email"
                required
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }} />
                  {isNull &&  <span className="text-red-600 text-xs md:text-sm">*Email  field is empty</span>}
            </div>
            
            <div className="flex   mt-2 md:mb-0 mb-5 items-center justify-center">
              <button
                className="bg-white h-10 md:h-10 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={resetpassword} >
                Continue
              </button>
             </div>
             <ToastContainer position="bottom-right" />
        </div> </div></div></div>
        
      );
    }

export default Forgotpassword