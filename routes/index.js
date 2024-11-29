var express = require("express");
var router = express.Router();
require("../model/connection");
const Place = require("../model/index");

router.post("/places", function (req, res) {
  const newPlace = new Place({
    nickname: req.body.nickname,
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  newPlace.save().then(() => res.json({ result: true }));
});

router.get("/places/:nickname", function (req, res) {
  Place.find({ nickname: req.params.nickname }).then((data) => {
    // if (data) {
    res.json({
      result: true,
      places: data,
    });
    //  } else {
    //  res.json({ result: false, error: "User not found" });
    //  }
  });
});

router.delete("/places", function (req, res) {
  Place.deleteOne({ nickname: req.body.nickname, name: req.body.name }).then(
    (data) => {
      res.json({ result: true });
    }
  );
});

module.exports = router;
