const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.findAll);
router.get('/:id', UserController.findByPk);
router.get('/search/:id', UserController.findByPkAndEmail);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;