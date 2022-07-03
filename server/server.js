const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const travelJourneysRouter = require('./routes/travelJourneysRoute');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB;
mongoose.connect(uri, {
});

const connection = mongoose.connection;
connection.once("open",()=> {
    console.log("MongoDB database connection established successfully");
});

app.use('/travel-journeys', travelJourneysRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});