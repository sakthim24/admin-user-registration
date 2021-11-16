import React from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom'

import Forgotpassword from '../pages/forgotpassword'
import Login from '../pages/login'
import Register from '../pages/register'
import Resetpassword from '../pages/resetpassoword'
import Userpage from '../pages/userpage'
import {AuthContextProvider} from '../userauthcontext';
import Update from '../pages/update'
import Adminpage from '../admin/adminpage'
import Myprofile from '../admin/myprofile'
import Viewusers from '../admin/viewusers'
import Viewadmin from '../admin/viewadmin'
import Createuser from '../admin/createuser'
import Myusers from '../admin/myusers'
import Edit from '../admin/edit'

export default function AppRouter(props) {
  return (
    <AuthContextProvider>
     
        <Routes>
        <Route exact path='/' element={<Login/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/forgotpassword' element={<Forgotpassword/>} />
          <Route  path='/resetpassword' element={<Resetpassword/>} />
          <Route  path='/userpage' element={<Userpage/>} />
          <Route  path='/adminpage' element={<Adminpage/>} />   
          <Route path='/update' element={<Update/>}  ></Route>    
          <Route path='/profile' element={<Myprofile/>}  ></Route>    
          <Route path='/viewusers' element={<Viewusers/>}  ></Route>    
          <Route path='/viewadmins' element={<Viewadmin/>}  ></Route>  
          <Route path='/createuser' element={<Createuser/>}  ></Route>  
          <Route path='/myusers' element={<Myusers/>}  ></Route>  
          <Route path='/edituser' element={<Edit/>}  ></Route> 
        </Routes>
    
      </AuthContextProvider>
  )
}
