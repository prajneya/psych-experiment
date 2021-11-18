const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

// routes
const experiment = require('./routes/api/experiment');

// Connect Database
connectDB();

// BodyParser MiddleWare
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// cors
app.use(cors({ origin: true, credentials: true }));

app.use("/api/experiment", experiment);

const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${port}`));
