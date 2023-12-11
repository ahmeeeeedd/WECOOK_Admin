import React, { useState } from "react";
function Plat() {
  const [formData, setFormData] = useState({
    nomPlat: "",
    nombrePersonnes: "",
    prix: "",
    description: "",
  });

  const [tableData, setTableData] = useState([]);
  const [platsSelectionnes, setPlatsSelectionnes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nomPlat &&
      formData.nombrePersonnes &&
      formData.prix &&
      formData.description !== ""
    ) {
      setTableData([...tableData, formData]);
      setFormData({
        nomPlat: "",
        nombrePersonnes: "",
        prix: "",
        description: "",
      });
    } else {
      alert("Veuillez remplir tous les champs du formulaire");
    }
  };

  const handleAfficherAuClient = (plat) => {
    setPlatsSelectionnes([...platsSelectionnes, plat]);
  };

  return (
    <div className="container">
      <h2>Formulaire Plat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du Plat:
          <input
            type="text"
            name="nomPlat"
            value={formData.nomPlat}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombre de Personnes:
          <input
            type="text"
            name="nombrePersonnes"
            value={formData.nombrePersonnes}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prix:
          <input
            type="text"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Tableau des Plats</h2>
      <table>
        <thead>
          <tr>
            <th>Nom du Plat</th>
            <th>Nombre de Personnes</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.nomPlat}</td>
              <td>{item.nombrePersonnes}</td>
              <td>{item.prix}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleAfficherAuClient(item)}>
                  Afficher au client
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Plats Affichés au Client</h2>
      <ul>
        {platsSelectionnes.map((plat, index) => (
          <li key={index}>
            {plat.nomPlat} - {plat.prix} - {plat.nombrePersonnes} personnes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plat;
