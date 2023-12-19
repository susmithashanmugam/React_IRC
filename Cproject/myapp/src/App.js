import Frames from './Pages/Frames';
import Home from './Components/Home'
import SignIn from './Components/SignIn';
import LogIn from './Components/Login';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        {/* <Header/> */}
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/frames' element={<Frames/>}/>
        </Routes>
        {/* <VNav/> */}
      </>
      );
}

      export default App;
