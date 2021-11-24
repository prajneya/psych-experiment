const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path')
const connectDB = require('./config/db')

// routes
const experiment = require('./routes/api/experiment');
app.use(express.static(path.join(__dirname, '../build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'))
})
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

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
