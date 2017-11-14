var express = require("express");
var path = require("path");
var router = express.Router();

var characterList = require('../data/character.js');
var db = require("../models");




router.post('/api/characters', function(req, res) {


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

    let maxScore = 25;
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

    let maxScore = 25;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

    marvelList = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(marvelList);
    marvelList.push(newSurvey);

});


router.get('/api/marvel', function(req, res) {
    res.json(marvelList);
});


// third GET/POST route














router.post('/api/rickAndMorty', function(req, res) {
>>>>>>> 110ab395a0c54ed6f52e313cf020f52f26e7b348
    let newSurvey = req.body;
    let characterPick;
    let characterConnect = [];

<<<<<<< HEAD
    for (var i = 0; i < characterList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(characterList[i].scores[j] - newSurvey.scores[j]);
=======
    for (var i = 0; i < rickAndMortyList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(rickAndMortyList[i].scores[j] - newSurvey.scores[j]);
>>>>>>> 110ab395a0c54ed6f52e313cf020f52f26e7b348
            totalDifference += scoreDiff;
        }

        characterConnect.push({
<<<<<<< HEAD
            name: characterList[i].name,
            picture: characterList[i].picture,
=======
            name: rickAndMortyList[i].name,
            picture: rickAndMortyList[i].picture,
>>>>>>> 110ab395a0c54ed6f52e313cf020f52f26e7b348
            totalDiff: totalDifference
            });
        }

    let maxScore = 25;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

<<<<<<< HEAD
    characterPick = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(characterPick);
    characterList.push(newSurvey);

});

router.get('/api/characters', function(req, res) {
    res.json(characterList);
});

module.exports = router;

 
=======
    rickAndMortyList = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(rickAndMortyList);
    rickAndMortyList.push(newSurvey);

});


router.get('/api/rickAndMorty', function(req, res) {
    res.json(rickAndMortyList);
});



module.exports = router;





>>>>>>> 110ab395a0c54ed6f52e313cf020f52f26e7b348


