import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="flex justify-evenly items-center h-16 text-white relative font-mono z-0 mt-2 hover:text-steal-700">
        <Link to="/home">
          <span className="text-white ">Accueil</span>
        </Link>

        <Link to="/userlist">
          <span>Mon profil</span>
        </Link>

        <Link to="/">
          <span>Se connecter</span>
        </Link>
        <Link to="/inscription">
          <span>S'inscrire</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
