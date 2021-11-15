import {React,useState,useEffect} from 'react'
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';
import { collection,  getDocs } from '@firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom';
export default function Adminpage() {
    const [userstat, setuserstat] = useState([])
    const [isUpdate, setisUpdate] = useState(false)
    const {currentuser } = useAuth()
    const navigate= useNavigate();
   
    useEffect(() => {
        if(!currentuser) navigate('/login')
        const fetchrecords=async()=>{
          const collref=collection(db,"users");
          const snapshot = await getDocs(collref);
          setuserstat(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
          console.log(userstat)
          console.log(userstat.email);
          console.log(currentuser);
        }
        fetchrecords()
      
      }, [isUpdate]);

    
     
    const myprofile = () => {
    navigate('/profile')
    }
    const createuser = () => {
    navigate('/createuser')
    }
    const myusers = () => {
    navigate('/myusers')
    }
    const viewadmin = () => {
    navigate('/viewadmins')
    }
    const viewusers = () => {
    navigate('/viewusers')
    }

    
    return (
        <Layout>
        
      <div className=" h-5/6 w-11/12 md:ml-16  text-gray-800 antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 min-h-3/4 w-10/12 min-w-3/4 md:w-4/12  mx-auto text-center">
          <div className="md:relative mt-4 shadow-lg w-100 sm:rounded-lg text-left">
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl text-grey-500">Admin</h1>
          
            <div className="mb-4 border items-center justify-center ">
            <button
                  className=" min-w-full  bg-purple-500 hover:bg-purple-800 text-white h-3 md:h-10 text-md md:text-base font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={myprofile} >
                 View my profile
                </button>
                    </div>
                    <div className="mb-4 border items-center justify-center ">
                    <button
                  className=" min-w-full bg-purple-500 hover:bg-purple-800 text-white h-3 md:h-10 text-md md:text-base font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={viewusers} >
               View All Users
                </button> 
                    </div>
                    <div  className="mb-4 border items-center justify-center  ">
                    <button
                  className=" min-w-full  bg-purple-500 hover:bg-purple-800 text-white h-3 md:h-10 text-md md:text-base font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={viewadmin} >
                View All Admins
                </button> 
                    </div>
                    <div className="mb-4 border items-center justify-center  ">
                    <button
                  className=" min-w-full  bg-purple-500 hover:bg-purple-800 text-white h-3 md:h-10 text-md md:text-base font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={myusers} >
               View My users and Admins
                </button> 
                    </div>
                 <div className="mb-4 border items-center justify-center ">
                <button
                  className=" min-w-full bg-purple-500 hover:bg-purple-800 text-white h-3 md:h-10 text-md md:text-base font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={createuser} >
                create a user
                </button>
              </div>

            </div> </div></div></div>
        </Layout>
    )
}
