import Frames from './Pages/Frames';
import Caricature from './Pages/Caricature';
import Home from './Components/Home'
import HomeD from './Pages/homedecor';
import Texture from './Pages/Texture';
import LogIn from './Components/Login';
import Mugs from './Pages/Mugs';
import Resign from './Pages/resign';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        {/* <Header/> */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/frames' element={<Frames/>}/>
        <Route path='/cari' element={<Caricature/>}/>
        <Route path='/homed' element={<HomeD/>}/>
        <Route path='/texture' element={<Texture/>}/>
        <Route path='/mugs' element={<Mugs/>}/>
        <Route path='/resign' element={<Resign/>}/>
        </Routes>
        {/* <VNav/> */}
      </>
      );
}

      export default App;
