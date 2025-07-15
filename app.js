// app.js

require("dotenv").config();

const express = require("express");
const app = express();
const demandeRoutes = require("./src/routes/demandeRoutes");
const evaluationRoutes = require("./src/routes/evaluationRoutes");
const offreRoutes = require("./src/routes/offreRoutes");
const contratRoutes = require("./src/routes/contratRoutes");

app.use((req, res, next) => {
  console.log(`[Backend] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use("/api", demandeRoutes);
app.use("/api", evaluationRoutes);
app.use("/api", offreRoutes);
app.use("/api", contratRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DemandeService running on port ${PORT}`));
