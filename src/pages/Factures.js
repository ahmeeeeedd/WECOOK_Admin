import React, { useState } from "react";

function Factures() {
  const [formData, setFormData] = useState({
    numeroFacture: "",
    montant: "",
    estPayant: false,
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.numeroFacture && formData.montant !== "") {
      setTableData([...tableData, formData]);
      setFormData({
        numeroFacture: "",
        montant: "",
        estPayant: false,
      });
    } else {
      alert("Veuillez remplir tous les champs du formulaire");
    }
  };

  return (
    <div className="container">
      <h2>Formulaire Factures</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Numéro de Facture:
          <input
            type="text"
            name="numeroFacture"
            value={formData.numeroFacture}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Montant:
          <input
            type="number"
            name="montant"
            value={formData.montant}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Payant:
          <input
            type="checkbox"
            name="estPayant"
            checked={formData.estPayant}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Tableau des Factures</h2>
      <table>
        <thead>
          <tr>
            <th>Numéro de Facture</th>
            <th>Montant</th>
            <th>Payant</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.numeroFacture}</td>
              <td>{item.montant}</td>
              <td>{item.estPayant ? "Oui" : "Non"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Factures;
