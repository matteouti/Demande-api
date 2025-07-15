// src/models/offreModel.js
const db = require("../config/db");

const createOffre = async (offre) => {
  const [result] = await db.execute(
    "INSERT INTO offre (demandeId, taux, mensualite, duree) VALUES (?, ?, ?, ?)",
    [offre.demandeId, offre.taux, offre.mensualite, offre.duree]
  );
  return result.insertId;
};

const getOffreById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM offre WHERE offreId = ?", [
    id,
  ]);
  return rows[0];
};

module.exports = { createOffre, getOffreById };
