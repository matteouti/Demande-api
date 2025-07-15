// src/controllers/demandeController.js
const demandeService = require("../services/demandeService");

const createDemande = async (req, res) => {
  try {
    console.log("req.body:", req.body); // Debug: log the request body
    const id = await demandeService.createDemande(req.body);
    res.status(201).json({ message: "Demande créée", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDemande = async (req, res) => {
  try {
    const demande = await demandeService.getDemandeById(req.params.id);
    if (!demande) return res.status(404).json({ error: "Demande non trouvée" });
    res.json(demande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createDemande, getDemande };
