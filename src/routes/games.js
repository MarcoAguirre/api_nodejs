const { Router } = require('express');
const underscore = require('underscore');
const router = Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const games = require('../sample.json');

router.get('/games', jsonParser, (req, res) => {
    // res.send("Hello from games route");
    const data = games;
    res.json(data);
});

router.post('/games', jsonParser, (req, res) => {
    const requestBody = req.body;
    if (requestBody.title && requestBody.characteristics) {
        const id = games.length + 1;
        const gamesReceived = { ...req.body, id };
        games.push(gamesReceived);
        if (!res.headersSent) {
            res.send(requestBody.title + " was added!");
        }
    }
});

router.put('/games/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    const requestBody = req.body;
    if (requestBody.title && requestBody.characteristics) {
        underscore.each(games, (game, i) => {
            if (game.id == id) {
                game.title = requestBody.title;
                game.characteristics = requestBody.characteristics;
            }
        });
        if (!res.headersSent) {
            res.send(requestBody.title + " was modified!");
        }
    }
});

router.delete('/games/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    underscore.each(games, (game, i) => {
        if (game.id == id) {
            games.splice(i, 1);
            if (!res.headersSent) {
                res.send(req.body.title + " was deleted!");
            }
        }
    });
});

module.exports = router;
