import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Suppléments = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ingredient: "",
    totalPurchase: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      ingredient: "",
      totalPurchase: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Prénom fournisseur
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Nom fournisseur
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredient" className="form-label">
                Ingrédient
              </label>
              <input
                type="text"
                className="form-control"
                id="ingredient"
                name="ingredient"
                value={formData.ingredient}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalPurchase" className="form-label">
                Total d'achat (Prix)
              </label>
              <input
                type="text"
                className="form-control"
                id="totalPurchase"
                name="totalPurchase"
                value={formData.totalPurchase}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Ajouter au tableau
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Récapitulatif</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Ingrédient</th>
                <th>Total d'achat</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.ingredient}</td>
                  <td>{data.totalPurchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Suppléments;
