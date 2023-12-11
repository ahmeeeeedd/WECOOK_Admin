import React, { useState } from "react";
import "./Boissons.css";
function Boissons() {
  const [formData, setFormData] = useState({
    type: "",
    quantite: "",
    disponibilite: "Disponible",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.type && formData.quantite) {
      setTableData([...tableData, formData]);
      setFormData({
        type: "",
        quantite: "",
        disponibilite: "Disponible",
      });
    } else {
      alert("Veuillez remplir tous les champs du formulaire");
    }
  };

  return (
    <div>
      <h2>Formulaire Boissons</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quantité:
          <input
            type="text"
            name="quantite"
            value={formData.quantite}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Disponibilité:
          <select
            name="disponibilite"
            value={formData.disponibilite}
            onChange={handleChange}
          >
            <option value="Disponible">Disponible</option>
            <option value="Épuisé">Épuisé</option>
          </select>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Tableau des Boissons</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Quantité</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.quantite}</td>
              <td>{item.disponibilite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Boissons;
