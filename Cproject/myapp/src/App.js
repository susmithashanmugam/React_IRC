import Header from './Components/Header'
import Home from './Components/Home'
import SignIn from './Components/SignIn';
import LogIn from './Components/Login';
import VNav from './Components/VNav';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        {/* <Header/> */}
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LogIn />} />
        </Routes>
        {/* <VNav/> */}
      </>
      );
}

      export default App;
