const express = require('express');
const tourismRouter = express.Router();
const tourismController = require('../controllers/tourismController');

tourismRouter.get('/', tourismController.getData);
tourismRouter.get('/:id', tourismController.getDataById);
tourismRouter.post('/', tourismController.postData);
tourismRouter.put('/:id', tourismController.putData);
tourismRouter.delete('/:id', tourismController.deleteData);

module.exports = tourismRouter;