import '../global.css';


function Navbar() {
    
    const state = 'false'
    
    if(state === 'false') return (
        <div className='nav-wrap'>
          <button className='nav-header-btn' name='navbar' > </button>
            <button className='nav-header-btn' name='navbar' > </button>
            <button className='nav-header-btn' name='navbar' > </button>
            <button className='nav-header-btn' name='navbar'></button>
        </div>
    )   
}



export default Navbar;