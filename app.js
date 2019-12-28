const http = require('http');
const express = require('express');
const port = 3000;


// Create the expres App
const app = express();

// The expressjs middleware, need to always call next 
app.use((req, res, next) => {
    console.log('In the middleware!');
    // Need to call next to unblock the execution.
    // Allows the request to continue to the next middleware in the line.
    next();
});


app.use((req, res, next) => {
    console.log('In the another middleware!');
    res.send('<p>Hello ExpressJs</p>');
});


app.listen(port);
console.log(`Server is running at port: ${port}`);