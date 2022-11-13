const { Router } = require('express');
const router = Router();

const games = require('../sample.json');

router.get('/games', (req, res) => {
    // res.send("Hello from games route");
    const data = games;
    res.json(data);
});

module.exports = router;