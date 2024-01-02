import '../Asserts/Cssfiles/Pagesc/SideNav.css'
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
function SNav(){
    return(
 
    <nav className="vertical-navbar">
        <Link to='/'>
        <div class="iconback">
        <ArrowLeft />
        </div>
        </Link>
        <ul>
        <Link to='frames'>
      <h2>Personalised Frame</h2>
      </Link>
      <Link to='/cari'>
      <h2>Caricature</h2>
      </Link>
      <Link to='/homed'>
      <h2>Home Decor</h2>
      </Link>
      <Link to='/texture'>
      <h2>Texture Art</h2>
      </Link>
      <Link to='/mugs'>
      <h2>Mugs</h2>
      </Link>
      <Link to='/resign'>
      <h2>Resin Art</h2>
      </Link>
      </ul>
    </nav>

    )
}
export default SNav