import React, { useState } from "react";
//import "./Fournisseurs.css"; // Assurez-vous d'importer votre fichier de style

const Fournisseurs = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    ingredient: "",
    montantAchat: "",
  });

  const [fournisseursList, setFournisseursList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFournisseursList((prevList) => [...prevList, formData]);
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      tel: "",
      ingredient: "",
      montantAchat: "",
    });
  };

  return (
    <div className="fournisseurs-page">
      <h2>Ajouter Fournisseur</h2>
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
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Téléphone:
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
        </label>
        <label>
          Ingrédient:
          <input
            type="text"
            name="ingredient"
            value={formData.ingredient}
            onChange={handleChange}
          />
        </label>
        <label>
          Montant d'achat:
          <input
            type="text"
            name="montantAchat"
            value={formData.montantAchat}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des Fournisseurs</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ingrédient</th>
            <th>Montant d'achat</th>
          </tr>
        </thead>
        <tbody>
          {fournisseursList.map((fournisseur, index) => (
            <tr key={index}>
              <td>{fournisseur.nom}</td>
              <td>{fournisseur.prenom}</td>
              <td>{fournisseur.email}</td>
              <td>{fournisseur.tel}</td>
              <td>{fournisseur.ingredient}</td>
              <td>{fournisseur.montantAchat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fournisseurs;
