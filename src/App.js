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
import Stock from "./pages/Stock";
import Avis from "./pages/Avis";
import Boissons from "./pages/Boissons";
import Suppléments from "./pages/Suppléments";
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
            <Route path="/Home" component={Home} />
            <Route path="/Plat" component={Plat} />
            <Route path="/Serveur" component={Serveur} />
            <Route path="/Cuisine" component={Cuisine} />
            <Route path="/Sécurité" component={Sécurité} />
            <Route path="/Factures" component={Factures} />
            <Route path="/Recettes" component={Recettes} />
            <Route path="/Stock" component={Stock} />
            <Route path="/Avis" component={Avis} />
            <Route path="/Boissons" component={Boissons} />
            <Route path="/Fournisseurs" component={Fournisseurs} />
            <Route path="/Suppléments" component={Suppléments} />
            <Route path="/Paramétres" component={Paramétres} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
