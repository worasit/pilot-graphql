const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    const htmlTemplate = /*html*/
        `
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
        `;
    res.send(htmlTemplate);
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;