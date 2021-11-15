import { React, useState } from 'react'
import { Layout } from '../components/layout';
import { useAuth } from '../userauthcontext';

export default function Createuser() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [Phone, setPhone] = useState("")
    const [userType, setuserType] = useState("user")
    const { register,currentuser } = useAuth()
    const [isNull, setisNull] = useState(false)
    
  
    const createuser = async (e) => {
      e.preventDefault()
      const creator=currentuser;
      if (!Email || !Password || !Username || !Phone) setisNull(true);
  
      else {
        setisNull(false);
       
        await register(Username, Phone, Email, Password, userType, creator)
        console.log("Sent inn")
      }
    }
    return (
      <Layout>
         
        <div className=" h-5/6 w-11/12 md:ml-16 bg-transparent text-white antialiased px-4 py-2 md:py-6 flex flex-col justify-center ">
        <div className="relative py-10 w-10/12 md:w-4/12  mx-auto text-center">
          <div className="bg-purple-600 md:relative mt-4 bg-white shadow-lg w-100 sm:rounded-lg text-left">
          
            <form className="py-1 md:py-6 px-8">
              <h1 className="text-center mb-3 md:mb-4 block font-extrabold text-2xl text-white">Create user</h1>
              <div className="mb-2 md:mb-4">
              <select className="mb-1 md:mb-2 text-black text-sm font-bold bg-white border-2 border-black rounded" onChange={async e => {
                e.preventDefault()
                await setuserType(e.target.value)
                 }} >
              <option  value="user">user</option>
                <option value="admin">Admin</option>
              </select>
                </div>
              <div className="mb-2 md:mb-4">
                <label className="block  text-sm font-bold mb-2">
                  Username {userType}
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs  leading-tight focus:outline-none focus:shadow-outline"
                  id=" Username "
                  type=" Username"
                  placeholder="Enter username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                   />
              </div>
             
              <div className="mb-2 md:mb-4">
                <label className="blocktext-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="email "
                  type="email"
                  placeholder="Enter valid email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
              </div>
              <div className="mb-2 md:mb-4">
                <label className="block  text-sm font-bold mb-2">
                Phonenumber
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id=" phone "
                  type="number"
                  placeholder="Enter phonenumber"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                   />
              </div>
              <div className="mb-2 md:mb-4">
                <label className="block  text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none h-7 md:h-10 md:rounded w-full py-1 px-3 text-xs text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password (min 6 characters)"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }} />
                {isNull && <span className="text-red-600 text-sm">*All fields are required</span>}
              </div>
              <div className="flex mt-3 mb-3 md:mt-0 items-center justify-center">
                <button
                 className="bg-white hover:bg-purple-500 text-black h-8 md:h-10 text-xs md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={createuser}> create
                </button>
              </div>
            </form>
          </div></div>
      </div></Layout>
    )
}
