import '../Asserts/Cssfiles/Pagesc/Frame.css'
import SNav from './sidenav'
function Mugs()
{
    return(
        <>
        <SNav/>
        <div class ="card-container1">
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/564x/64/30/e8/6430e894ce3737f6042784e3a0fd457a.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '100%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Hogwarts</b></span>
          <span class="price">₹ 550</span>
        </div>
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/236x/96/f0/e6/96f0e6a3efe86e3824ea02c14967d08b.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '89%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Animals</b></span>
          <span class="price">₹ 400</span>
        </div>
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/564x/a0/ba/5a/a0ba5ae63169c250e7a15c0c85cb1469.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '100%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Mandalas</b></span>
          <span class="price">$100</span>
        </div>
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/564x/e9/8d/90/e98d904a58a794128118781eef6e6bb6.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '100%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Cat</b></span>
          <span class="price">$100</span>
        </div>
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/564x/a6/ba/ac/a6baac127262443620efd83204a65b51.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '100%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Groot</b></span>
          <span class="price">$100</span>
        </div>
        <div class="card">
        <div class="image"><span class="text">
        <img src={'https://i.pinimg.com/564x/0e/f6/ac/0ef6acd41c0fe26cd95429b5c7067c2d.jpg'} alt="Digital Portrait" style={{ width:'12vw', height: '100%', objectFit: 'cover' }}/></span></div>
          <span class="title"><b>Minion</b></span>
          <span class="price">$100</span>
        </div>
        
        </div>
        </>
    )
}
export default Mugs