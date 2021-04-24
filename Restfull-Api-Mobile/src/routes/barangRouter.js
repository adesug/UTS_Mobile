const express = require ('express');
const barangRouter = express.Router();
const barangController = require('../controllers/barangController');

barangRouter.get('/', barangController.getData);
barangRouter.post('/',barangController.postData);
barangRouter.put('/:id', barangController.putData);
barangRouter.get('/:id',barangController.getDataById);
barangRouter.delete('/:id',barangController.deleteData);

module.exports = barangRouter;