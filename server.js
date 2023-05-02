const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const eventsRouter = require('./routes/events');
const pageRouter = require('./routes/allevents');

const PORT = 3000;
const uri = 'mongodb+srv://admin:fscalendex23@calendex.2cg3igq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri);
const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
});

db.once("connected", () =>{
    console.log("Connection to database established!");
});

const app = express();

app.use(express.json());
app.use('/events', eventsRouter);
app.use('/allevents', pageRouter);

app.use('/', (req, res) => {
    res.send('CalendeX server runs successfully');
});

// connect to server
const server = http.createServer(app);
server.listen(PORT);
console.debug('Server listening on port ' + PORT);
