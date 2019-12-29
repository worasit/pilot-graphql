const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('The main middleware.');
    const htmlTemplate = /*html*/ `
    <h1>Welcome to the Product Management</h1>
    <form action="/add-product" method="GET" target="_self">
        <button type="submit">Create a Product</button>
    </form>`;
    res.send(htmlTemplate);
});

module.exports = router;