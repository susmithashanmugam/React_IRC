import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Nav from './Components/nav'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </>
  );
}

export default App;
