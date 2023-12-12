import '../Asserts/cssfiles/Home.css'
import img1 from '../Asserts/images/logo.png'
function Home()
{
    return(
        <>
        <nav className="nav">
            <ul>
                <li>
                    Crafts
                </li>
                <li>
                    Photoframe
                </li>
                <li>
                   Collectibles
                </li>
                <li>
                    Portraits
                </li>
                <li>
                    Crafts Supplies
                </li>
                <li>
                    Customizables
                </li>
            </ul>
        </nav>
       
        <div class="header1">
        
        <p>Find things you'll love. </p>
    </div>
    <hr></hr>
    <div class="product-grid">
    <div class="product">
        <div class="zoom">
        <img src="https://i.etsystatic.com/20482270/r/il/f516f5/4127587895/il_794xN.4127587895_e63o.jpg" alt="Product Image 1" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Personalised Gifts</h2>
    </div>
    <div class="product">
    <div class="zoom">
        <img src="https://i.etsystatic.com/42922987/r/il/e18547/4859216360/il_794xN.4859216360_hc3x.jpg" alt="Product Image 2" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Canvas Frame</h2>
    </div>
    <div class="product">
    <div class="zoom">
        <img src="https://i.etsystatic.com/10090864/r/il/17268a/4961056818/il_794xN.4961056818_kch2.jpg" alt="Product Image 3" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Home Decor</h2>
    </div>
    <div class="product">
    <div class="zoom">
        <img src="https://i.etsystatic.com/36868135/r/il/976e69/5035293378/il_794xN.5035293378_c8t7.jpg" alt="Product Image 4" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Texture Art</h2>
    </div>
    <div class="product">
    <div class="zoom">
        <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81HG+JFcW5L._AC_SX679_.jpg" alt="Product Image 5" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Art Supplies</h2>
    </div>
    <div class="product">
    <div class="zoom">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHFIqr0hQsPt2sKP5Adg395fZpKJeGNZJ2ToJFbD0s-HtyokI8Crf5HI8ERYRNHL9Byo&usqp=CAU" alt="Product Image 6" style={{height:'180px',width:'170px'}}/>
        </div>
        <h2>Resign Art</h2>
    </div>
</div>
        <div class="header">
        <h2>Popular gifts right now!</h2>
        </div>
<div class="gift-grid">
    <div class="gift-category">
        <ul>
            <li>
               
                <img src="https://i.etsystatic.com/27698509/r/il/4078b9/5093365015/il_794xN.5093365015_t8cf.jpg"alt="image" style={{height:'200px', width:'280px'}}></img>
                <h3>Embroidery Felt Bookmarks</h3>
                <p>★★★★★ (5,624)</p>
            </li>
            <li>
               
                <img src="https://i.etsystatic.com/19505509/r/il/7a586f/5337363041/il_794xN.5337363041_t1uz.jpg"alt="image" style={{height:'200px', width:'280px'}}></img>
                <h3>Personalized Book Stamp</h3>
                <p>★★★★★ (2,724)</p>
            </li>
            <li>
                <img src="https://i.etsystatic.com/25947065/r/il/88a700/5161685849/il_794xN.5161685849_kd4e.jpg"alt="image" style={{height:'200px', width:'280px'}}></img>
                <h3>Engraved Birth Flower</h3>
                <p>★★★★ (7,894)</p>
            </li>
            <li>
                <img src="https://i.etsystatic.com/34379934/r/il/628644/4796937795/il_794xN.4796937795_qnr6.jpg"alt="image" style={{height:'200px', width:'280px'}}></img>
                <h3> Personalsed Name Necklace</h3>
                <p>★★★★★ (1,824)</p>
            </li>
        </ul>
        </div>
        </div>
        </>
    )
}
export default Home