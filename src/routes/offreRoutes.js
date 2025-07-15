// src/routes/offreRoutes.js
const express = require("express");
const router = express.Router();
const { createOffre, getOffre } = require("../../controllers/offreController");

router.post("/offre", createOffre);
router.get("/offre/:id", getOffre);

module.exports = router;
