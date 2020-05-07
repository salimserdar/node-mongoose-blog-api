const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config()

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('dev'));

// routes
const HomeRoute = require('./api/routes/HomeRoute');

app.use('/', HomeRoute);

const port = process.env.PORT || 500;

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});