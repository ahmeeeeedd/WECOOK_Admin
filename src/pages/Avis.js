import React from "react";

function Avis() {
  const avisList = [
    {
      nom: "ahmed",
      prenom: "hnana",
      service: 4,
      ambiance: 5,
      plat: 3,
    },
    {
      nom: "houss",
      prenom: "sahnoun",
      service: 2,
      ambiance: 1,
      plat: 1,
    },
  ];

  return (
    <div>
      <h2>Avis</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Service</th>
            <th>Ambiance</th>
            <th>Plat</th>
          </tr>
        </thead>
        <tbody>
          {avisList.map((avis, index) => (
            <tr key={index}>
              <td>{avis.nom}</td>
              <td>{avis.prenom}</td>
              <td>{avis.service}</td>
              <td>{avis.ambiance}</td>
              <td>{avis.plat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Avis;
