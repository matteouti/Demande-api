// src/models/evaluationModel.js
const db = require("../config/db");

const createEvaluation = async (data) => {
  const [result] = await db.execute(
    "INSERT INTO criteres_evaluation (demandeId, score, resultat) VALUES (?, ?, ?)",
    [data.demandeId, data.score, data.resultat]
  );
  return result.insertId;
};

const getEvaluationById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM criteres_evaluation WHERE id = ?",
    [id]
  );
  return rows[0];
};

module.exports = { createEvaluation, getEvaluationById };
