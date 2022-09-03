const express = require('express');
const connectDB = require('./config/db.js');
require('dotenv').config();

const app = express();
connectDB();

const port = 5000 || process.env.PORT;

app.use('/',require('./controllers/testController'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

