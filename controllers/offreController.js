// src/controllers/offreController.js
const offreService = require("../services/offreService");

const createOffre = async (req, res) => {
  try {
    const id = await offreService.createOffre(req.body);
    res.status(201).json({ message: "Offre créée", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOffre = async (req, res) => {
  try {
    const offre = await offreService.getOffreById(req.params.id);
    if (!offre) return res.status(404).json({ error: "Offre non trouvée" });
    res.json(offre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOffre, getOffre };
