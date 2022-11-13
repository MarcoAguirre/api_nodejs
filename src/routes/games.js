const { Router } = require('express');
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
    const rquestBody = req.body;
    if (rquestBody.title && rquestBody.characteristics) {
        const id = games.length + 1;
        const gamesReceived = { ...req.body, id };
        games.push(gamesReceived);
        res.send(games);
    }
    res.send("Recibido");
});

module.exports = router;