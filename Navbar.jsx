import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
         <div id="navbar" >
          <div>
           <button id="btn" > <NavLink to="/" >CANDES CLIENT</NavLink></button>
            </div>  
             <div >     
               <button id="btn"  ><NavLink  activeClassName="active_class" to="/cards" > GET USER </NavLink></button>
               </div> 
          
               </div>
           
        
       
        
        </>
    );

};

export default Navbar;