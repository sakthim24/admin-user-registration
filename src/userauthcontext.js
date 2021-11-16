import React, { createContext, useContext, useEffect, useState } from 'react'
import { collection, doc, updateDoc, setDoc, getDocs } from '@firebase/firestore'
import { db } from './firebase-config'
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext({
 
  usertype:null,
  currentuser:null,
   login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  Updateuser: () => Promise,
   resetPassword: () => Promise,
   Edituser: () => Promise,
})
export const useAuth = () => useContext(AuthContext)

export function AuthContextProvider({ children }) {
  const navigate= useNavigate();
  var isuser=false;
  var isauth=false;
  var usertype="";
 const [userstat, setuserstat] = useState([])
 const [currentuser, setcurrentuser] = useState(null)
 const [isUpdate, setisUpdate] = useState(false)
 const collref=collection(db,"users");



  const login = async (email,password)=>  {
    isauth=false;
    fetchdata();
   
    const snapshot = await getDocs(collref);
    console.log("usedd loginn");
    setuserstat(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
 await  userstat.map(stat=> {

     if(stat.email === email && stat.password === password) {
       isauth=true; 
       usertype=stat.role  
      setcurrentuser(stat.email)
     }
  })
  if(isauth){
    toast.success("Loggedin successfully")
  if(usertype === 'user' )   navigate('/userpage')
  else  navigate('/adminpage')
  }
  else{
    toast.error("Login failed! Check your details")
  } 
  }

  const register = async (username,phone,email,password,role,creat) => {

  isuser=false;
  const snapshot = await getDocs(collref);
  setuserstat(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
  console.log("usedd register");
 await  userstat.map(stat=> {
   
     if(stat.email === email) isuser=true;
     
  })
 
    if(isuser) {
      toast.error("User registered already")
      
    }
    else{
      
    try {
      await setDoc(doc(collref, email), { username:username,phone:phone, email: email, password:password ,role:role ,creator:creat}, { merge: true })
      toast.success("User created successfully")
      if(creat === 'none')  navigate('/login')
      else navigate('/adminpage')
     
      
    }
    catch (error) {
      toast.error("Oops! something went wrong")
    }
  }
  }
  const Updateuser  = async (name, phone) => {
    const collref = collection(db, "users");
    await updateDoc(doc(collref, currentuser), {username:name,phone:phone})
    toast.success("Updated successfully")
    navigate('/userpage')

  }

  const Edituser  = async (name, phone,usertype) => {
    const collref = collection(db, "users");
    console.log(usertype);
    await updateDoc(doc(collref, currentuser), {username:name,phone:phone,role:usertype})
    toast.success("Updated successfully")
   // navigate('/adminpage')
  }
  const logout = async () => {
  setcurrentuser("");
  toast.success("Loggedout successfully")
  }

  const resetPassword  = async (email, newpassword) => {
    const collref = collection(db, "users");
    await updateDoc(doc(collref, email), {password:newpassword })
    navigate('/login')
  }

  
  const fetchdata = () => {
    setisUpdate(true);
   
  }
  

 const value = {

   usertype,
  currentuser,
     login,
     logout,
    register,
    Updateuser,
     resetPassword,
    Edituser,
  }
  return( <AuthContext.Provider value={value}>{children}<ToastContainer position="bottom-right" /></AuthContext.Provider>)
}