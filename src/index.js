const express = require('express');
const morgan = require('morgan');
const app = express();

//Config
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.json({ 'Title': 'Hello world' });
})

//Server start
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})