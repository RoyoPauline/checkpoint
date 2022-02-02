import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
           <nav className="flex justify-evenly items-center h-16 text-white relative font-mono z-0 mt-2">
               <Link to='/'>
                   <span className="text-white">
                       Accueil
                   </span>
               </Link>
               <Link to='/profile'>
                   <span>
                       Mon profil
                   </span>
               </Link>
               <Link to='/userlist'>
                   <span>
                       Mes coups de coeur
                   </span>
               </Link>
           </nav>
        </div>
    );
};

export default Header;