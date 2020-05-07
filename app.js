const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("dev"));

// routes
const HomeRoute = require("./api/routes/HomeRoute");
const PostRoute = require("./api/routes/PostRoute");
const UserRoute = require("./api/routes/UserRoute");

app.use("/", HomeRoute);
app.use("/api/v1/posts", PostRoute);
app.use("/api/v1/user", UserRoute);

//Database connection

mongoose.connect(
  "mongodb://localhost:27017/blog",
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    console.log("Error:", err);
  }
);

// starting the server

const port = process.env.PORT || 500;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
