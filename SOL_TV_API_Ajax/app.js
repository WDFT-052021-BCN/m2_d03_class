//1 - Require
//2 - Create express app
//3 - Setup middleware
//4 - Create route for police alerts
//5 - Create route for TV app
//6 - Start the server

// Require Express
const express = require('express');
const port = 3005;

// Express server handling requests and responses
const app = express();

// Middleware for static files
app.use(express.static('public'));

// TV app
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/tv.html');
});

// Server Started
app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
