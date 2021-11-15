import {React,useState,useEffect} from 'react'
import { collection,  getDocs } from '@firebase/firestore'
import { db } from '../firebase-config'
import Navlink from './navlink';
import { useAuth } from '../userauthcontext';

const Navbar = () => {
  const { currentuser,logout } = useAuth()

  const [userstat, setuserstat] = useState([])
  const [userType, setuserType] = useState("")
   
  useEffect(() => {
   
    const fetchrecords=async()=>{
      const collref=collection(db,"users");
      const snapshot = await getDocs(collref);
      setuserstat(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
      await  userstat.map(stat=> {
        console.log(stat.email);
         if(stat.email === currentuser) setuserType(stat.role)
         
      })
    }
    fetchrecords()
  
  }, );
    
    return (
        <>
    <div>
      <nav className="bg-white shadow md:h-20">
      <div className="min-w-screen mx-auto px-1">
          <div className="flex justify-between">
            <div className="md:flex md:space-x-5">
              <span className="flex items-center py-4 px-2  font-black tracking-tighter hover:text-purple-800  text-xl  md:text-4xl text-purple-600 "> Admin User Registration </span></div>
            <div className="flex items-center text-xl mr-4 space-x-2">

          
              {!currentuser &&  <Navlink to='/login' name='Login' />}
               {!currentuser &&  <Navlink to='/register' name='Register' />}
              {userType ==='user' ?<Navlink to='/userpage' name='My profile' />:userType ==='admin' ?<Navlink to='/adminpage' name='Adminpage' />:<></> }
               {currentuser &&  <Navlink to='/login' name='Logout'
                onClick={logout} />}
            </div>
          </div> </div> </nav> </div>
           
  
       
      </>
    );
};
export default Navbar;