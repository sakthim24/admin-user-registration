import {React,useState,useEffect} from 'react'
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';
import {useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {
    const [Usertype, setUsertype] = useState("user")
    const [Username, setUsername] = useState("");
    const [Phone, setPhone] = useState("")
    const {Edituser,currentuser } = useAuth()
    const [isNull, setisNull] = useState(false)
    const navigate= useNavigate();
    useEffect(() => {
        if(!currentuser) navigate('/login')
    })

    const updateuser = async (e) => {
        e.preventDefault()
        if ( !Username || !Phone) setisNull(true);
    
        else {
          setisNull(false);
          await Edituser(Username, Phone,Usertype)
        }
      }

 function resetpassword() {
       navigate('/resetpassword')
       
   }
   
    
 
      
    return (
        
        <Layout>
            <ToastContainer position="bottom-right" />
       <div className="bg-white h-5/6 w-11/12 md:ml-16  text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 min-h-3/4 w-10/12 min-w-3/4 md:w-4/12  mx-auto text-center">
          <div className="bg-purple-600 md:relative mt-4 shadow-lg w-100 sm:rounded-lg text-left">
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl text-white">Edit</h1>
              
              <div className="mb-2 md:mb-4">
                <label className="block  text-sm font-bold mb-2">
                  Username 
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id=" Username "
                  type=" Username"
                  placeholder="Enter username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                   />
              </div>
              <div className="mb-2 md:mb-4">
              <label className="block  text-sm font-bold mb-2">
                  Usertype 
                </label>
              <select className="mb-1 h-10 w-44 text-sm font-bold bg-white text-black border-2 border-black rounded" onChange={async e => {
                e.preventDefault()
                await setUsertype(e.target.value)
                 }}>
                <option  value="user">User</option>
                <option value="admin">Admin</option>
              </select></div>
              <div className="mb-2 md:mb-4">
                <label className="block text-sm font-bold mb-2">
                Phonenumber
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs   leading-tight focus:outline-none focus:shadow-outline"
                  id=" phone "
                  type="number"
                  placeholder="Enter phonenumber"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                   />
              </div>
           
              {isNull && <span className="text-red-600 text-sm">*All fields are required</span>}
              <div className="flex mt-3 md:mt-0 items-center justify-center">
                <button
                  className="bg-white hover:bg-purple-500 text-black h-8  md:h-10 text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"  onClick={updateuser}>
                 save
                </button>
              </div>

            </div> </div></div></div>
        </Layout>
    )
}
