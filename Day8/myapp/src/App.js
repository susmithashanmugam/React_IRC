import React from "react";
import {Routes,Route} from 'react-router-dom'
import Users from "./Pages/Users";
import Addusers from "./Pages/Adduser";
import Editusers from "./Pages/Edituser";
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Users/>}/> 
    <Route path='/add' element={<Addusers/>}/> 
    <Route path='/edit/:id' element={<Editusers/>}/>
   </Routes>
   </>
  );
}

export default App;
