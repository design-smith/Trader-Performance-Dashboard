const express = require("express");
const KPI = require("../models/KPI.js");
const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    console.log("KPI Data fetched:", kpis);
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;