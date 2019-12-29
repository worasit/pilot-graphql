const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port);
console.log(`Service is running at port: ${port}`);