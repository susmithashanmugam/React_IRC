import '../CSSFILES/home.css'
import { UserPlus } from 'lucide-react';
import { Mic2 } from 'lucide-react';
import { Home } from 'lucide-react';
import { AudioLines } from 'lucide-react';
import { Music } from 'lucide-react';
function Home1() {
    return (
        <>

            <div className="header">
                <p className="icon">
                    <b>PLAY</b>  CLOUD
                </p>
                <p>
                    Artists
                </p>
                <p>
                    New Releases
                </p>
                <p>
                    Shuffle play
                </p>
                <Mic2 />
                <UserPlus />
            </div>
            <div className="sideNav">
                <b>
                    Browse Music </b>

                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Home /> home
                    <span style={{ marginLeft: '5px' }}><AudioLines /></span>
                </div>

            </div>
        </>
    )
}
export default Home1