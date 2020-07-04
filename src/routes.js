const express = require("express");
const ProductController = require("./controllers/ProductController");
const routes = express.Router();

routes.get('/Products', ProductController.index);
routes.post('/Products', ProductController.store);
routes.put('/Products/:id', ProductController.update);
routes.delete('/Products/:id', ProductController.destroy);

module.exports = routes;