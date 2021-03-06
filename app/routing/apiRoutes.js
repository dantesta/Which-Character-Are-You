var express = require("express");
var path = require("path");
var router = express.Router();
var db = require("../../models");


var starWarsList = require('../data/starWars.js');
var marvelList = require('../data/marvel.js');
var rickAndMortyList = require('../data/rickAndMorty.js');


router.post('/api/starwars', function(req, res) {
    let newSurvey = req.body;
    let characterPick;
    let characterConnect = [];

    for (var i = 0; i < starWarsList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(starWarsList[i].scores[j] - newSurvey.scores[j]);
            totalDifference += scoreDiff;
        }

        characterConnect.push({
            name: starWarsList[i].name,
            picture: starWarsList[i].picture,
            totalDiff: totalDifference
            });
        }

    let maxScore = 30;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

    characterPick = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(characterPick);
    starWarsList.push(newSurvey);

});

router.get('/api/starwars', function(req, res) {
    res.json(starWarsList);
});



router.post('/api/marvel', function(req, res) {
    let newSurvey = req.body;
    let characterPick;
    let characterConnect = [];

    for (var i = 0; i < marvelList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(marvelList[i].scores[j] - newSurvey.scores[j]);
            totalDifference += scoreDiff;
        }

        characterConnect.push({
            name: marvelList[i].name,
            picture: marvelList[i].picture,
            totalDiff: totalDifference
            });
        }

    let maxScore = 30;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

    characterPick = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(characterPick);
    marvelList.push(newSurvey);

});


router.get('/api/marvel', function(req, res) {
    res.json(marvelList);
});


// third GET/POST route








router.post('/api/rickAndMorty', function(req, res) {
    let newSurvey = req.body;
    let characterPick;
    let characterConnect = [];

    for (var i = 0; i < rickAndMortyList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(rickAndMortyList[i].scores[j] - newSurvey.scores[j]);
            totalDifference += scoreDiff;
        }

        characterConnect.push({
            name: rickAndMortyList[i].name,
            picture: rickAndMortyList[i].picture,
            totalDiff: totalDifference
            });
        }

    let maxScore = 30;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

    characterPick = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(characterPick);
    rickAndMortyList.push(newSurvey);

});


router.get('/api/rickAndMorty', function(req, res) {
    res.json(rickAndMortyList);
});





router.post("/api/newuser", function(req,res) {
  console.log(req.body);

  db.User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
  }).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    if (err) throw err;
  })
});





module.exports = router;







