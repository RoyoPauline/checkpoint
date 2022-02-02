import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
           <nav>
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