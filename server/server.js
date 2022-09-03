const express = require('express');
const connectDB = require('./config/db.js');
var cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

const port = 5000 || process.env.PORT;

app.use(cors());
app.use('/',require('./controllers/employeeController'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

