const express = require('express');
const morgan = require('morgan');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

//Config
app.set('port', process.env.PORT || 3000);

//Routes path
app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/games'));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Server start
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
