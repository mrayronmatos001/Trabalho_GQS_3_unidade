const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.list);
router.get('/novo', supplierController.newForm);
router.post('/', supplierController.create);
router.get('/:id', supplierController.getById);
router.get('/:id/editar', supplierController.editForm);
router.post('/:id', supplierController.update);
router.post('/:id/delete', supplierController.delete);

module.exports = router; 