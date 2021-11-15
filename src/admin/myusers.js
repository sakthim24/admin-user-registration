import {React,useState,useEffect} from 'react'
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';
import { collection, doc,deleteDoc, getDocs } from '@firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function  Myusers() {
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


      const deleteAccount = async (id) =>{
    
        await deleteDoc(doc(db,"users",id)).then(() => {
          toast.success("User deleted successfully")
           setisUpdate(true);
      })
      }
    return (
        <Layout>  
            <ToastContainer position="bottom-right" />
        <div className=" h-5/6 w-11/12 md:ml-16 bg-transparent text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 w-11/12 md:w-8/12  mx-auto text-center">
          <div className="md:relative mt-4 bg-purple-500 shadow-lg w-100 sm:rounded-lg text-left">
          
            <div className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-medium md:font-extrabold text-2xl text-white">My users and admins</h1>    
            <div className="block w-full overflow-y-auto overflow-x-auto ">
            <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr className="bg-purple-800">
                            <th className="font-bold text-base px-6 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                                Email
                            </th>
                            <th className="font-bold text-base px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xsuppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                                Username
                            </th>
                            <th className="font-bold text-base px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                               Phone
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                           Role
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                           Creator
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid  py-1 text-sm md:text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center">
                           Action
                            </th>
                        </tr>
                    </thead>
           {  userstat.map((stat) => {
                if (stat.creator === currentuser) {
               return(
                <tbody key={stat.id}>
                <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold ">
                    {stat.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold">
                    {stat.username}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold">
                    {stat.phone}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold">
                    {stat.role}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold">
                   {stat.creator}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-bold">
                    <button className="text-black bg-white border border-black font-bold" onClick={() => deleteAccount(stat.id)}>Delete</button>
                    </td>
                </tr>
            </tbody>
          
          ) }}
           
           )
          }
              </table>
           </div>          
        </div> 
        </div>
        </div>
        </div>
        </Layout>
    )
}
