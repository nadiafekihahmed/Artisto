import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css';

function NavBar() {

  const [button, setButton] = useState(true)
  
  const showButton=()=>{
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(()=>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='img-logo'>
                Artisto  <i className='fab fa-typo3' />
                {/* <i class="fa-solid fa-palette"></i> */}
                {/* <img
                src='/images/logoArtistoo-removebg-preview.png'
                alt='artisto'
                className='img-logo' 

                
                /> */}
            
            </Link>

            <div className='menu-icon'>

            </div>
            {/* {button && <Button buttonStyle='btn--outline' >Home</Button>} */}
        </div>   
     </nav> 
    </>
  )
}

export default NavBar