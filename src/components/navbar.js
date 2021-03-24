import React, {useState} from 'react';
import {Link } from 'react-router-dom';
 
function Navbar(){
  const [click, setClick] = useState(false);
  return(
      <>
         <nav className="navbar">

             <div className="navbarContainer">
               <Link to="" className="navbar-logo">

                   Webiste <i className="fa fa-recycle"></i>
               </Link>
               <div class="menu-icon">
                 <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
               </div>
             </div>
         </nav>
      </>
  )
}

export default Navbar


