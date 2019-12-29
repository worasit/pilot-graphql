const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    const html = /*html*/ `<h1>Page not found for path: ${req.url}</h1>`
    res.status(404).send(html);
});

app.listen(port);
console.log(`Service is running at port: ${port}`);