var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var connectionString = require('./config/connectionString').mongoURI;

const todos = require('./routes/api/todos');

// initialize express  
var app = express();

// use body-parser middleware
app.use(bodyParser.json());

// connec to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => { console.log('Connected to database succesfully'); })
    .catch( err => { console.log(err); });

// use routes
app.use('/api/todos', todos)

// set port for server
// using process.env.PORT just for heroku
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});