// src/models/contratModel.js
const db = require("../config/db");

const createContrat = async (contrat) => {
  const [result] = await db.execute(
    "INSERT INTO contrat (offreId, date_signature, montant_total) VALUES (?, ?, ?)",
    [contrat.offreId, contrat.date_signature, contrat.montant_total]
  );
  return result.insertId;
};

const getContratById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM contrat WHERE contratId = ?", [
    id,
  ]);
  return rows[0];
};

module.exports = { createContrat, getContratById };
