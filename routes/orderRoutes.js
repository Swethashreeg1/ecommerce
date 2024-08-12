const express = require('express');
 const Router = express.Router();
 const orderController = require('../controllers/orderController');
 const auth = require('../middlewares/auth');

 Router.post('/orders',auth,orderController.manageOrder);
 //Router.get('/getorders',auth,orderController.getorder);


 module.exports = Router;