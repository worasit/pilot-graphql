const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Added the incoming request bodyParser into the middleware.
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res, next) => {
    const htmlTemplate = /*html*/
        `
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
        `;
    res.send(htmlTemplate);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('The main middleware.');
    const htmlTemplate = /*html*/ `
    <h1>Welcome to the Product Management</h1>
    <form action="/add-product" method="GET" target="_self">
        <button type="submit">Create a Product</button>
    </form>`;
    res.send(htmlTemplate);
});

app.listen(port);
console.log(`Service is running at port: ${port}`);

