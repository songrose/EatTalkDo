const express = require("express");
const fs = require("fs");
const router = express.Router();
var api_key = process.env.GOOGLE_MAP_API_KEY;

router.get("/start", async (req, res, next) => {
  let searchQuery = req.params.searchQuery;

  res.json(allBattleInfo);
});

router.post("/findAll", async (req, res, next) => {
  console.log("activity" + req.body.activity);
  console.log("distance" + req.body.distance);
  console.log("Category: " + req.body.category);
  console.log("" + api_key);
});
console.log("Connect searhc");
module.exports = router;
