const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require("./modules");
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv');
dotenv.config();


app.set('view engine', 'ejs');

app.use(cors()); // This will enable CORS for all routes and origins
 
app.use(bodyParser.json());

dbConnect();
 
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
