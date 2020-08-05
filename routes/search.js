const express = require("express");
const fs = require("fs");
const router = express.Router();
var api_key = process.env.GOOGLE_MAP_API_KEY;
var urllib = require("urllib");

router.get("/start", async (req, res, next) => {
  let searchQuery = req.params.searchQuery;

  res.json(allBattleInfo);
});

router.post("/findAll", async (req, res, next) => {
  console.log("activity" + req.body.activity);
  console.log("distance" + req.body.distance);
  console.log("Category: " + req.body.category);
  console.log("" + api_key);

  let radiusOf = 500;
  let category = "Restaurant";
  let locations = { X: 49.2276, Y: -123.0076 };
  let keywords = "Korean";
  let APIKEYs = api_key;

  let TIMEZONE_BASE_URL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  let LOCATION = "location=" + locations.X + "," + locations.Y + "&";
  let RADIUS = "radius=" + radiusOf + "&";
  let TYPE = "type=" + category + "&";
  let KEYWORD = "keyword=" + keywords + "&";
  let APIKEY = "key=" + APIKEYs;
  //let FULLURL = TIMEZONE_BASE_URL + LOCATION + RADIUS + APIKEY;
  let FULLURL = TIMEZONE_BASE_URL + LOCATION + RADIUS + TYPE + KEYWORD + APIKEY;
  console.log("FULL URL " + FULLURL);
  urllib.request(FULLURL, function (err, data, res) {
    if (err) {
      throw err; // you need to handle error
    }
    console.log(res.statusCode);
    console.log(res.headers);
    // data is Buffer instance
    console.log(data.toString());
  });
});
console.log("Connect searhc");
module.exports = router;
