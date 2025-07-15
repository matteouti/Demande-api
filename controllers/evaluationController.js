// src/controllers/evaluationController.js
const evaluationService = require("../services/evaluationService");

const createEvaluation = async (req, res) => {
  try {
    console.log("getEvaluation req.params:", req.params);
    //const id = await evaluationService.createEvaluation(req.body);
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    console.log("getEvaluation result:", evaluation);

    if (!evaluation)
      return res.status(404).json({ error: "Évaluation non trouvée" });
    res.json(evaluation);

    //res.status(200).json({ message: "Évaluation récupérée", evaluation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEvaluation = async (req, res) => {
  try {
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    if (!evaluation)
      return res.status(404).json({ error: "Évaluation non trouvée" });
    res.json(evaluation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createEvaluation, getEvaluation };
