import '../Asserts/Cssfiles/Footer.css'
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom'
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>Welcome to Your Personal Store, your one-stop destination for unique and thoughtful gifts. Explore our curated collection designed to make every occasion special.</p>
                </div>
                <div class="footer-section quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <li>Shop</li>
                        <li>Occasions</li>
                        <li>Contact Us</li>
                        
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@yourgiftshop.com</p>
                    <p>Phone: 7880563295</p>
                    <p>Address: Coimbatore</p>
                    <div className='iconsf'>
                        <Instagram />  <Facebook />   <Youtube />   <Twitter />
                        </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Your Personal Store. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer
