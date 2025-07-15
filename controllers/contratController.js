// src/controllers/contratController.js
const contratService = require("../services/contratService");

const createContrat = async (req, res) => {
  try {
    const id = await contratService.createContrat(req.body);
    res.status(201).json({ message: "Contrat créé", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getContrat = async (req, res) => {
  try {
    const contrat = await contratService.getContratById(req.params.id);
    if (!contrat) return res.status(404).json({ error: "Contrat non trouvé" });
    res.json(contrat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createContrat, getContrat };
