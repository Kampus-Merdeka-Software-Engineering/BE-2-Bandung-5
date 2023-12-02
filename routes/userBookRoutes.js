const express = require('express');
const userController = require('../controllers/userBooController')
const router = require('express').Router()

router.get('/getUser', userController.getUser)
router.post('/postUser', userController.postUser)

module.exports = router;