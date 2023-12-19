import '../Asserts/Cssfiles/Footer.css'
import { Link } from 'react-router-dom'
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
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Your Personal Store. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer
