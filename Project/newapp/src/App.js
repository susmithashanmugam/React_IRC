import Header from './Components/Header'
import Home from './Components/Home'
import Foot from './Components/Footer'
import SignIn from './Components/Signin'
import {Route,Routes} from 'react-router-dom'
import Register from './Components/Register'
function App() {
  return (

    <div>
      
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/foot' element = {<Foot/>}/>
        <Route path = '/SignIn' element = {<SignIn/>}/>
        <Route path = '/Register' element = {<Register/>}/>
        <Route path = '/Foot' element = {<Foot/>}/>
      </Routes>
     {/* <Foot/>  */}
    </div>
  ) 
}
export default App;

