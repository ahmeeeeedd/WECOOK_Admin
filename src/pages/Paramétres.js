import React, { useState } from "react";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("Paramètres");
  const [firstName, setFirstName] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSave = () => {
    const newData = {
      category: "légumes", // You can set a default value for the category
      product: firstName, // Use the firstName as the product for this example
      allergy: "", // You may set a default value for allergy or handle it differently
    };

    setTableData((prevData) => [...prevData, newData]);

    setFirstName("");
  };

  return (
    <div className="container">
      <h1>⚙️ Paramètres du Compte</h1>
      <nav>
        <ul>
          <li onClick={() => handleTabClick("Paramètres")}>⚙️Paramètres</li>
          <li onClick={() => handleTabClick("Sécurité")}>🔒Sécurité</li>
          <li onClick={() => handleTabClick("Notifications")}>
            ⚠️Notifications
          </li>
        </ul>
      </nav>

      <div className="content">
        <h2>{activeTab}</h2>
        {activeTab === "Paramètres" && (
          <div>
            <p>
              Nouveau Prenom:{" "}
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </p>
            <p>
              Nouveau Nom: <input type="text" />
            </p>
            <p>
              Nouvelle Adresse E-mail: <input type="text" />
            </p>
            <button onClick={handleSave}>Enregistrer</button>
          </div>
        )}
        {activeTab === "Sécurité" && (
          <div>
            <p>
              Changer le mot de passe: <input type="password" />
            </p>
            <p>
              Activer l'authentification à deux facteurs:{" "}
              <input type="checkbox" />
            </p>
            <button>Enregistrer</button>
          </div>
        )}
        {activeTab === "Notifications" && (
          <div>
            <p>
              Activer les notifications par e-mail: <input type="checkbox" />
            </p>
            <p>
              Configurer les préférences de notification: <textarea></textarea>
            </p>
            <button>Enregistrer</button>
          </div>
        )}

        {tableData.length > 0 && (
          <div>
            <h3>Tableau des Produits non autorisés</h3>
            <table>
              <thead>
                <tr>
                  <th>Catégorie</th>
                  <th>Nom du Produit</th>
                  <th>Allergie/Maladie</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.category}</td>
                    <td>{entry.product}</td>
                    <td>{entry.allergy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
