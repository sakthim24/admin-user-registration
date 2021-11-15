import {React,useState,useEffect} from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';


export default function Myprofile() {
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

    
     
      const redirect = () => {
        navigate('/update')
     }
     
    
    return (
        <Layout>
        
      <div className="bg-white h-5/6 w-11/12 md:ml-16  text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 min-h-3/4 w-10/12 min-w-3/4 md:w-4/12  mx-auto text-center">
          <div className="bg-purple-600 md:relative mt-4 shadow-lg w-100 sm:rounded-lg text-left">
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl text-white">My Profile</h1>
           {  userstat.map((stat) => {
               if (stat.email === currentuser) {
               return(
                <div key={stat.id}>
            <div className="font-medium mb-4 ">
                 <span>Name</span>  <span className="ml-20 ">{stat.username}</span>  
                    </div>
                    <div className="font-medium mb-4 ">
                 <span>Email</span>  <span className="ml-20 ">{stat.email}</span> 
                    </div>
                    <div  className="font-medium mb-4">
                    <span>Phone</span>  <span className="ml-20 ">{stat.phone}</span> 
                    </div>
                    <div  className="font-medium mb-4">
                    <span>Creator</span>  <span className="ml-20 ">{stat.creator}</span> 
                    </div>
                    </div>
           )}
           
        })
          }
              <div className="flex mt-3 md:mt-0 items-center justify-center">
                <button
                 className="bg-white hover:bg-purple-500 text-black h-8  md:h-10 text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={redirect} >
                 Edit
                </button>
              </div>

            </div> </div></div></div>
        </Layout>
    )
}
