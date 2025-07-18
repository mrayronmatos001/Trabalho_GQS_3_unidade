const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/novo', productController.newForm);
router.post('/', productController.create);
router.get('/:id', productController.getById);
router.get('/:id/editar', productController.editForm);
router.post('/:id', productController.update);
router.post('/:id/delete', productController.delete);

module.exports = router; 