const db = require("../config/db");

const createDemande = async (demande) => {
  console.log("demande reçu:", demande); // Ajoute ce log
  if (!demande || !demande.client_nom || !demande.montant || !demande.duree) {
    throw new Error("Missing required demande fields.");
  }
  const [result] = await db.execute(
    "INSERT INTO demande (client_nom, montant, duree, statut) VALUES (?, ?, ?, ?)",
    [demande.client_nom, demande.montant, demande.duree, "en attente"]
  );
  return result.insertId;
};

const getDemandeById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM demande WHERE demandeId = ?", [
    id,
  ]);
  return rows[0];
};

module.exports = { createDemande, getDemandeById };
