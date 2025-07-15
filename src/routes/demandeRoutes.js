// src/routes/demandeRoutes.js
const express = require("express");
const router = express.Router();
const {
  createDemande,
  getDemande,
} = require("../../controllers/demandeController");

router.post("/demande", createDemande);
router.get("/demande/:id", getDemande);

module.exports = router;
