// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Plat from "./pages/Plat";
import Serveur from "./pages/Serveur";
import Cuisine from "./pages/Cuisine";
import Sécurité from "./pages/Sécurité";
import Factures from "./pages/Factures";
import Recettes from "./pages/Recettes";
import Avis from "./pages/Avis";
import Boissons from "./pages/Boissons";
import Paramétres from "./pages/Paramétres";
import Home from "./pages/Home";
import Fournisseurs from "./pages/Fournisseurs";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Plat" element={<Plat />} />
            <Route path="/Serveur" element={<Serveur />} />
            <Route path="/Cuisine" element={<Cuisine />} />
            <Route path="/Sécurité" element={<Sécurité />} />
            <Route path="/Factures" element={<Factures />} />
            <Route path="/Recettes" element={<Recettes />} />
            <Route path="/Avis" element={<Avis />} />
            <Route path="/Boissons" element={<Boissons />} />
            <Route path="/Fournisseurs" element={<Fournisseurs />} />
            <Route path="/Paramétres" element={<Paramétres />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
