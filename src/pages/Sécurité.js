import React, { useState } from "react";

function Securite() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    dateRecrutement: "",
    heureDebut: "",
    heureFin: "",
    salaire: "",
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

    if (
      formData.nom &&
      formData.prenom &&
      formData.email &&
      formData.tel &&
      formData.dateRecrutement &&
      formData.heureDebut &&
      formData.heureFin &&
      formData.salaire !== ""
    ) {
      setTableData([...tableData, formData]);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateRecrutement: "",
        heureDebut: "",
        heureFin: "",
        salaire: "",
      });
    } else {
      alert("Veuillez remplir tous les champs du formulaire");
    }
  };

  return (
    <div className="container">
      <h2>Formulaire Sécurité</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Téléphone:
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date de Recrutement:
          <input
            type="date"
            name="dateRecrutement"
            value={formData.dateRecrutement}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Heure de début:
          <input
            type="time"
            name="heureDebut"
            value={formData.heureDebut}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Heure de fin:
          <input
            type="time"
            name="heureFin"
            value={formData.heureFin}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Salaire:
          <input
            type="text"
            name="salaire"
            value={formData.salaire}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Tableau Sécurité</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Date de Recrutement</th>
            <th>Heure de début</th>
            <th>Heure de fin</th>
            <th>Salaire</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.email}</td>
              <td>{item.tel}</td>
              <td>{item.dateRecrutement}</td>
              <td>{item.heureDebut}</td>
              <td>{item.heureFin}</td>
              <td>{item.salaire}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Securite;
