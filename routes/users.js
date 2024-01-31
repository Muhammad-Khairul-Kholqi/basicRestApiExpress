const express = require('express');
const userController = require('../controller/users')

const router = express.Router();

// create - post
router.post('/', userController.createNewUser);

// read - get
router.get('/', userController.getAllUsers);

// update - patch
router.patch('/:idUser', userController.updateUser);

// delete - delete
router.delete('/:idUser', userController.deleteUser)


module.exports = router;