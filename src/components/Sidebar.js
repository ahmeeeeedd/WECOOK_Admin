import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../pictures/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu">
        <Link to="/Home" className="menu-item">
          Accueil
        </Link>
        <Link to="/Plat" className="menu-item">
          Ajouter Plat
        </Link>
        <Link to="/Serveur" className="menu-item">
          Staff Serveurs
        </Link>
        <Link to="/Cuisine" className="menu-item">
          Staff Cuisine
        </Link>
        <Link to="/Sécurité" className="menu-item">
          Staff Sécurité
        </Link>
        <Link to="/Factures" className="menu-item">
          Factures
        </Link>
        <Link to="/Recettes" className="menu-item">
          Recettes proposées
        </Link>
        <Link to="/Stock" className="menu-item">
          Stock
        </Link>
        <Link to="/Avis" className="menu-item">
          Avis client
        </Link>
        <Link to="/Boissons" className="menu-item">
          Boissons
        </Link>
        <Link to="/Fournisseurs" className="menu-item">
          Fournisseurs
        </Link>
        <Link to="/Supplément" className="menu-item">
          Suppléments
        </Link>
        <Link to="/Paramétres" className="menu-item">
          Paramètres Compte
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
