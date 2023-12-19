import '../Asserts/Cssfiles/home.css'
import '../Asserts/Cssfiles/Cards.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function Home() {
    return (
        <>
            <Header />
            
            <div class="product-grid">
                <div class="product">
                    <Link to='frames'>
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/20482270/r/il/f516f5/4127587895/il_794xN.4127587895_e63o.jpg" alt="Product Image 1" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2>Personalised Frame</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://gulbonda.com/wp-content/uploads/2021/08/SET-OF-5-scaled-600x600.jpg" alt="Product Image 5" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Caricature</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/d4/86/96/d486967c533e1d31565c65eddfda9d6e.jpg" alt="Product Image 3" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Home Decor</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/37148405/r/il/ae60e8/4972074518/il_794xN.4972074518_iifl.jpg" alt="Product Image 4" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Texture Art</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/b9/48/20/b948202965c652fa97a5c0ed3c38619c.jpg" alt="Product Image 2" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2> Mugs </h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHFIqr0hQsPt2sKP5Adg395fZpKJeGNZJ2ToJFbD0s-HtyokI8Crf5HI8ERYRNHL9Byo&usqp=CAU" alt="Product Image 6" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Resign Art</h2>
                </div>
            </div>
            {/* <hr /> */}
            {/* Cards  */}
            <div class="wrapper">
                <h1>Hottest Selling Products!</h1>
                <div class="cols">
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.etsystatic.com/45939599/r/il/4bd2d5/5557719581/il_794xN.5557719581_m5rd.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Name Necklace, 24k Gold Custom Necklace Jewelry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/1d/9d/1c/1d9d1c17794c399e04acc2dd13b63358.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Dream Catcher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/91/b9/fb/91b9fb68f63b35420c9262cda2e057a4.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Resign Pedants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://leafyaffair.com/cdn/shop/files/Product18_4_db762614-9e47-4c75-aca8-68ccf51cdb35_720x.jpg?v=1685963250)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Resign Customised Earrings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </>
    )
}
export default Home