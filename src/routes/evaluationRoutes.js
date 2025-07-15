// src/routes/evaluationRoutes.js
const express = require("express");
const router = express.Router();
const {
  createEvaluation,
  getEvaluation,
} = require("../../controllers/evaluationController");

router.post("/evaluer", createEvaluation);
router.get("/evaluation/:id", getEvaluation);

module.exports = router;
