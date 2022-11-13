const { Router } = require('express');
const router = Router();

//Routes
router.get('/', (req, res) => {
    res.json({ 'Title': 'Hello world' });
});

router.get('/info', (req, res) => {
    const data = {
        'Name': 'Marco',
        'Age': 25
    };
    res.json(data);
});

module.exports = router;