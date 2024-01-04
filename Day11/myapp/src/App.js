import React from 'react'
import './Asserts/Cssfiles/Style.css'
import NavBar from './Components/Navbar'
import WithLoading from './Components/WithLoading'
import MyComponent from './Components/MyComponent'


const WrappedComponentWithLoading = WithLoading(MyComponent)
const App = () => {


  return (
    <>
    <NavBar/>
    {/* <WrappedComponentWithLoading/> */}
    </>
  )
}

export default App