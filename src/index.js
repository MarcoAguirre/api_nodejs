const express = require('express');
const morgan = require('morgan');
const app = express();

//Config
app.set('port', process.env.PORT || 3000);
app.use(require('./routes/index'));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Server start
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})