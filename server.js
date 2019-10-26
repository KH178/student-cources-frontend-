const express = require('express');
require('./db/mongoose');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');
const courcesRouter = require('./routes/cources');
var cors = require('cors');

const PORT = process.env.PORT || 3000
const isProduction = process.env.NODE_ENV === 'production';


// create express app
const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// define a simple route
app.use('/students',studentsRouter);
app.use('/cources', courcesRouter);


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});