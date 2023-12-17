
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HorizontalNavbar from './Components/horizontal';
import VerticalNavbar from './Components/vertical';
import React from 'react';
import Navbar from './Components/Classcomponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
      <h2>Home Page Content</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Page Content</h2>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact Page Content</h2>
    </div>
  );
};

const Address = () => {
  return (
    <div>
      <h2>Address Page Content</h2>
    </div>
  );
};

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <Navbar/>
    <Router>
      <div>
        <HorizontalNavbar />
        <Route path="/" exact component={Home} />
        <Route  path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/address" ecomponent={Address} />
        <VerticalNavbar />
      </div>
    </Router>
    </div>
  );
}
export default App



