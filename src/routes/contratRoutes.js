// src/routes/contratRoutes.js
const express = require("express");
const router = express.Router();
const {
  createContrat,
  getContrat,
} = require("../../controllers/contratController");

router.post("/contrat", createContrat);
router.get("/contrat/:id", getContrat);

module.exports = router;
