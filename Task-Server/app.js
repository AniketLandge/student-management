const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
const studentRoutes = require('./src/routes/student')

app.use(cors());
//morgan for loging purpose
app.use(morgan('dev'));
app.use(bodyparser.json());

//Route which should handle request
app.use("/students", studentRoutes);

module.exports = app



