import StateEx from "./Components/StateEx"
import Temp from './Components/TempComp'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
   {/*<Link to='/'></Link>*/}
   {/*<Link to='/about'></Link>*/}
   {/* <Temp/> */}

    </>
  )
}

export default App
